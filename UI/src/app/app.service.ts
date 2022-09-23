import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http:HttpClient) { 
   
  }

  getProducts(token:String){
    
    console.log('Bearer '+token);
    return this.http.get('http://localhost:8080/product',{headers:{'Authorization':'Bearer '+token}})
  }

  login(){
    return this.http
    .post('http://localhost:8080/login',
    {'uname':'ttt','pwd':'gsgsgsgd'},
    {responseType:'text'})
    
  }
}
