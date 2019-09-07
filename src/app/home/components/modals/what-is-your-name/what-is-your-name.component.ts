import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-what-is-your-name',
  templateUrl: './what-is-your-name.component.html',
  styleUrls: ['./what-is-your-name.component.scss']
})
export class WhatIsYourNameComponent implements OnInit {

  name = '';
  isNameStored: boolean = false;
  @Output() close = new EventEmitter<string>();

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.getInitialState();
  }

  getInitialState() {
    this.name = this.storage.getItem('guestName', true);
    this.isNameStored = !!this.name;
  }

  confirmModal() {
    this.close.emit(this.name);
  }


  getGreetings() {
    const whatIsYourName = 'What is your name?',
          gladToSeeYouAgain = `Hi ${this.name}, I\'m glad to see you again!`;

    return this.isNameStored ?
      gladToSeeYouAgain :
      whatIsYourName;
  }
}
