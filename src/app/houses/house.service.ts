import { Injectable } from '@angular/core'
import { House } from './house.model';
import { Http, Response } from '@angular/http'

import { HouseDataService } from './houseData-service'
@Injectable()
export class HouseService {
    constructor(private houseDataService: HouseDataService){
        this.houseDataService.getAllHouses()
        .subscribe(
            (response: Response)=> {
                const houses: House[] = response.json()
                // console.log(this.houses=houses)
                for (var j = 0; j< houses.length; j++){
                    // console.log(houses[j])
                    this.houses.push(houses[j])
                }

            }
        )
    }
        houses: House[]= [
            new House(1, '9411 Smokewood Dr', 'Mobile', 'AL', '36695', 3, 1,
             "This is a lovely home located on a corner lot in the Baker High School District. It has a fenced in back yard and a two car garage.  Washer and Dryer hookups.",
             'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg', 1800),
            new House(2, '824 Lisa Ct', 'Mobile', 'AL', '36695', 4, 2, "Not My House", 'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg', 550),
            new House(3, '9609 Royalwoods Dr E', 'Mobile', 'AL', '36608', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house3.jpg', 725),
            new House(4, '710 Wilshire Ln', 'Mobile', 'AL', '36609', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house4.jpg', 499),
            new House(5, '9660 Royalwoods Dr N.', 'Mobile', 'AL', '36608', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house5.jpg', 983),
            new House(6, '8571 Ashley Dr', 'Eight Mile', 'AL', '36571', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house6.png', 1025),
            new House(7, '959 Kenny St', 'Mobile', 'AL', '36606', 2, 1, "JoMommas House", 'https://s3-us-west-1.amazonaws.com/realestate222/house7.jpg', 1150),
        ]

        getHouses(){
            return this.houses.slice()
        }

        getSingleHouse(houseId):House{
            for(var i = 0; i < this.houses.length; i++){
                if(this.houses[i].id == houseId.id) {
                    return this.houses[i]
                }
            }
            // return this.houses[houseId]
            // console.log(houseId)
        }
}
