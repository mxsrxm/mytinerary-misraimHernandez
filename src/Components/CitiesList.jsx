import React, { useEffect, useState } from "react";

const CitiesList = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/cities/all");
                if (!response.ok) {
                    throw new Error("Error cannot fetch cities");
                }
                const data = await response.json();
                setCities(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCities();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { cities })
                )}
            </div>
        </>
    );
};

export default CitiesList;
