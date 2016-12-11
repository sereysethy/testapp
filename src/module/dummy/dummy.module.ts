import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DummyComponent } from './components/dummy';
import { DummyDetailComponent } from './components/dummy-detail';

@NgModule({
  declarations: [DummyComponent, DummyDetailComponent],
  imports: [
    IonicModule.forRoot(DummyComponent),
  ],
  entryComponents: [
    DummyComponent,
    DummyDetailComponent
  ],
  providers: [
  ],
  exports: [DummyComponent]
})

export class DummyModule { }