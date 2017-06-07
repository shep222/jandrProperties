import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { House } from '../house.model';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
    @Output() houseWasSelected = new EventEmitter<House>();

    houses: House[]= [
        new House('2982 S Zenobia St', 'Denver', 'CO', '80236', 3, 1, "My House", 'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg'),
        new House('9999 S Zenobia St', 'Denver', 'CO', '80236', 4, 2, "Not My House", 'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg'),
        new House('12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house3.jpg'),
        // new House('12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house4.jpg'),
        // new House('12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house5.jpg'),
        // new House('12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house6.png'),
        // new House('12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house7.jpg'),
        // new House('12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg'),
        // new House('12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg')

    ]

  constructor() { }

  ngOnInit() {
  }

  onHouseSelected(house: House){
      this.houseWasSelected.emit(house);
  }
}
