import { useState, useEffect } from "react"
import { getCategories } from "../apis";
import { Link } from 'react-router-dom';

export default function NavBar () {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCategories().then(({data}) => {
            setCategories(data.categories);
            setIsLoading(false);
        });
    }, [setCategories]);

    if (isLoading) return <p>Loading Categories...</p>

    return (
        <>
            <h3>Categories:</h3>
            <ul>
                {categories.map((category) => {
                    return <li key={category.slug}><Link to={`/${category.slug}`}>{category.slug}</Link></li>
                })}
            </ul>
        </>
    )
}