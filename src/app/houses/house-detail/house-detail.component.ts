import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from "../house.model";
import { ActivatedRoute} from '@angular/router';
import { HouseService } from '../house.service'
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css'],
  providers: [HouseService]

})
export class HouseDetailComponent implements OnInit {
    id:{id: number}
    house: House;
    lat: number = 30.6954;
    lng: number = -88.0399;


  constructor(private route: ActivatedRoute, private houseService: HouseService) {

  }

  ngOnInit() {
      this.id = {
          id: this.route.snapshot.params['id']
      }
      this.house = this.houseService.getSingleHouse(this.id)

  }


}
