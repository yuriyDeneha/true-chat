import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, filter, flatMap, map, repeat, retry, tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { StorageService } from './storage.service';
import { TelegramResponse, Message } from '../models/messenger.interface';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  selectedConversation;
  private BOT_API_KEY = '586036872:AAGVt2-FI2p-9ECr8pLKDA0N38vz3NN1jpw';
  private API_URL = `https://api.telegram.org/bot${this.BOT_API_KEY}/`;
  private CHANNEL_NAME = '@diva_chat';
  private YURIY_SIGNATURE = 'Yuriy Deneha';
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  sendMessage(message) {
    const url = `${this.API_URL}sendMessage?` +
    `chat_id=${this.CHANNEL_NAME}` +
    `&text=${message}`;
    return this.http.get(url);
  }

  getChatUpdates() {
    const timeout = 200;
    const limit = 200;
    const allowed = ['message', 'edited_channel_post', 'callback_query'];
    const url = `${this.API_URL}getUpdates?` +
      `allowed_updates=${allowed}&` +
      // `timeout=${timeout}&` +
      `limit=${limit}`;
    return interval(6000)
      .pipe(
        flatMap(() => {
          return this.http.get(url)
            .pipe(
              filter((response: TelegramResponse) => response.ok),
              map((response: TelegramResponse) => response.result),
              map((result) => this.mapUpdatesToMessages(result)),
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

    console.log(messages);
    return messages;
  }

  updateMessages(messages) {
    messages.forEach((message) => this.storage.updateMessages(message));
    return this.storage.getItem('conversation');
  }
}
