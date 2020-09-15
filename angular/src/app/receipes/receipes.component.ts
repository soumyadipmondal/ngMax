import { Component, OnInit, Input } from '@angular/core';
import { ReceipeModel } from './receipes.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.scss']
})
export class ReceipesComponent implements OnInit {
  receipeDetail: ReceipeModel;
  constructor(private _receipeServ: ReceipeService) { }

  ngOnInit(): void {
    this._receipeServ.getSelectedReceipe()
        .subscribe(selectedItem =>{
          if(selectedItem instanceof ReceipeModel){
            this.receipeDetail = selectedItem;
          }
        });
      //console.log(this.receipeDetail);
  }


  /* onDetailReceipt(receipedata){
    console.log(receipedata);
    this.receipeDetail = receipedata;
  } */

}
