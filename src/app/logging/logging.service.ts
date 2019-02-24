import {Recipe} from '../recipes/recipe.model';

export class LoggingService {

  logToConsole(recipe: Recipe) {
    console.log(`user chose ${recipe.name}`);
  }
}
