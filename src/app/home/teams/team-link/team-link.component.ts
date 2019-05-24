import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-link',
  templateUrl: './team-link.component.html',
  styleUrls: ['./team-link.component.scss']
})
export class TeamLinkComponent implements OnInit {

  @Input() team;

  constructor() { }

  ngOnInit() {
  }

}
