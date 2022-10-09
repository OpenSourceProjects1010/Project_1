import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./usefetch";

const DishDetails = () => {
    const { id } = useParams();
    const { dishes, isPending } = useFetch('http://localhost:8000/dishes/' + id);
    const navigate = useNavigate()
    const handleDelete = () => {
        fetch('http://localhost:8000/dishes/' + dishes.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
    const handleEdit = () => {
        navigate('/dish/editdetails',{state:{dishes: dishes}});
    }
    return (
        <div>
            {
                isPending && <div>Loading....</div>
            }
            {
                dishes && <div>
                    <div>
                        <button className="editbtn" onClick={handleEdit}>Edit</button>
                        <button className="deletebtn" onClick={handleDelete}>Delete</button>
                    </div>
                    <div className="dish-details">
                        <div>
                            <h1>
                                {dishes.name}
                            </h1>
                            <p>
                                {dishes.details}
                            </p>
                        </div>
                        <img src={dishes.source} alt={"A mouth watering picture of" + dishes.name} />

                        <div>

                        </div>
                    </div>
                </div>
            }
        </div>

    );
}

export default DishDetails;