import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  FormG = new FormGroup({
    Fname: new FormControl(''),
    Lname: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    checkbox: new FormControl(''),
  });
}
