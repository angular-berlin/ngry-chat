import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SentimentResult} from '../models/sentiment-result';
import {Observable} from 'rxjs/Observable';
import {LanguageCode} from '../models/language-code-enum';
import {environment} from '../../environments/environment';
import {SentimentRequest} from '../models/sentiment-request';

export const createSentimentRequest = (msg: string, language: LanguageCode): SentimentRequest => {
  return {
    documents: [{
      language: language,
      id: 'not-needed-yet',
      text: msg
    }]
  };
};

@Injectable()
export class TextAnalysisService {

  constructor(private httpClient: HttpClient) {
  }

  getSentimentScoreForText(msg: string, language: LanguageCode): Observable<SentimentResult> {
    return this.httpClient
      .post<SentimentResult>(
        environment.azureSentimentServiceUrl,
        createSentimentRequest(msg, language),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': environment.azureTextAnalysisToken
          })
        }
      );
  }
}
