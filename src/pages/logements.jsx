import { useParams } from "react-router-dom";

const Logements = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <>
     Logements {id}
        </>
    )
}

export default Logements;