import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ ChatComponent ],
    declarations: [ChatComponent],
})
export class ChatModule { }
