import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ReceipeModel } from '../receipes.model'
import { ReceipeService } from '../receipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {
  @Output() onItemClickedOnList = new EventEmitter<boolean>();
  receipeslist: ReceipeModel[];
  constructor(private _receipeServ: ReceipeService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._receipeServ.receipeChanged.subscribe(
      (receipe: ReceipeModel[]) => {
        this.receipeslist = receipe
      }
    )
    this.receipeslist = this._receipeServ.getReceipe();
    //console.log(this.receipeslist);
  }

  /* onDetailReceipt(receiptData){
    this.emitReceipe.emit(receiptData);
  } */

  receipeModify = () =>{
    this.router.navigate(['receipedetails/new'], {relativeTo : this.activatedRoute});
  }

  onItemClick = (data: boolean)=>{
    this.onItemClickedOnList.emit(data)
  }
  


}
