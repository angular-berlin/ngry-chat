import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import TwilioChat from 'twilio-chat';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TwilioChatService {

  private token;
  private channel;
  private client;
  private _messages = [];

  messages: BehaviorSubject<{ user, text }[]> = new BehaviorSubject<{ user, text }[]>([]);

  constructor(private httpClient: HttpClient) { }

  registerListeners(client): void {
    client.on('channelJoined', channel => {
      this.channel = channel;

      // get message history
      channel.getMessages()
        .then(page => {
          page.items.forEach(msg => this.addMessage(msg.author, msg.body));
        })
        .catch(err => {
          console.error(err);
        });

      channel.on('messageAdded', message => {
        // if there is a new message, add it to the DOM
        this.addMessage(message.author, message.body);
      });

      channel.on('memberJoined', member => {
        // if a new member joined the chat, add it to the DOM
        this.addMessage('System', `${member.identity} has joined! 🎉`);
      });
    });
  }

  private addMessage(user, text): void {
    this._messages.push({ user, text });
    this.messages.next([...this._messages]);
  }

  sendMessage(message): void {
    this.channel.sendMessage(message);
  }

  enterChat(chatName) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(environment.tokenURL).subscribe((response: any) => {
        this.token = response.token;
        TwilioChat.create(this.token)
          .then(client => {
            this.client = client;
            this.registerListeners(client);
            return client.getChannelByUniqueName(chatName);
          })
          .then(channel => this.channel = channel, () => {
            return this.client.createChannel({ uniqureName: chatName });
          })
          .then(channel => {
            return channel.join().then(resolve());
          })
          .catch(err => {
            reject(err);
          });
      });
    })
  }
}
