import { FormsModule } from '@angular/forms';
import { LoginInputComponent } from './login-input/login-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TitleComponent } from './title/title.component';
@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      FormsModule
    ],
    declarations: [
        TitleComponent,
        LoginInputComponent
    ],
    exports:[
        TitleComponent,
        LoginInputComponent
    ]
  })
  export class ComponentsModule {}