import { Component, OnInit } from '@angular/core';
import { TwilioChatService } from '../core/twilio-chat.service';
import { FunnyNamesService } from '../core/funny-names.service';
import { TextAnalysisService } from '../core/text-analysis.service';
import { LanguageCode } from '../models/language-code-enum';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages = [];
  inputMsg = "";
  nickname: string;
  chatConnected = false;

  constructor(private twilioChatService: TwilioChatService,
              private funnyNamesService: FunnyNamesService,
              private textAnalysisService: TextAnalysisService) { }

  ngOnInit() {
    this.funnyNamesService.generateName().subscribe((nickname: string) => {
      this.nickname = nickname;
      this.twilioChatService.enterChat('ngry-chat', nickname)
      .then( () =>
        this.chatConnected = true
      );
      
      this.twilioChatService.messages$.subscribe((messages)=> this.messages = messages);
    });
  }

  _handleClick() {
    this.twilioChatService.sendMessage(this.inputMsg);
    console.log(this.textAnalysisService.getSentimentScoreForText(this.inputMsg, LanguageCode.EN));
  }
}
