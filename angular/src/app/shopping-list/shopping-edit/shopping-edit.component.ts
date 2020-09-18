import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { IngredientsModel } from 'src/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  editMode: boolean = false;
  editIndex:number;
  editedItem:any;
  @ViewChild('f') ingForm: NgForm;
  //@Output() addIngredients=new EventEmitter<IngredientsModel>();
  @Input() slctdItem: number;
  constructor(private _ingredServ: ShoppingService) { }

  ngOnInit(): void {
    //console.log(this._ingredServ.getIngredient(this.slctdItem));
    this._ingredServ.editIngredient
        .subscribe(
          (item:any)=>{
            //console.log(item.index, item.item);
            this.editIndex = item.index;
            this.editMode = true;
            this.editedItem = item;
            this.ingForm.setValue({
              ingName: item.item.name,
              ingAmount: item.item.amount
            })
          }
        )
  }


  onShoppingAdd(formData : NgForm){
    //console.log(formData);
    //this.addIngredients.emit(new IngredientsModel(name, this.amountInfo.nativeElement.value));
    const ingData: IngredientsModel = new IngredientsModel(formData.value.ingName, formData.value.ingAmount);
    if(this.editMode){
      this._ingredServ.updateIngItem(this.editIndex, ingData);
    }else{
      this._ingredServ.setIngredientItem(ingData)
    }
  }
}
