import { Component, OnInit } from '@angular/core';
import { House } from './house.model';
import { HouseService } from './house.service';
import { HouseDataService } from './houseData-service';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  providers: [HouseService]
})
export class HousesComponent implements OnInit {

        lat: number = 30.6954;
        lng: number = -88.0399;
  constructor(private houseDataService: HouseDataService) { }

  ngOnInit() {
      this.houseDataService.getAllHouses();
  }

}
