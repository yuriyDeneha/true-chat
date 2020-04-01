import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, filter, flatMap, map, repeat, retry, tap } from 'rxjs/operators';
import { interval, timer } from 'rxjs';
import { StorageService } from './storage.service';
import { TelegramResponse, Message, Messages } from '../models/messenger.interface';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  selectedConversation;
  private BOT_API_KEY = '586036872:AAGVt2-FI2p-9ECr8pLKDA0N38vz3NN1jpw';
  private API_URL = `https://api.telegram.org/bot${this.BOT_API_KEY}/`;
  private CHANNEL_NAME = '@diva_chat';
  private YURIY_SIGNATURE = 'Yuriy Deneha';
  isTyping: boolean = false;
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  sendMessage(messageText) {
    const message = this.getMessageWithConversationId(messageText);
    const url = `${this.API_URL}sendMessage?` +
    `chat_id=${this.CHANNEL_NAME}` +
    `&text=${message}`;
    return this.http.get(url);
  }

  getMessageWithConversationId(messageText: string): string {
    const conversationId = this.storage.getConversationId();
    return `${conversationId}: ${messageText}`;
  }

  getChatUpdates() {
    const timeout = 2000;
    const limit = 1000;
    const allowed = ['message'];
    const url = `${this.API_URL}getUpdates?` +
      `allowed_updates=${allowed}&` +
      `timeout=${timeout}&` +
      `limit=${limit}`;
    return timer(0, 4000)
      .pipe(
        flatMap(() => {
          return this.http.get(url)
            .pipe(
              filter((response: TelegramResponse) => response.ok),
              map((response: TelegramResponse) => response.result),
              map((result) => this.mapUpdatesToMessages(result)),
              tap((result) => this.catchTyping(result)),
              map((result) => this.filterByConversationId(result)),
              map((messages) => this.updateMessages(messages))
            );
        })
      );
  }

  mapUpdatesToMessages(updates) {
    const messages = [];
    updates
      .map((update: { channel_post: Object }) => update.channel_post)
      .forEach((mappedUpdate: Message) => {

        const type = mappedUpdate.author_signature ===  this.YURIY_SIGNATURE ? 'yura' : 'guest';
        const message = new Message(mappedUpdate.text, mappedUpdate.date, type, mappedUpdate.message_id);
        messages.push(message);
    });
    return messages;
  }

  filterByConversationId(messages: Messages) {
    const conversationId = this.storage.getItem('conversationId') + ': ';

    return messages
      .filter((update) => update.text.startsWith(conversationId))
      .map((update) => {
        update.text = update.text.replace(conversationId, '');
        return update;
      });
  }

  catchTyping(messages: Messages) {
    const ON = 'On';
    const OFF = 'Off';
    messages.forEach((message) => {
      if (message.text === ON) {
        this.isTyping = true;
      }
      if (message.text === OFF) {
        this.isTyping = false;
      }
    });
  }

  updateMessages(messages: Messages) {
    messages.forEach((message) => this.storage.updateMessages(message));
    return this.storage.getItem('conversation');
  }
}
