import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  readonly ROOT_URL;
  // headers: HttpHeaders = new HttpHeaders ({
  //   "Content-Type": "application/json",
  //   "x-access-token": localStorage.getItem('x-access-token')
  // });
  
  constructor(private http: HttpClient) {
    
    this.ROOT_URL = "http://localhost:3000";
   }

   get(uri: string){
     
     return this.http.get(`${this.ROOT_URL}/${uri}`) ;
   }

   post(uri: string, payload: object){
     return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
   }

   patch(uri: string, payload: object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

  signup(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

}
