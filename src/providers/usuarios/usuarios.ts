import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosProvider {

  
  constructor(public http: HttpClient) {
    //this.getUsuarios();

    

  }

  getUsuarios(){
    return this.http.get('https://miapirails.herokuapp.com/users');
  }


  loguearse(email, password) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let bodies = { "auth": { "email": email, "password" : password } }
    let options = { headers: headers };
    
    console.log("ahi");
    return this.http.post('https://miapirails.herokuapp.com/user_token', bodies, options);

  }
  
}
