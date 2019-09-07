
export class Message {
  id?: number;
  text: string;
  date?: Date | number;
  delay?: number;
  author_signature?: string;
  author: {
    type: string,
    avatar?: string,
  };

  message_id?: number;
  constructor (
    message: string = '',
    date: Date | number = new Date(),
    type: string = 'guest',
    id: number = null,
  ) {
    this.text = message;
    this.date =  (date instanceof Date) ? date : new Date(+date * 1000);
    this.author = { type };
    this.id = id;
  }
}

export interface TelegramResponse {
  ok: boolean;
  result: Array<any>;
}

export interface TelegramUpdate {
  text: string;
  date: number;
}

export interface TelegramUpdate {
  ok: boolean;
  result: Array<any>;
}
