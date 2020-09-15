import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { IngredientsModel } from 'src/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInfo1', {static:true}) amountInfo: ElementRef;
  //@Output() addIngredients=new EventEmitter<IngredientsModel>();

  constructor(private _ingredServ: ShoppingService) { }

  ngOnInit(): void {
  }

  onShoppingAdd(name){
    //this.addIngredients.emit(new IngredientsModel(name, this.amountInfo.nativeElement.value));
    this._ingredServ.setIngredientItem(new IngredientsModel(name, this.amountInfo.nativeElement.value))
  } 

}
