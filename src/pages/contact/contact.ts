import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  usuarios: any[] = [];

  constructor(public navCtrl: NavController, public UsuariosProvider: UsuariosProvider) {
  }

  ionViewDidLoad(){
    this.UsuariosProvider.getUsuarios()
    .subscribe(
      (data) => {
        this.usuarios = data;
        console.log(this.usuarios);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
