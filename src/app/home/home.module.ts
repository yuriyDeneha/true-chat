import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamLinkComponent } from './teams/team-link/team-link.component';
import { ChatComponent } from './chat/chat.component';
import { WhatIsYourNameComponent } from './components/modals/what-is-your-name/what-is-your-name.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { ChatService } from './services/chat.service';

@NgModule({
  imports: [CommonModule, HomeRoutes, TranslateModule, FormsModule],
  declarations: [
    HomeComponent,
    TeamsComponent,
    TeamLinkComponent,
    ChatComponent,
    WhatIsYourNameComponent
  ],
  providers: [ChatService, StorageService]
})
export class HomeModule {}
