import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CoreConfig } from './core.config';
import { CoreService } from './core.service';
import {TextAnalysisService} from './text-analysis.service';

import { TwilioChatService } from './twilio-chat.service';
import { FunnyNamesService } from './funny-names.service';
import { ChatModule } from '../chat/chat.module';
@NgModule({
  imports: [
    ChatModule
  ],
  providers: [ CoreService, TwilioChatService, FunnyNamesService ]
})
export class CoreModule {
  public static forRoot(config: CoreConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: CoreConfig, useValue: config }, TextAnalysisService]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Prevent reimport of the CoreModule.
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule ONLY');
    }
  }
}
