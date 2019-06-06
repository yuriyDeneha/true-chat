import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsYourNameComponent } from './what-is-your-name.component';

describe('WhatIsYourNameComponent', () => {
  let component: WhatIsYourNameComponent;
  let fixture: ComponentFixture<WhatIsYourNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsYourNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsYourNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
