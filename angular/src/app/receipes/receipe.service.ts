import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs'; 

import { ReceipeModel } from './receipes.model';
import { IngredientsModel } from 'src/shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
  subject= new Subject();
  receipeChanged= new Subject();
  //Mock Data
  private receipeslist: ReceipeModel[] = [
    new ReceipeModel('The taste Receipe', 'I love to taste this', '../../../assets/images/receipe1.jpg',[
      new IngredientsModel('French Fries', 10),
      new IngredientsModel('Sauce', 8)
    ]),
    new ReceipeModel('The Burger Receipe', 'I love to taste this Burger', '../../../assets/images/receipe1.jpg', [
      new IngredientsModel('Coca-cola', 10),
      new IngredientsModel('Ice cream', 10)
    ])
  ];
  constructor(private shoppingServ: ShoppingService) { }

  //get Receipe list
  getReceipe = () =>{
    this.receipeChanged.next([...this.receipeslist]);
    
    console.log(this.receipeslist);
    return [...this.receipeslist];
    
  }

  getReceipeByID = (id)=>{
    return this.receipeslist[id];
  }
  // Cross-Component communication
  //selectedReceipeItem = new EventEmitter<ReceipeModel>(); /* ..... process 1 */

  // Cross-Component communication using Subject
  sendSelectedReceipe(selectedReceipeItem : ReceipeModel){
    //console.log(this.subject);
    //console.log(selectedReceipeItem);
    this.subject.next(selectedReceipeItem);
    //this.subject.subscribe(data=> console.log('Hi'+ data));
  }

  getSelectedReceipe(){
    //console.log(this.subject.asObservable);
    return this.subject.asObservable();
  }

  addIngredientsToShoppingService(receipeData){
    let  ingredientItem = receipeData.ingredients;
    //console.log(ingredientItem);
    
    this.shoppingServ.addIngredients(ingredientItem);
  }

  updateReceipe= (index, updatedReceipe) =>{
    this.receipeslist[index]= updatedReceipe;
    this.receipeChanged.next([...this.receipeslist]);
  }

  addReceipe = (newReceipe) =>{
    this.receipeslist.push(newReceipe);
    this.receipeChanged.next([...this.receipeslist]);
  }

}
