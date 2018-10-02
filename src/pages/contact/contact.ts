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
  // loading :any;
  

  constructor(public navCtrl: NavController, public UsuariosProvider: UsuariosProvider, public loader: LoadingController ) {
    this.presentLoading()
  }

  presentLoading() {
    const loader = this.loader.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad(){

    this.UsuariosProvider.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
        console.log(this.usuarios);
        this.loader.config
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
