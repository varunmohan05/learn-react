export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: new Set(["tomatoes", "cucumber", "onion", "olives", "feta"]),
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: new Set([
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ]),
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: new Set([
      "chickpeas",
      "olive oil",
      "garlic cloves",
      "lemon",
      "tahini",
    ]),
  },
];

function Recipe(props: { name: string; ingredients: string[] }) {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li id={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li id={recipe.id}>
            <Recipe
              name={recipe.name}
              ingredients={Array.from(recipe.ingredients)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
