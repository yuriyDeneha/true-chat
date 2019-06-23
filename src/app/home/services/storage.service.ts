import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = localStorage;
  constructor() { }



  getItem(property): any {
    const value = this.storage.getItem(property);
    if (this.isString(value)) {
      return value;
    }
    return value ? JSON.parse(value) : null;
  }

  setItem(property, value): any {
    const valueConvertedToString = this.isString(value) ?
      value :
      JSON.stringify(value);
    this.storage.setItem(property, valueConvertedToString);
  }

  isString(value) {
    return typeof value === 'string';
  }
}
