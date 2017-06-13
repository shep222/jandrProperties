import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { House } from './house.model';

@Injectable()
export class HouseDataService {
    constructor(private http: Http){}

getAllHouses(){
    return this.http.get('https://realestate-rentals.herokuapp.com/house')
}


}
