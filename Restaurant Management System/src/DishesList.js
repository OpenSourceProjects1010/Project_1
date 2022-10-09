import { Link } from 'react-router-dom'
const DishesList = ({ dishes }) => {
    return (
        <div className="dishes-list">
            {dishes.map((dish) => (
                <div className="dish-preview" key={dish.name}>
                    <Link to={`/dish/${dish.id}`} className="ref">
                        <img src={dish.source} alt={"A mouth watering picture of " + dish.name} />
                        <div>
                            <h2>{dish.name}</h2>
                            <p>{"$ "+dish.price}</p>
                        </div>
                    </Link>

                </div>
            ))}
        </div>

    );
}

export default DishesList;