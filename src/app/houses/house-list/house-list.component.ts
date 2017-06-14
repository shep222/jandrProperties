import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { House } from '../house.model';
import { Router } from '@angular/router'
import { HouseService } from '../house.service'
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
    // @Output() houseWasSelected = new EventEmitter<House>();
    houses: House[];

  constructor(private houseService: HouseService, private router: Router) {
    //   this.houses = houseService.getHouses();
  }

  getHouses(): void {
      this.houseService
      .getHouses()
      .then(houses => console.log(this.houses = houses)
      )
  }

  ngOnInit(): void {
      this.getHouses()
    //   console.log(this.houses)
    //   this.houses = this.houseService.getHouses();
  }

}
