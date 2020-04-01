import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  selectedConversationIndex: number = 0;
  conversations = [
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
      daysMessages: [
        {
          date: '6 січ 2019 р., 23:31',
          messages: [
            {
              text: 'Hi Daniel, how are u ?',
              date: '31.01.18, 14:37',
              author: {
                type: 'yura',
                avatar: 'assets/img/yura.jpg',
              }
            },
            {
              text: 'I don\'t believe the websites, I believe in conversation',
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
      ]
    }
  ];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.selectedConversation = this.conversations[this.selectedConversationIndex];
  }

  openConversation(index) {
    this.selectedConversationIndex = index;
    this.chat.selectedConversation = this.conversations[index];
  }

}
