import { Injectable } from '@angular/core';
import { IngredientsModel } from 'src/shared/ingredients.model';
//import { ReceipeModel } from '../receipes/receipes.model';
import { Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  editIngredient = new Subject();
  itemChanged = new Subject();
  set = new Set();
  //Mock data
  private ingredientsList: IngredientsModel[] = [
    new IngredientsModel('Apple', 5),
    new IngredientsModel('Banana', 10)
  ]
  constructor() { }

  getIngredientList(){
    console.log(this.ingredientsList)
    return [...this.ingredientsList];
  }

  /* getIngredient(index: number){
    return this.subject.next(this.ingredientsList[index]);
  } */

  /* getIngredientItem(){
    return this.itemChanged.asObservable();
  } */

  setIngredientItem(slctdIngre: IngredientsModel){
    this.ingredientsList.push(slctdIngre);
    this.itemChanged.next([...this.ingredientsList]);
  }

  addIngredients(addIngredients: IngredientsModel[]){
    addIngredients.map(item=>this.setIngredientItem(item));
  }

  updateIngItem(index:number, item: IngredientsModel){
    this.ingredientsList[index] = item;
    this.itemChanged.next([...this.ingredientsList]);
  }
}
