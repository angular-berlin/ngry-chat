import { Component, OnInit } from '@angular/core';

export class Message {
  user: string;
  message: string;
}

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages = [
    {
      "user": "user1",
      "text": "message1 - totally made up stuff"
    }, 
    {
      "user": "user2",
      "text": "message2 - totally made up stuff"
    }, 
    {
      "user": "user2",
      "text": "message2 - totally made up stuff"
    }, 
  ];

  constructor() { }

  ngOnInit() {
    
  }


}
