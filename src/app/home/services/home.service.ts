import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, filter, flatMap, map, repeat, retry, tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { StorageService } from './storage.service';

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
    return interval(3000)
      .pipe(
        flatMap(() => {
          console.log('new call');
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
        const message = new Message(mappedUpdate.text, mappedUpdate.date, type);
        messages.push(message);
    });
    return messages;
  }

  updateMessages(messages) {
    const currentUpdate = messages[messages.length - 1].date.toString();
    const lastUpdate = this.storage.getItem('lastUpdate');
    if (currentUpdate > lastUpdate) {
      this.storage.setItem('lastUpdate', currentUpdate);
    } else {
      return [];
    }
    return messages;
  }
}

interface TelegramResponse {
  ok: boolean;
  result: Array<any>;
}

interface TelegramUpdate {
  text: string;
  date: number;
}

interface TelegramUpdate {
  ok: boolean;
  result: Array<any>;
}

export class Message {
  text: string;
  date?: Date | number;
  delay?: number;
  author_signature?: string;
  author: {
    type: string,
    avatar?: string,
  };
  constructor (message: string = '', date: Date | number = 0, type: string = 'guest') {
    this.text = message;
    this.date = new Date(date * 1000);
    this.author = { type };
  }
}
