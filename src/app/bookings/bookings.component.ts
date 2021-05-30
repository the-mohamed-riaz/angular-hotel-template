import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content:any= [
    {'img':"../../../assets/jpg/hotel(1).jpg", 'title':'Paradise Malidives', 'text': 'Et aliquip sunt consequat enim. Sunt magna sunt quis culpa proident magna tempor veniam. ' }, 
    {'img':"../../../assets/jpg/hotel(2).jpg", 'title':'Hotel Turkey', 'text': 'Sint deserunt proident nisi excepteur ut ullamco. Minim sint aliqua eiusmod commodo adipisicing esse Lorem consectetur ea veniam ea veniam enim.' }, 
    {'img':"../../../assets/jpg/hotel(3).jpg", 'title':'Andaman Island', 'text': 'Voluptate adipisicing excepteur consequat laborum est ut consectetur pariatur minim anim ea. ' }, 
    {'img':"../../../assets/jpg/hotel(4).jpg", 'title':'Hotel Taj', 'text': 'Nulla eiusmod amet cupidatat exercitation adipisicing eu magna incididunt officia nostrud sunt.' }, 
  ]
}
