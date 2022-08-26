import { useState, useEffect } from "react"
import { getCategories } from "../apis";
import { Link } from 'react-router-dom';

export default function NavBar ({categories, setCategories}) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCategories().then(({data}) => {
            setCategories(data.categories);
            setIsLoading(false);
        });
    }, [setCategories]);

    if (isLoading) return <p className="loading-errors">Loading Categories...</p>

    return (
        <section className="nav">  
            <ul>
                {categories.map((category) => {
                    return <li key={category.slug}><Link to={`/reviews/${category.slug}`}>{category.slug}</Link></li>
                })}
            </ul>
        </section>
    )
}