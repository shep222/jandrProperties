import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from "../house.model";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common'
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
            lng: -88.26421 ,
            lat: 30.669542
        }
    ]


  constructor(private route: ActivatedRoute,
      private houseService: HouseService, private location: Location) {
  }

  ngOnInit(): void {
    //   this.route.params
    //   .switchMap((params: Params) => this.houseService.getHouse(+params['id']))

      this.id = {
          id: this.route.snapshot.params['id']
      }
      this.houseService.getHouse(this.id.id)
        .then(house => this.house = house[0])

  }


}
interface marker {
    name?: string;
    lat: number;
    lng: number;
}
