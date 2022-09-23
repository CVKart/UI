import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  token:String='';
  products:any;
  constructor(private service:AppService){
      
  }
  ngOnInit(): void {
this.service.login().subscribe(res=>{
  this.token=res;
  this.service.getProducts(this.token).subscribe(res=>{
      this.products=res;
  })
});

   
  }
  title = 'UI';
}
