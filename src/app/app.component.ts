import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatBreedDefinition} from './interfaces/cat-breeds';
import {AppService} from './services/app.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-interview-project';

  catBreeds$: Observable<CatBreedDefinition[]>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.catBreeds$ = this.appService.getBreeds().pipe();
  }

}
