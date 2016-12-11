import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DummyComponent } from '../../module/dummy/components/dummy';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  openModuleDummy() {
  	this.navCtrl.push(DummyComponent);
  }

}
