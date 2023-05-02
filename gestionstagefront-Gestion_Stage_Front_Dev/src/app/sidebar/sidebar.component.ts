import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  fullname : string="";

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("accesstoken")){
      this.fullname= JSON.parse(localStorage.getItem("accesstoken")as string).name;
      console.log(JSON.parse(localStorage.getItem("accesstoken")as string))
    }
  }
  relogin(){
    
    localStorage.removeItem("accesstoken")
    window.location.reload ();
  }

}
