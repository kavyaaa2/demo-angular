import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  
  @Input() myData  :any= {};
  constructor() { }
  
  ngOnInit(): void {
  }

}
