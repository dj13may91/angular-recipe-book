import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpResponse<string>) => console.log(response),
        (error: HttpErrorResponse) => console.log('error', error)
      );
  }

  onGetData() {
    this.dataStorageService.onGetData()
      .subscribe(
        (response: HttpResponse<string>) => console.log(response),
        (error: HttpErrorResponse) => console.log(error)
      );
  }
}
