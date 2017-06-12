import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HouseService } from './house.service'
import { House } from './house.model';

@Injectable()
export class HouseDataService {
    constructor(private http: Http, private houseService: HouseService){}

getAllHouses(){
    return this.http.get('https://realestate-rentals.herokuapp.com/house')
        .subscribe(
            (response: Response)=> {
                const houses: House[] = response.json()
                this.houseService.setHouses(houses)
                console.log(response)
            }
        )
}


}
