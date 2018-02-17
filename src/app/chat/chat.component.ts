import { Component, OnInit } from '@angular/core';
import { TwilioChatService } from '../core/twilio-chat.service';
import { TextAnalysisService } from '../core/text-analysis.service';

export class Message {
  user: string;
  message: string;
}

export class FormInfo {
  userMsg: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages = [];
  inputMsg = "";
  chatConnected = false;

  constructor(private twilioChatService: TwilioChatService) { }

  ngOnInit() {
    this.twilioChatService.enterChat('ngry-chat', 'markus')
      .then( () =>
        this.chatConnected = true
      );
    this.twilioChatService.messages$.subscribe((messages)=> {this.messages = messages; console.log(this.messages);});

  }

  _handleClick() {
    this.twilioChatService.sendMessage(this.inputMsg);
  }
}
