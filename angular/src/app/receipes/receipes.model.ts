export class ReceipeModel {
    'name': string;
    'description': string;
    'urlPath' : string

    constructor(name, desc, imgPath){
        this.name = name;
        this.description=desc;
        this.urlPath = imgPath;
    }

}