import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [ispending, setPending] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData(url,abortCont) {
        try{
          const response = await fetch( url, { signal: abortCont.signal} );
            if(!response.ok){
              throw Error('could not fetch data from that resource');
            }else{
              const data = await response.json();
              setData(data);
              setPending(false);
              setError(null);
            }
        }catch(err){
          if(err.name === "AbortError"){
            console.log('fetch aborted');
          }else{
            console.error(err);
            setPending(false);
            setError(err.message);
          }

        }
      }

    useEffect(() => {
        const abortCont = new AbortController();

        fetchData(url,abortCont); 

        return () => abortCont.abort();  
    }, [url]);

    return {data, ispending, error};
}
 
 
export default useFetch;