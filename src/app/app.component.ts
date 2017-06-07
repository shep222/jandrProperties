import { Component, Input } from '@angular/core';
import { House } from './houses/house.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'houses';
  @Input() house: House;


  onNavigate(feature: string){
      this.loadedFeature = feature;
  }
}
