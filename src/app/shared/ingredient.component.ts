import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html'
})
export class IngredientComponent implements OnInit {
  @Input() currentTime: Date = new Date();

  constructor() {
  }

  onTimeUpdate(time: Date) {
    this.currentTime = time;
  }

  ngOnInit(): void {
  }

}
