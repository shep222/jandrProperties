import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from "../house.model";
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
    id:{id: number}
    house: House;
    lat: number = 30.6954;
    lng: number = -88.0399;


  constructor(private route: ActivatedRoute) {
    this.house = new House(1, '9411 Smokewood Dr', 'Mobile', 'AL', '36695', 3, 1, "My House", 'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg', 1800)
  }

  ngOnInit() {
      this.id = {
          id: this.route.snapshot.params['id']
      }
      console.log(this.id)

  }


}
