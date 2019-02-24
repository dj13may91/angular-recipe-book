import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  /**`
   * <app-recipe-item *ngFor="let currentRecipe of recipies"
   [recipe]="currentRecipe"></app-recipe-item>
   * by this in recipe-list.component.html we are passing recipe to below variable using @Input() tag
   */
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }
}
