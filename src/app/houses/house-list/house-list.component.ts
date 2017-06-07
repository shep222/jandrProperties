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
        new House(1, '2982 S Zenobia St', 'Denver', 'CO', '80236', 3, 1, "My House", 'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg', 1800),
        new House(2, '9999 S Zenobia St', 'Denver', 'CO', '80236', 4, 2, "Not My House", 'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg', 550),
        new House(3, '12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house3.jpg', 725),
        new House(4, '12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house4.jpg', 499),
        new House(5, '12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house5.jpg', 983),
        new House(6, '12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house6.png', 1025),
        new House(7, '12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house7.jpg', 1150),
        new House(8, '12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg', 690),
        new House(9, '12345 S Zenobia St', 'Denver', 'CO', '80236', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg', 800)

    ]

  constructor() { }

  ngOnInit() {
  }

  onHouseSelected(house: House){
      this.houseWasSelected.emit(house);
  }
}
