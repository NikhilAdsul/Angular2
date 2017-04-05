import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";
import{ RecipeItemComponent} from './recipe-item.component'
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[];

  //@Output() recipeSelected=new EventEmitter<Recipe>();

  //recipe= new Recipe('Dummy','Dummy','http://thumbs1.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg');
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {

    this.recipes=this.recipeService.getRecipes();
  }
/*
  onSelected(recipe:Recipe)
  {
    this.recipeSelected.emit(recipe);
  }*/



}
