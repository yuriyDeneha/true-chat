import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-what-is-your-name',
  templateUrl: './what-is-your-name.component.html',
  styleUrls: ['./what-is-your-name.component.scss']
})
export class WhatIsYourNameComponent implements OnInit {

  @Output() close = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
