import { Component, OnInit } from '@angular/core';

import { IngredientsModel } from '../../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: IngredientsModel[] = [
    new IngredientsModel('Apple', 5),
    new IngredientsModel('Banana', 10)
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.ingredientsList)
  }

}
