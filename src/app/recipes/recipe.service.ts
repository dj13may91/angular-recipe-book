import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Pasta', 'Alfredo',
      'https://www.perfectitaliano.com.au/content/dam/perfectitaliano-aus/recipe/bolognese-pasta-bake_standard.jpg',
      [
        new Ingredient('White sauce', 10),
        new Ingredient('Red sauce', 3)
      ]),
    new Recipe('Pizza', 'Cheese',
      'https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/07/Boston-Pizza-table-and-chairs.png?w=1320&ssl=1',
      [
        new Ingredient('Olives', 10),
        new Ingredient('Meat', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    // return this.recipe; ----> this will return original array
    return this.recipes.slice(); // ----> this will return a copy of array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  deleteRecipte(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}



