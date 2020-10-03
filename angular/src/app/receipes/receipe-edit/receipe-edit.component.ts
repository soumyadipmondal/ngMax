import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReceipeService } from '../receipe.service';
import { ReceipeModel } from '../receipes.model';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.scss']
})
export class ReceipeEditComponent implements OnInit {
  receipeId: number ;
  isEditing:boolean= false;

  receipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private receipeService: ReceipeService, private _router: Router) { }

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
    let receipeIngredients= new FormArray([]);

    if(this.isEditing){
      const fetchedReceipe = this.receipeService.getReceipeByID(this.receipeId)
      receipeName = fetchedReceipe.name
      description = fetchedReceipe.desc
      imgPath = fetchedReceipe.urlPath
      if(fetchedReceipe.ingredients){
        for(let ingredient of fetchedReceipe.ingredients){
          receipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount' : new FormControl(ingredient.amount, Validators.required)
            })
          )
        }
      }
    }

    this.receipeForm = new FormGroup({
      'name': new FormControl(receipeName, Validators.required),
      'desc': new FormControl(description, Validators.required),
      'urlPath': new FormControl(imgPath, Validators.required),
      'ingredients' : receipeIngredients
    });

    //console.log((<FormArray>this.receipeForm.get('ingredients')).controls);

  }

  //Get controls method
  get controls() { // a getter!
    return (<FormArray>this.receipeForm.get('ingredients')).controls;
  }

  onAddingIngredients= ()=>{
    (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount' : new FormControl(null, Validators.required)
      })
    )
  }

  onSubmitReceipe= ()=>{
    let added_updated_receipe: ReceipeModel= new ReceipeModel(
      this.receipeForm.value['name'],
      this.receipeForm.value['desc'],
      this.receipeForm.value['urlPath'],
      this.receipeForm.value['ingredients']
    )
    //console.log(added_updated_receipe)
    if(this.isEditing){
      this.receipeService.updateReceipe(this.receipeId, added_updated_receipe);
    }else{
      this.receipeService.addReceipe(added_updated_receipe);
    }

    this.onChanges();
  }

  onChanges = ()=>{
    if(!this.isEditing){
      this._router.navigate(['../../'], {relativeTo: this.activatedRoute});
    }else{
      this._router.navigate(['../../', this.receipeId], {relativeTo: this.activatedRoute})
    }
  }

  onRemoveIngredients = (index: number)=>{
    console.log(index);
    (<FormArray>this.receipeForm.get('ingredients')).removeAt(index);
    
  }

}
