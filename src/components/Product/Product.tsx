import { useParams } from "react-router-dom";

export function Product(){

    let {id} = useParams();

    return (<div>Product works - ID: {id}</div>);
}