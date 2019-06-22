import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [
    {
      text: 'Hi Daniel, I\'m a struggling IT entrepreneur, Co-Founder of Codelions team.',
      delay: 5000,
      author: {
        type: 'yura',
      }
    },
    {
      text: 'You know, I don\'t believe the websites, I believe in conversation',
      delay: 3500,
      author: {
        type: 'yura',
      }
    },
    {
      text: 'Glad to have your visit on my website',
      delay: 1000,
      author: {
        type: 'yura',
      }
    }
  ];

  isTyping: boolean = false;
  messagesAsync = [];
  constructor(public home: HomeService) { }

  ngOnInit() {
    const previousConversationNotParsed = localStorage.getItem('conversation');

    if (!previousConversationNotParsed) {
      this.startConversation();
    } else {
      this.messagesAsync = JSON.parse(previousConversationNotParsed);
    }
  }


  async startConversation() {

    const delay = (delay) => {
      return new Promise(resolve => setTimeout(resolve, delay));
    };

    const addNewMessage = async (message) => {
      await delay(500);
      this.isTyping = true;
      await delay(message.delay);
      this.messagesAsync.push(message);
      this.isTyping = false;
    };
    for (const message of this.messages) {
      await addNewMessage(message);
    }
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
    console.log($event.target);
    const message = $event.target.value;
    $event.target.value = '';
    console.log(message);
    this.messagesAsync.push( new Message(message));
    localStorage.setItem('conversation', JSON.stringify(this.messagesAsync));
  }

}

export  class  Message {
  text: string;
  date?: Date | string;
  delay?: number;
  author: {
    type: string,
    avatar?: string,
  };
  constructor (message: string) {
    this.text = message;
    this.date = new Date();
    this.author = {
      type: 'guest',
      avatar: ''
    };
  }

}
