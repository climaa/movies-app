/**
 * Example of a custom hook that fetches data from an API
 * It is prefer use the library "react-query" for this purpose
 */
import { useState, useEffect } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const useFetch = (endpoint) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        const FetchData = async () => {
            try {
                setStatus("pending");
                const response = await fetch(`${apiUrl}${endpoint}`);
                const data = await response.json();
                setData(data);
                setStatus("successful");
            } catch (error) {
                setStatus("rejected");
            }
        };

        FetchData();
    }, [endpoint, apiUrl]);

    return {status, data};
}

export async function Post(endpoint, postData) {
    let data = null;
    try {
        const response = await fetch(`${apiUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        data = await response.json();
        return data
    } catch (error) {
        throw new Error(`Error sending post: ${error}`);
    }
};


export default useFetch;