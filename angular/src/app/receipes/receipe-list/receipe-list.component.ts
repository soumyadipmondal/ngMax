import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ReceipeModel } from '../receipes.model'
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {
  /* @Output() emitReceipe = new EventEmitter<ReceipeModel>(); */
  receipeslist: ReceipeModel[];
  constructor(private _receipeServ: ReceipeService) { }

  ngOnInit(): void {
    this.receipeslist = this._receipeServ.getReceipe();
    //console.log(this.receipeslist);
  }

  /* onDetailReceipt(receiptData){
    this.emitReceipe.emit(receiptData);
  } */

}
