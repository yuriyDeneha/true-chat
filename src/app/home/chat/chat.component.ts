import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  daysMessages = [
    {
      date: '6 січ 2019 р., 23:31',
      messages: [
        {
          text: 'Gdg fds gfds gdgdgdgsf gdf dgsgsdfgsdfgsd',
          date: '31.01.18, 14:37',
          author: {
            type: 'guest',
            avatar: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-1/c0.0.100.100a/p100x100/46916778_1120501704787376_7684256457495150592_n.jpg?_nc_cat=103&_nc_ht=scontent.fiev21-2.fna&oh=d9fdf5362c69b06c12c0c9a3dd3d2979&oe=5D63C9B1',
          }
        },
        {
          text: 'Gdg fds gfds gdgdgdgsf gdf dgsgsdfgsdfgsd',
          date: '31.01.18, 14:37',
          author: {
            type: 'own',
            avatar: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-1/c0.0.100.100a/p100x100/46916778_1120501704787376_7684256457495150592_n.jpg?_nc_cat=103&_nc_ht=scontent.fiev21-2.fna&oh=d9fdf5362c69b06c12c0c9a3dd3d2979&oe=5D63C9B1',
          }
        },
      ]
    },
    {
      date: '6 січ 2019 р., 23:31',
      messages: [
        {
          text: 'Gdg fds gfds gdgdgdgsf gdf dgsgsdfgsdfgsd',
          date: '31.01.18, 14:37',
          author: {
            type: 'guest',
            avatar: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-1/c0.0.100.100a/p100x100/46916778_1120501704787376_7684256457495150592_n.jpg?_nc_cat=103&_nc_ht=scontent.fiev21-2.fna&oh=d9fdf5362c69b06c12c0c9a3dd3d2979&oe=5D63C9B1',
          }
        },
        {
          text: 'Gdg fds gfds gdgdgdgsf gdf dgsgsdfgsdfgsd',
          date: '31.01.18, 14:37',
          author: {
            type: 'own',
            avatar: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-1/c0.0.100.100a/p100x100/46916778_1120501704787376_7684256457495150592_n.jpg?_nc_cat=103&_nc_ht=scontent.fiev21-2.fna&oh=d9fdf5362c69b06c12c0c9a3dd3d2979&oe=5D63C9B1',
          }
        },
        {
          text: 'Gdg fds gfds gdgdgdgsf gdf dgsgsdfgsdfgsd',
          date: '31.01.18, 14:37',
          author: {
            type: 'own',
            avatar: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-1/c0.0.100.100a/p100x100/46916778_1120501704787376_7684256457495150592_n.jpg?_nc_cat=103&_nc_ht=scontent.fiev21-2.fna&oh=d9fdf5362c69b06c12c0c9a3dd3d2979&oe=5D63C9B1',
          }
        }
      ]
    },
    {
      date: '6 січ 2019 р., 23:31',
      messages: [
        {
          text: 'Gdg fds gfds gdgdgdgsf gdf dgsgsdfgsdfgsd',
          date: '31.01.18, 14:37',
          author: {
            type: 'guest',
            avatar: 'https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-1/c0.0.100.100a/p100x100/46916778_1120501704787376_7684256457495150592_n.jpg?_nc_cat=103&_nc_ht=scontent.fiev21-2.fna&oh=d9fdf5362c69b06c12c0c9a3dd3d2979&oe=5D63C9B1',
          }
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
