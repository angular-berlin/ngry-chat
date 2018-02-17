import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages = [];

  constructor() { }

  ngOnInit() {
    
  }

}
