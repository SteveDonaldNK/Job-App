import { useState, useEffect } from "react";
import axios from "axios";
import { APP_API_KEY } from '@env';

const rapidApiKey = APP_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '2ea39333fcmsh00543d0c1fecf0ep15b006jsn3a1bb35f0c9b',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await axios.request(options);
            setData(res.data);
            setIsLoading(false);
        } catch (error) {
            setError(true)
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;