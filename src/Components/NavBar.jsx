import { useState, useEffect } from "react"
import { getCategories } from "../apis";
import { Link } from 'react-router-dom'

export default function NavBar () {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(({data}) => {
            setCategories(data.categories);
        });
    }, []);

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