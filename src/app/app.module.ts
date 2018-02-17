import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { MessageBoxComponentComponent } from './message-box-component/message-box-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponentComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
