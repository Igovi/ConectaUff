import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
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
        LoginInputComponent,
        FooterComponent,
        CarouselComponent,
        CardComponent
    ],
    exports:[
        TitleComponent,
        LoginInputComponent,
        FooterComponent,
        CarouselComponent,
        CardComponent
    ]
  })
  export class ComponentsModule {}