import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient) {
    let todos: any = this.getUsuarios();
    console.log(todos);
    //return todos;
  }

  getUsuarios(){
    return this.http.get('https://miapirails.herokuapp.com/users');
  }
  
}
