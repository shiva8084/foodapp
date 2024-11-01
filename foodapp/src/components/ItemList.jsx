import Item from "./Item";

export default function ItemList({food}){
    return <div>
        {food.extendedIngredients && food.extendedIngredients.length > 0 ? (
          food.extendedIngredients.map((item, index) => (
            <Item item={item} />
          ))
        ) : (
          <p>No ingredients available.</p>
        )}
    </div>
}