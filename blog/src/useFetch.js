import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [ispending, setPending] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try{
          const response = await fetch( url );
          const data = await response.json();
          setData(data);
          setPending(false);
          setError(null);
        }catch(err){
          console.error(err);
          setPending(false);
          setError(err.message);
        }
      }

    useEffect(() => {
        fetchData();    
    }, [url]);

    return {data, ispending, error};
}
 
 
export default useFetch;