import { Component, OnInit } from '@angular/core';
import { House } from './house.model'
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
    
        lat: number = 30.6954;
        lng: number = -88.0399;
  constructor() { }

  ngOnInit() {
  }

}
