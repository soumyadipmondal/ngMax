import { IngredientsModel } from 'src/shared/ingredients.model';

export class ReceipeModel {
    /* 'name': string;
    'description': string;
    'urlPath' : string;
    'ingredients': IngredientsModel; */

    constructor(public name: string, public desc:string, public urlPath:string, public ingredients:IngredientsModel[]){
        /* this.name = name;
        this.description=desc;
        this.urlPath = imgPath;
        this.ingredients =  */
    }

}