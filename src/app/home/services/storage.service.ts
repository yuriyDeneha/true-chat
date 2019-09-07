import { Injectable } from '@angular/core';
import { Message } from '../models/messenger.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = localStorage;
  constructor() { }



  getItem(property, isString = false): any {
    const value = this.storage.getItem(property);

    if (isString) {
      return value;
    }
    const parsedValue = value ? JSON.parse(value) : null;
    return parsedValue;
  }

  setItem(property, value): any {
    const valueConvertedToString = this.isString(value) ?
      value :
      JSON.stringify(value);
    this.storage.setItem(property, valueConvertedToString);
  }

  updateMessages(newMessage: Message): any {
    const messages = this.getItem('conversation') || [];;

    if (!newMessage.id) {
      newMessage.id = this.generateId(messages.map((message: Message) => message.id));
      messages.push(newMessage);
    } else {
      if (messages.every((mes) => mes.id !== newMessage.id)) {
        messages.push(newMessage);
      }
    }

    this.setItem('conversation', messages);
    return messages;
  }

  generateId(array: Array<number>) {
    const min = 10;
    const max = 1000000;
    let rand;
    do {
      rand = Math.floor(Math.random() * (max - min + 1) + min);
    } while (array.some((item) => item === rand));

    return rand;
  }

  isString(value) {
    return typeof value === 'string';
  }
}
