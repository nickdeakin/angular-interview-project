import {Component, Input, OnInit} from '@angular/core';
import {CatBreedDefinition} from '../../interfaces/cat-breeds';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input() catBreed: CatBreedDefinition;
  constructor() { }

  ngOnInit() {
  }

}
