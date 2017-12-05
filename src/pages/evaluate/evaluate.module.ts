import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluatePage } from './evaluate';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    EvaluatePage,
  ],
  imports: [
    Ionic2RatingModule,
    IonicPageModule.forChild(EvaluatePage)
  ],
})
export class EvaluatePageModule {}
