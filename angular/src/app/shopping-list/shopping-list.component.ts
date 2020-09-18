import { Component, OnInit } from '@angular/core';

import { IngredientsModel } from '../../shared/ingredients.model'
import { ShoppingService } from './shopping.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: IngredientsModel[];
  selectedIngredient: number;

  constructor(private _ingredServ: ShoppingService) { }

  ngOnInit(): void {
    this.ingredientsList = this._ingredServ.getIngredientList();
    this._ingredServ.itemChanged
        .subscribe(
          (item:IngredientsModel[]) =>{
          this.ingredientsList=item;
        })
        //console.log(this.ingredientsList);
  }

  onSelectItem(index: number, item : IngredientsModel){
    //console.log(index);
    //this._ingredServ.getIngredient(i);
    const itemToBeUpdated = {
      index, item
    }
    this._ingredServ.editIngredient.next(itemToBeUpdated);
  }

  /* onAddedIngredient(data){
    this.ingredientsList.push(data);
  } */

}
