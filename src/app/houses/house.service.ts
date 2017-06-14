import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { House } from './house.model';
import 'rxjs/add/operator/toPromise';
import { HouseDataService } from './houseData-service'
@Injectable()
export class HouseService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private houseUrl = 'https://realestate-rentals.herokuapp.com/house'

    constructor(private http: Http, private houseDataService: HouseDataService){}

    getHouses(): Promise<House[]> {
        return this.http.get(this.houseUrl)
            .toPromise()
            .then(response => response.json() as House [])
            .catch(this.handleError)
    }

    getHouse(id:number): Promise<House> {
        const url = `${this.houseUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as House)
        .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error)
        return Promise.reject(error.message || error)
    }



        houses: House[]= []

        getSingleHouse(houseId):House{
            for(var i = 0; i < this.houses.length; i++){
                if(this.houses[i].id == houseId.id) {
                    return this.houses[i]
                }
            }
            console.log(houseId)
            return this.houses[houseId]
        }
}
