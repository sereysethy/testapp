import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DummyDetailComponent } from './dummy-detail';

@Component({
  selector: 'page-dummy',
  templateUrl: '../templates/dummy.html'
})
export class DummyComponent {

  constructor(public navCtrl: NavController) {
    
  }

  openDummyDetail() {
  	this.navCtrl.push(DummyDetailComponent);
  }

}
