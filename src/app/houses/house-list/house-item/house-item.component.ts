import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { House } from "../../house.model";
@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
    @Input() house: House;
    @Output() houseSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
        this.houseSelected.emit();
    }
}
