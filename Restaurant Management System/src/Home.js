import useFetch from "./usefetch";
import DishesList from "./DishesList";
const Home = () => {
    const {dishes , isPending} = useFetch("http://localhost:8000/dishes");
    return (
        <div className="home">
            {
                isPending && <div>Loading....</div>
            }
            {
                dishes && <DishesList dishes={dishes}></DishesList>
            }
        </div>
    );
    
}

export default Home;