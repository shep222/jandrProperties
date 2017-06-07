import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from "../house.model";
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
    @Input() house: House;
    @Output() houseSelected = new EventEmitter<void>();
    lat: number = 30.6954;
    lng: number = -88.0399;

  constructor() { }

  ngOnInit() {
  }

}
