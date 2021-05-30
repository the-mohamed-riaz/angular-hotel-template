import { Component, OnInit } from '@angular/core';
// import Rlogo from '../../assets/svg/R-logo.svg';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  scrollTo(name:string){
    console.log(name)
    document.getElementById(name).scrollIntoView({behavior:'smooth', block:'end', inline:"nearest"});
  }

}
