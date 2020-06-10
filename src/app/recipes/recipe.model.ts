import { Ingredient } from '../shared/ingredients.model';

export class Recipe {
    public name: string;
    public category: string;
    public chef: string;
    public description: string;
    public method: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, category: string, chef: string, description: string, method: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.category = category;
        this.chef = chef;
        this.method = method;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}