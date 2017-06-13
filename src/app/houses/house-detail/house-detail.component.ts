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
    zoom: number = 13;
    lat: number = 30.669542;
    lng: number = -88.26421;
    markers: marker[] = [
        {
            name:'9411 Smokewood Dr',
            lng: -88.26421 ,
            lat: 30.669542
        }
    ]


  constructor(private route: ActivatedRoute, private houseService: HouseService) {

  }

  ngOnInit() {
      this.id = {
          id: this.route.snapshot.params['id']
      }
      this.house = this.houseService.getSingleHouse(this.id)

  }


}
interface marker {
    name?: string;
    lat: number;
    lng: number;
}
