import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
empuje = this.push;
plataform= this.platform;
  constructor(public platform:Platform, private push: Push, public navCtrl: NavController) {

    console.log("->Page home ");
  

    if (this.plataform.is('cordova')) {
      this.algo(); 
    } else {
      // You're testing in browser, do nothing or mock the plugins' behaviour.
      //
      // var url: string = 'assets/mock-images/image.jpg';
    }

  }

  algo(){
    // to check if we have permission
    this.empuje.hasPermission().then((res: any) => {
      
      if (res.isEnabled) {
        alert('We have permission to send push notifications');
      } else {
        alert('We do not have permission to send push notifications');
      }
      
    });
    
  }



}
