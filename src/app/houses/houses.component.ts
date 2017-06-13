import { Component, OnInit } from '@angular/core';
import { House } from './house.model';
import { HouseService } from './house.service';
import { HouseDataService } from './houseData-service';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  providers: [HouseService]
})
export class HousesComponent implements OnInit {
        zoom: number = 11;
        lat: number = 30.67863;
        lng: number = -88.23753;
        markers: marker[] = [
            {
                name:'9411 Smokewood Dr',
                lng: -88.26421 ,
                lat: 30.669542
            },
            {
                name:'824 Lisa Ct',
                lng: -88.197685 ,
                lat: 30.673409
            },{
                name:'9609 Royalwoods Dr E',
                lng: -88.26953 ,
                lat: 30.671837
            },{
                name:'710 Wilshire Ln',
                lng: -88.1537 ,
                lat: 30.65286
            },{
                name:'9660 Royalwoods Dr N',
                lng: -88.269165 ,
                lat: 30.675169
            },{
                name:'8571 Ashley Dr',
                lng: -88.1316 ,
                lat: 30.7647
            },{
                name:'959 Kenny St',
                lng: -88.11762 ,
                lat: 30.659143
            }
        ]
  constructor(private houseDataService: HouseDataService) { }


  ngOnInit() {
    //   this.houseDataService.getAllHouses();
  }

}


//Marker Type
interface marker {
    name?: string;
    lat: number;
    lng: number;
}
