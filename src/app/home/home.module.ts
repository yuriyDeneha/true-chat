import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamLinkComponent } from './teams/team-link/team-link.component';

@NgModule({
  imports: [CommonModule, HomeRoutes, TranslateModule],
  declarations: [HomeComponent, TeamsComponent, TeamLinkComponent],
})
export class HomeModule {}
