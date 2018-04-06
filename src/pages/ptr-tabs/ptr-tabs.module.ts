import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PtrTabsPage } from './ptr-tabs';

@NgModule({
  declarations: [
    PtrTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PtrTabsPage),
  ]
})
export class PtrTabsPageModule {}
