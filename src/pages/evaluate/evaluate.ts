import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-evaluate',
  templateUrl: 'evaluate.html',
})
export class EvaluatePage {
  rateDate:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public rateService() {
    console.log('rateDate', this.rateDate);
  }
}
