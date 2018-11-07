import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosProvider {

  
  constructor(public http: HttpClient) {
    //this.getUsuarios();

    this.loguearse().subscribe(val => console.log(val));

  }

  getUsuarios(){
    return this.http.get('https://miapirails.herokuapp.com/users');
  }


  loguearse() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let bodies = { "auth": { "email": "salma@stars.com", "password": "qwertyuiop" } }
    let options = { headers: headers };
    
    
    return this.http.post('https://miapirails.herokuapp.com/user_token', bodies, options);

  }
  
}
