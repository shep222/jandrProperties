import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { House } from '../house.model';
import { HouseService } from '../house.service'
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
    @Output() houseWasSelected = new EventEmitter<House>();
    houses: House[];

  constructor(private houseService: HouseService) { }

  ngOnInit() {
      this.houses = this.houseService.getHouses();
  }

}
