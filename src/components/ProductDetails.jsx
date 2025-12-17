import { useParams } from "react-router"

const ProductDetails=()=>{
    const{id}=useParams();
    return(
        <div>
            <p>Product id:{id}</p>
        </div>

    )
}

export default ProductDetails;