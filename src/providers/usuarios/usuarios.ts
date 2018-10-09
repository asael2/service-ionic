import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient) {
   //this.getUsuarios();
  }

  getUsuarios(){
    return this.http.get('https://miapirails.herokuapp.com/users');
  }
  
}
