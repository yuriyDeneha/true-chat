import { ModuleWithProviders, NgModule } from '@angular/core';

import { TransferHttpModule } from '@gorniv/ngx-universal';

import { LayoutsModule } from './layouts/layouts.module';
import { SharedMetaModule } from './shared-meta';
import { SharedFormsModule } from '@shared/shared-forms/shared-forms.module';
import { WhatIsYourNameComponent } from '../home/components/modals/what-is-your-name/what-is-your-name.component';
import { FormsModule } from '@angular/forms';

const exports = [

];
@NgModule({
  imports: [FormsModule],
  exports: [LayoutsModule, SharedMetaModule, TransferHttpModule, ...exports],
  providers: [],
  declarations: [ ...exports ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
