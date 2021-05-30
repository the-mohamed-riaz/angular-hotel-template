import { Component, OnInit, Input } from '@angular/core';
interface cont {
  img:any;
  title:string;
  text:string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() content: cont = null

  constructor() { }

  ngOnInit(): void {
  }

}
