import { useParams } from "react-router-dom";

export default function Categories () {

    const {category} = useParams();
    console.log(category)
    return (
        <h2>Refined Categories Here</h2>
    );
};
