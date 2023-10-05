import { useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query)=>{
    const [res, setRes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] =useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
          'X-RapidAPI-Key':  '775a73279dmsh6c93bb117d4b687p132eaejsn8ae6bea484d7',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        } 
      };    
      const fetchData= async () =>{
        setIsLoading(true);

        try {
            const response =await axios.request
            (options);

            setRes(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('oops there is an error')
        } finally {
            setIsLoading(false);
        }
      }

       useEffect(() =>{
          fetchData();
       }, []);

       // sometimes it doesnt always automatically fetch so use below

       const refetch = ()=> {
        setIsLoading(true);
        fetchData();
       }

       return {res, isLoading, error, refetch };
}
 export default useFetch;