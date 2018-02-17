import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CoreConfig } from './core.config';
import { CoreService } from './core.service';
<<<<<<< HEAD

@NgModule({
  providers: [ CoreService ]
=======
import { TwilioChatService } from './twilio-chat.service';

@NgModule({
  providers: [ CoreService, TwilioChatService ]
>>>>>>> eb2ecd39366e5a102db0f3c5f345df1b7f9fcdf1
})
export class CoreModule {
  public static forRoot(config: CoreConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: CoreConfig, useValue: config }]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Prevent reimport of the CoreModule.
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule ONLY');
    }
  }
}
