import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams = [
    {
      name: 'New clients support department',
      img: 'https://www.incimages.com/uploaded_files/image/970x450/getty_119557713_9707279704500162_61796.jpg',
      lastMessage:  {
        text: 'Hello, guest, how r u?',
        date: '1558637848520',
        author: {
          img: 'https://www.incimages.com/uploaded_files/image/970x450/getty_119557713_9707279704500162_61796.jpg',
          firstName: 'Vova'
        }
      },
    },
    {
      name: 'Founders chat',
      img: 'https://www.incimages.com/uploaded_files/image/970x450/getty_119557713_9707279704500162_61796.jpg',
      lastMessage:  {
        text: 'Hello, guest, how r u?',
        date: '1558637848520',
        author: {
          img: 'https://www.incimages.com/uploaded_files/image/970x450/getty_119557713_9707279704500162_61796.jpg',
          firstName: 'Vova'
        }
      },
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
