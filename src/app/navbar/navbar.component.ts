import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  response: any;
  res: any;

  getUsd(base:string) {
    this.http.get(`https://cdn.moneyconvert.net/api/latest.json${base}`)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response)
    })
  }

  getEur (base:string) {
    this.http.get(`https://api.exchangerate.host/latest`)
    .subscribe((res)=>{
      this.res = res;
      console.log(this.res)
    })
  }


  ngOnInit(): void {
    this.getUsd('');
    this.getEur('')
  }

}
