import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VeterinariaPage } from './veterinaria';

@NgModule({
  declarations: [
    VeterinariaPage,
  ],
  imports: [
    IonicPageModule.forChild(VeterinariaPage),
  ],
})
export class VeterinariaPageModule {}
