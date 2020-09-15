import { Component, OnInit } from '@angular/core';

import { IngredientsModel } from '../../shared/ingredients.model'
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: IngredientsModel[];

  constructor(private _ingredServ: ShoppingService) { }

  ngOnInit(): void {
    this.ingredientsList = this._ingredServ.getIngredientList();
    this._ingredServ.getIngredientItem()
        .subscribe(item =>{
          if(item instanceof IngredientsModel)
            this.ingredientsList.push(item);
        })
  }

  /* onAddedIngredient(data){
    this.ingredientsList.push(data);
  } */

}
