import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { TabsPage } from "../tabs/tabs"
//import { UbicacionProvider } from '../../providers/ubicacion/ubicacion'
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  lat: any;
  lon: any;
  watch: any;
  
  constructor(private geolocation: Geolocation) {
    this.getUbicacion()
  }

  getUbicacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lon = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

}