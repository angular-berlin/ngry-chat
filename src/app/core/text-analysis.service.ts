import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SentimentResult} from '../models/sentiment-result';
import {Observable} from 'rxjs';
import {LanguageCode} from '../models/language-code-enum';
import {environment} from '../../environments/environment';
import {SentimentRequest} from '../models/sentiment-request';
import {filter, map} from 'rxjs/operators';

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

  /**
   * This method returns a json with documents being an array with the first (and only) element
   * being the result score for the given message. The important part here is the score, which says
   * if the message has a negative or positive mood. Below .5 means it's a negative tone if it is
   * above .5 it is a more positive message.   *
   */
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

  isMessagePositiveSentiment(msg: string, language: LanguageCode): Observable<boolean> {
    return this.getSentimentScoreForText(msg, language).pipe(
      filter(sentimentResult => sentimentResult.documents.length > 0),
      map(sentimentResult => (sentimentResult.documents[0].score >= .5))
    );
  }
}
