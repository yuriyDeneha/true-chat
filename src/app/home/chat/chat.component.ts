import { Component, OnInit } from '@angular/core';
import { HomeService, Message } from '../services/home.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [
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

  isTyping: boolean = false;
  messagesAsync = [];
  constructor(
    public home: HomeService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    const previousConversationNotParsed = localStorage.getItem('conversation');

    if (!previousConversationNotParsed) {
      this.startConversation();
      this.storage.setItem('conversation', this.messages);
    } else {
      this.messagesAsync = JSON.parse(previousConversationNotParsed);
    }

    this.getChatUpdates();
  }


  async startConversation() {

    for (const message of this.messages) {
      await this.addMessageToChat(message);
    }
  }

  async addMessageToChat (messageObject) {
    await this.delay(500);
    this.isTyping = true;
    await this.delay(messageObject.delay);
    messageObject.text = this.setMessageValues(messageObject.text);
    messageObject.date = messageObject.date || new Date();
    this.messagesAsync.push(messageObject);
    this.isTyping = false;
  };

  delay(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  };

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
    this.messagesAsync.push( new Message(message));
    this.storeConversationInStorage();
    this.sendMessage(message);
  }

  setMessageValues(message: string) {
    const guestName = this.storage.getItem('guestName');
    message = message.replace('*NAME*', guestName);

    return message;
  }

  sendMessage(message) {
    this.home.sendMessage(message)
      .subscribe(response => {
      });
  }

  getChatUpdates() {
    this.home.getChatUpdates()
      .subscribe((messages: Message[]) => {
        messages.forEach((message: Message) => {
          this.messagesAsync = [];
          this.addMessageToChat(message);
        });
        // this.storeConversationInStorage();
      });
  }

  storeConversationInStorage() {
    this.storage.setItem('conversation', this.messagesAsync);
  }
}

