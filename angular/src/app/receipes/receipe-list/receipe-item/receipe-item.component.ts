import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReceipeModel } from '../../receipes.model';
import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipeEl:ReceipeModel;
  @Input() receipeIndex: number;
  //@Output() sendSelReceipe = new EventEmitter<ReceipeModel>();
  constructor(private _receipeServ: ReceipeService) { }

  ngOnInit(): void {
    //console.log(this.receipeIndex);
  }

  /* onSelcetReceipe(selctedReceipe : ReceipeModel){
    //this._receipeServ.selectedReceipeItem.emit(selctedReceipe)
    this._receipeServ.sendSelectedReceipe(selctedReceipe);
  } */

}
