import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

import { ReceipeModel } from '../receipes.model';
import { ReceipeService } from '../receipe.service';



@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit {
  /* @Input()  */receipeDetail: ReceipeModel;
  receipeCickedID : number;
  constructor(private _receipeToAdd: ReceipeService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.receipeDetail);
    this.activeRoute.params
    .subscribe((param : Params) =>{
      this.receipeCickedID = +param.id;
      this.receipeDetail = this._receipeToAdd.getReceipeByID(this.receipeCickedID);
    })
    
  }

  onAddingIngredient(){
    this._receipeToAdd.addIngredientsToShoppingService(this.receipeDetail);
  }

  editReceipe= ()=>{
    this.router.navigate(['../../receipedetails/'+this.receipeCickedID+'/edit'], {relativeTo: this.activeRoute})
  }

}
