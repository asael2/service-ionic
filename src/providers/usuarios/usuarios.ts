import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
}
