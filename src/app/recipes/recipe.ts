import {Ingredient} from "../ingredient";
export class Recipe {

  constructor(public name,public description,public imagePath,public ingredient :Ingredient[] ){};
 //constructor(public name,public description,public imagePath){};

}
