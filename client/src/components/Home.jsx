import { useEffect, useState } from "react";
import axios  from 'axios';
import {Link} from 'react-router-dom'

const Home = props => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h2>All Products</h2>
            <div className="d-flex justify-content-around flex-wrap">
            
                {
                    products ? products.map((item, i) => <Link to={`/oneProduct/${item._id}`} key={i} ><div className="card p-2" >
                            <h3>{item.name}</h3>
                            <h3>{item.description}</h3>
                            <h4>{item.price}</h4>
                    </div></Link>
                    ) : ""
                }
            </div>
        </div>
    )
}

export default Home;