import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

  usuarios:any;
  cargador = this.loader.create({
    content: "Cargando...",
    //duration: 3000
  });
  
  constructor(public navCtrl: NavController, public UsuariosProvider: UsuariosProvider, public loader: LoadingController ) {
    this.cargador.present();
  }

  ionViewDidLoad(){

    this.UsuariosProvider.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
        this.cargador.dismiss();
      },
      (error) =>{
        console.error(error);
      }
    )

  }

}
