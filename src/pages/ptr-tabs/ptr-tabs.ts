import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PtrTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ptr-tabs',
  templateUrl: 'ptr-tabs.html'
})
export class PtrTabsPage {

  inicioRoot = 'InicioPage'
  fichaRoot = 'FichaPage'
  veterinariaRoot = 'VeterinariaPage'
  informacionRoot = 'InformacionPage'


  constructor(public navCtrl: NavController) {}

}
