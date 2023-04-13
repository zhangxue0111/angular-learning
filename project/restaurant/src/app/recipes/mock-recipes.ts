import { Recipe } from "./recipe.model";

export const RECIPES: Recipe[] = [
    {
        id: 1,
        name: "A Test Recipe",
        description: "this is a fantastic recipe",
        imageUrl: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg",
        ingredients: [
            { name: "Apple", amount: 10 },
            { name: "Chicken", amount: 2}
        ]
    },
    {
        id: 2,
        name: "A Different Recipe",
        description: "this is a fantastic recipe",
        imageUrl: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg",
        ingredients: [
            { name: "Orange", amount: 2 },
            { name: "Fish", amount: 2}
        ]
    }
]