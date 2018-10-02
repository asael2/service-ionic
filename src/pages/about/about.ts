import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosProvider } from "../../providers/usuarios/usuarios";
import { TabsPage } from "../tabs/tabs"

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  



  nombreLu :any;


  constructor(public navCtrl: NavController, public usuarios: UsuariosProvider) {
    let x: any;
    let foo:any;
    x = 10;
    // foo = (x) => ({
    //   bar: 123 ,
    //   pola: "Heyy"
    // });
    console.log( this.usuarios.getUsuarios() );

  }

  navegaMas(unlugar) {
    this.navCtrl.push(TabsPage, );
  }


  volverBtn(){
    this.navCtrl.pop()
  }

  // homeBtn() {
  //   this.navCtrl.setRoot();
  // }



}
