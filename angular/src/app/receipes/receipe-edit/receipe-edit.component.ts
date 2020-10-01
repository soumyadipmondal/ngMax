import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.scss']
})
export class ReceipeEditComponent implements OnInit {
  receipeId: number ;
  isEditing:boolean= false;

  receipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private receipeService: ReceipeService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe((params : Params)=>{
          this.receipeId = params['id'];
          this.isEditing = params['id'] != null;
          //console.log(this.isEditing)
          this.initReceipeForm();
        })
  }

  private initReceipeForm = () =>{
    let receipeName: string = '';
    let description : string = '';
    let imgPath : string = '';

    if(this.isEditing){
      const fetchedReceipe = this.receipeService.getReceipeByID(this.receipeId)
      receipeName = fetchedReceipe.name
      description = fetchedReceipe.desc
      imgPath = fetchedReceipe.urlPath
    }

    this.receipeForm = new FormGroup({
      'name': new FormControl(receipeName),
      'desc': new FormControl(description),
      'imgPath': new FormControl(imgPath)
    })

  }

}
