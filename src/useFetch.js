import { useState} from "react";
import { useEffect } from "react"


const useFetch = (url) => {
    const [ispending, setIspending] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
         fetch(url)
        .then(response => {
          return response.json()
          
         })
        .then(data => {
          setData(data)
          return setData(data);
         })
         .catch( err => {
             console.log(err);
          })
          setIspending(false);
        }, 1000);
        }, []);

        return {data, ispending}
            
}
export default useFetch;