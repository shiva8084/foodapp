export default function Item({item}){
    return <div>
        <div key={index}>
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
              <h3>{item.name}</h3>
            </div>
    </div>
}