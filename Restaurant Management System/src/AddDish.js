import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddDish = () => {
    const [name,settitle] = useState('');
    const [price,setprice] = useState('');
    const [details,setdetails] = useState('');
    const [source,setsource] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const dish = {name,price,details,source};
        fetch('http://localhost:8000/dishes',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dish)
        }).then(()=>{
            navigate('/');
        })
    }
    return (
        <div className="edit-add">
            <h2>Add a new Dish</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Dish Name </label>
                    <input type="text" required value={name} onChange={(e)=>{
                        settitle(e.target.value);
                    }}/>
                    <label> Dish image source </label>
                    <input type="text" required value={source} placeholder="Enter image link" onChange={(e)=>{
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
                    Add Dish
                </button>
            </form>
        </div>
    );
}

export default AddDish;