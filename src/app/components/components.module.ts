import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TitleComponent } from './title/title.component';
@NgModule({
    imports: [
      CommonModule,
      IonicModule,
    ],
    declarations: [
        TitleComponent
    ],
    exports:[
        TitleComponent
    ]
  })
  export class ComponentsModule {}