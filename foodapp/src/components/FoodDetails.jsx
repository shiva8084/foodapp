import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ec72748501cf4cf9b15b48054d7ce23d";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌛{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🧑‍🤝‍🧑Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>

          <div>
            <span>
              <strong>💸{food.pricePerServing / 100}Per Serving </strong>
            </span>
          </div>
        </div>
        <h2>Ingredients</h2>
        
        <ItemList food={food} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {food.analyzedInstructions &&
            food.analyzedInstructions.length > 0 ? (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            ) : (
              <p>No instructions available.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
