import { Injectable } from '@angular/core';
import { IngredientsModel } from 'src/shared/ingredients.model';
//import { ReceipeModel } from '../receipes/receipes.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  subject = new Subject();
  set = new Set();
  //Mock data
  private ingredientsList: IngredientsModel[] = [
    new IngredientsModel('Apple', 5),
    new IngredientsModel('Banana', 10)
  ]
  constructor() { }

  getIngredientList(){
    return [...this.ingredientsList];
  }

  getIngredientItem(){
    return this.subject.asObservable();
  }

  setIngredientItem(slctdIngre: IngredientsModel){
    this.ingredientsList.push(slctdIngre);
    this.subject.next(slctdIngre);
  }

  addIngredients(addIngredients: IngredientsModel[]){
    addIngredients.map(item=>this.setIngredientItem(item));
  }
}
