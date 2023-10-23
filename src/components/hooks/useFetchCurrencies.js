import {useState} from "react";

export const useFetchCurrencies = (callback) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchCurrencies = async (...args) => {
        try {
            setLoading(true);
            await callback(...args);
        } catch (error) {
            console.error('Error fetching currencies:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return [fetchCurrencies, loading, error];
}