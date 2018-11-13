import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Platform } from 'ionic-angular';
import { UsuariosProvider } from "../../providers/usuarios/usuarios";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
plataform= this.platform;

  constructor(public platform:Platform, public navCtrl: NavController, private usuarios: UsuariosProvider) {

    console.log("->Page home Constructor");

    // if (this.plataform.is('cordova')) {

    // } else {
  
    // }

  }


    



  iniciasSesion(email, password){
    console.log("iniciasSesion");
    this.usuarios.loguearse(email, password).subscribe(val => console.log(val));
    
  }




}
