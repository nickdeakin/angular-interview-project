import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatBreedDefinition} from './interfaces/cat-breeds';
import {AppService} from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-interview-project';

  catBreeds: CatBreedDefinition[];

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.appService.getBreeds().subscribe(items => this.catBreeds = items);
  }

}
