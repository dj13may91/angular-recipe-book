import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    const header1 = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });
    const httpOptions = {
      headers: header1
    };
    return this.http.post(this.url + 'store', this.recipeService.getRecipes(), httpOptions);
  }

  onGetData() {
    return this.http.get(this.url + 'retrieve');
  }
}


// proxy() {
//   const cors_api_host = 'cors-anywhere.herokuapp.com';
//   const cors_api_url = 'https://' + cors_api_host + '/';
//   const slice = [].slice;
//   const origin = window.location.protocol + '//' + window.location.host;
//   const open = XMLHttpRequest.prototype.open;
//   XMLHttpRequest.prototype.open = function () {
//     const args = slice.call(arguments);
//     const targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//     if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//       targetOrigin[1] !== cors_api_host) {
//       args[1] = cors_api_url + args[1];
//     }
//     return open.apply(this, args);
//   };
// }
