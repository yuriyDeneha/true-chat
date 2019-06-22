import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-universal';
import { MetaService } from '@ngx-meta/core';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { interval, of } from 'rxjs';
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  title = '';
  services = [
    'web development',
    'IT consulting',
    'ui/ux design',
    'hybrid mobile development',
    'startup MVP development',
    'remote developers for hire',
    'tech support after release'
  ];
  // titleString = 'we don\'t believe the websites, we believe in conversation';

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _http: TransferHttpService,
    private readonly _meta: MetaService,
    private _universalStorage: UniversalStorage,
    // instead window.document
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  ngOnInit(): void {
    this._universalStorage.removeItem('test');
    let resultCookie = this._universalStorage.getItem('test');
    if (resultCookie) {
      this.errorMessage = 'Cookie remove item not working';
      console.log('Cookie put remove not working');
    }
    console.log('home resultCookie 0:', resultCookie);
    this._universalStorage.setItem('test', 'test2');
    resultCookie = this._universalStorage.getItem('test');
    if (!resultCookie) {
      this.errorMessage = 'Cookie put item not working';
      console.log('Cookie put item not working');
    }
    console.log('home resultCookie 1:', resultCookie);
    const t = window;
    const t1 = document;
    this._meta.setTag('description', 'Meta update from init');
    this.startTitleAnimation();
  }

  startTitleAnimation() {

    const typingSpeed = 120;
    let delayBetweenWords = 0;


    const delay = (delay) => {
      return new Promise(resolve => setTimeout(resolve, delay));
    };

    async function animationProcess(services, index, self) {
      const previousElementIndex = index ? index - 1: services.length - 1;
      delayBetweenWords = services[previousElementIndex].length * typingSpeed + 1500;

      await delay(delayBetweenWords);
      const animation = interval(typingSpeed);
      animation
        .pipe(
          take(services[index].length),
        )
        .subscribe(() => {
          const letterIndex = self.title.length;
          self.title += services[index][letterIndex];
        });
    }
    async function processArray(services, self) {
      let index = -1;
      while (true) {
        index = index === services.length - 1 ? 0 : index + 1;
        await animationProcess(services, index, self);
        self.title = '';
      }
    }
    processArray(this.services, this);
  }
}
