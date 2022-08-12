import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = props => {
    const navigate = useNavigate();
    const [myForm, setMyForm] = useState({
        name: "",
        description: "",
        price: 0.00,
    });
    const [error, setError] = useState({});
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", myForm)
            .then(res => {
                if(res.data.error) {
                    setError(res.data.error.errors)
                } else {navigate(`/oneProduct/${res.data._id}`)}
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="container">
            <h2>Add Product</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" name="name" className="form-control" value={myForm.name} onChange={onChangeHandler} />
                    {error.name ? <span className="text-danger">{error.name.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="description">Product Description</label>
                    <input type="text" name="description" className="form-control" value={myForm.description} onChange={onChangeHandler} />
                    {error.description ? <span className="text-danger">{error.description.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="price">Product Price</label>
                    <input type="number" name="price" className="form-control" value={myForm.price} onChange={onChangeHandler} />
                    {error.price ? <span className="text-danger">{error.price.message}</span> : ""}
                </div>
                <div>
                    <input type="submit" value="Submit" className="btn btn-info" />
                </div>
            </form>
        </div>
    )
}

export default Form;