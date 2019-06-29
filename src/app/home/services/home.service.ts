import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  selectedConversation;
  private BOT_API_KEY = '586036872:AAGVt2-FI2p-9ECr8pLKDA0N38vz3NN1jpw';

  constructor(private http: HttpClient) { }

  sendMessage(message) {
    const CHANNEL_NAME = '@diva_chat';
    const url = `https://api.telegram.org/bot${this.BOT_API_KEY}/sendMessage?` +
      `chat_id=${CHANNEL_NAME}&text=${message}
    `;
    return this.http.get(url);
  }

  getChatUpdates() {
    const timeout = 5;
    const limit = 3;
    const allowed = ['message', 'edited_channel_post', 'callback_query'];
    const url = `https://api.telegram.org/bot${this.BOT_API_KEY}/getUpdates?` +
      `allowed_updates=${allowed}&` +
      `timeout=${timeout}&` +
      `limit=${limit}`;
    return this.http.get(url)
      .pipe(
        filter((response: TelegramResponse) => response.ok),
        map((response: TelegramResponse) => response.result),
        map((result) => this.mapUpdatesToMessages(result))
      );
  }

  mapUpdatesToMessages(updates) {
    const messages = [];

    updates
      .map((update: { channel_post: Object }) => update.channel_post)
      .forEach((mappedUpdate: TelegramUpdate) => {
        const message = new Message(mappedUpdate.text, mappedUpdate.date);
        messages.push(message);
    });
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
  date?: Date | string;
  delay?: number;
  author: {
    type: string,
    avatar?: string,
  };
  constructor (message: string = '', date: number = 0) {
    this.text = message;
    this.date = new Date(date * 1000);
    this.author = {
      type: 'guest'
    };
  }
}
