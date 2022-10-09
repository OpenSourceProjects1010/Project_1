import { useState, useEffect } from "react";
const useFetch = (url) =>{
    const [dishes, setdishes] = useState(null);
    const [isPending, setisPending] = useState(true);
    useEffect(() => {
            fetch(url)
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                    else{
                        throw Error('Could not fetch the data for that resource');
                    }
                })
                .then(data => {
                    setdishes(data);
                    setisPending(false);}).catch(err => {
                        console.log(err);
                    })
        }, [url]);
    return {dishes, isPending};
}

export default useFetch