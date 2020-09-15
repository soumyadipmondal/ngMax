import { Component, OnInit, Input } from '@angular/core';
import { ReceipeModel } from '../receipes.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() receipeDetail: ReceipeModel
  constructor(private _receipeToAdd: ReceipeService) { }

  ngOnInit(): void {
    //console.log(this.receipeDetail);
    
  }

  onAddingIngredient(){
    this._receipeToAdd.addIngredientsToShoppingService(this.receipeDetail);
  }

}
