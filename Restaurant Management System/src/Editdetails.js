import {useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";
const EditDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name,settitle] = useState(location.state.dishes.name);
    const [price,setprice] = useState(location.state.dishes.price);
    const [details,setdetails] = useState(location.state.dishes.details);
    const [source,setsource] = useState(location.state.dishes.source);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const dish = {name,price,details,source};
        fetch('http://localhost:8000/dishes/'+ location.state.dishes.id,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dish)
        }).then(()=>{
            navigate('/');
        })
    }
    return (
        <div className="edit-add">
            <h2>Edit Dish details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Dish Name </label>
                    <input type="text" required value={name} onChange={(e)=>{
                        settitle(e.target.value);
                    }}/>
                    <label> Dish image source </label>
                    <input type="text" required value={source} onChange={(e)=>{
                        setsource(e.target.value);
                    }}/>
                    <label> Dish Price($) </label>
                    <input type="number" required value={price} onChange={(e)=>{
                    setprice(e.target.value)}}/>
                </div>
                <label> Details </label>
                <textarea rows="20" cols="60" value={details} onChange={(e)=>{
                    setdetails(e.target.value);
                }}></textarea>
                <button>
                    Edit Dish
                </button>
            </form>
        </div>
    );
}
 
export default EditDetails;