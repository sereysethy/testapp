import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-dummy-detail',
  templateUrl: '../templates/dummy-detail.html'
})
export class DummyDetailComponent {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  tapMe() {
    console.log("I call TapMe");
  }

}
