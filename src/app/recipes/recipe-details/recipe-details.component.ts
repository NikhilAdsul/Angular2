import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectedRecipe: Recipe;

  private recipeIndex : number;
  private subsciption :Subscription;

  constructor(private shoppingListService : ShoppingListService,private router :Router,private activateRoute : ActivatedRoute,private recipeService : RecipeService) { }

  ngOnInit() {

    this.subsciption=this.activateRoute.params.subscribe(
      (param : any)=>{
        this.recipeIndex=param['id'];

        this.selectedRecipe=this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }
onEdit()
{


 this.router.navigate(['/recipes',this.recipeIndex,'edit']);
}

onDelete()
{
  this.recipeService.deleteRecipe(this.selectedRecipe);

   this.router.navigate(['/recipes']);
}

  addToShoppingList()
  {
    this.shoppingListService.addItems(this.selectedRecipe.ingredient);
  }
}
