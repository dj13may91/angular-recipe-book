import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  /**
   * why and how is feature passed here ?
   * Ans: in header component <app-header (featureSelected)="onNavigate($event)">
   *     we are passing $event which captures all events that occur. now when we click on tabs, say recipe,
   *     we pass 'recipe' string as event to onNavigate function and there by setting :
   *     <app-recipes *ngIf="loadedFeature === 'recipe'"></app-recipes>
   *     same goes for shopping-list

   onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
   */
}
