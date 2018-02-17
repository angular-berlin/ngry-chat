import { Injectable, Optional } from '@angular/core';
import { CoreConfig } from './core.config';

@Injectable()
export class CoreService {
  constructor( @Optional() config: CoreConfig) {
    if (config) {
      // CAUTION: CoreConfig does not accept any process.env variables.
    }
  }
}
