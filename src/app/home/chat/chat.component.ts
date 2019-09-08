import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { StorageService } from '../services/storage.service';
import { Message } from '../models/messenger.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [
    {
      text: 'Hi Yuriy, I\'m *NAME*',
      delay: 1000,
      author: {
        type: 'rockStar',
      }
    },
    {
      text: 'Hi *NAME*, I\'m a struggling IT entrepreneur',
      delay: 7000,
      author: {
        type: 'yura',
      }
    },
    {
      text: 'You know, I don\'t believe the websites, I believe in conversation',
      delay: 4500,
      author: {
        type: 'yura',
      }
    },
    {
      text: 'I\'m glad to have you here. How can I help you?',
      delay: 3000,
      author: {
        type: 'yura',
      }
    }
  ];

  messagesAsync = [];
  constructor(
    public chat: ChatService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    const previousConversation = this.storage.getItem('conversation');

    if (!previousConversation) {
      this.startConversation();
      setTimeout(() => {
        this.storeInitialMessagesToStorage();
        this.subscribeToChatChanges();
      }, this.messages[0].delay + this.messages[1].delay + this.messages[2].delay + this.messages[3].delay) + 1000;
    } else {
      this.messagesAsync = previousConversation;    
      this.subscribeToChatChanges();
    }

  }

  storeInitialMessagesToStorage() {
    this.messages.forEach((message: Message) => this.storage.updateMessages(message));
  }

  async startConversation() {
    for (const message of this.messages) {
      await this.addMessageToChat(message);
    }
  }

  async addMessageToChat (messageObject) {
    await this.delay(500);
    this.chat.isTyping = true;
    await this.delay(messageObject.delay);
    messageObject.text = this.setMessageValues(messageObject.text);
    messageObject.date = messageObject.date || new Date();
    this.messagesAsync.push(messageObject);
    this.chat.isTyping = false;
  }

  delay(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  isMyMessageAndLatestOne(index) {
    return index === this.messagesAsync.length - 1
      || this.messagesAsync[index + 1].author.type !== this.messagesAsync[index].author.type;
  }

  isAnotherDay(index) {
    return  index === 0 ||
      !this.isSameDay(this.messagesAsync[index - 1].date, this.messagesAsync[index].date);
  }

  isSameDay(date1, date2) {
    const d1 = new Date(date1 || new Date()),
          d2 = new Date(date2 || new Date());
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  dateFormat(date: Date | string): string {
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    };
    if (!date) {
      date = new Date();
    }
    if (typeof date === 'string' || date instanceof String) {
      date = new Date(date);
    }
    return date.toLocaleDateString('en-US', options);
  }

  addNewMessage($event) {
    const message = $event.target.value;
    $event.target.value = '';
    this.messagesAsync = this.storage.updateMessages(new Message(message));
    this.sendMessage(message);
  }

  setMessageValues(message: string) {
    const guestName = this.storage.getItem('guestName', true);
    message = message.replace('*NAME*', guestName);

    return message;
  }

  sendMessage(message) {
    if (!message) {
      return;
    }
    this.chat.sendMessage(message)
      .subscribe(response => {
        console.log(response);
      });
  }

  subscribeToChatChanges() {
    this.chat.getChatUpdates()
      .subscribe((messages: Message[]) => {

        if (messages.length !== this.messagesAsync.length) {
          this.messagesAsync = messages;
        }
      });
  }
}

