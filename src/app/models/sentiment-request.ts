import {LanguageCode} from './language-code-enum';

export interface SentimentRequest {
  documents: {
    language: LanguageCode;
    id: string;
    text: string;
  }[];
}
