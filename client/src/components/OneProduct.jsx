import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


const OneProduct = props => {
    const navigate = useNavigate();
    const {_id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + _id)
            .then(res => {
                console.log(res.data)
                setProduct(res.data[0])})
            .catch(err => console.log(err))
    }, [] )
    const deleteProduct = () => {
        axios.delete("http://localhost:8000/api/product/" + _id)
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h2>One Product</h2>
            {
                product ? <div className="card p-2">
                <h3>{product.name}</h3>
                <h3>{product.description}</h3>
                <h4>${product.price}</h4>
                <div>
                    <button className="btn btn-danger m-2" onClick={deleteProduct}>Delete</button>
                    <Link to={`/oneProduct/edit/${_id}`}><button className="btn btn-warning m-2">Edit</button></Link>
                </div>
            </div> : ""
            }
            
        </div>
    )
}

export default OneProduct