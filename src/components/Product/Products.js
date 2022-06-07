import { DUMMY_PRODUCTS } from "../../Data/dummyData";
import Product from "./Product";
import './Product.css';

const Products = () => {

    return ( 
        <ul className="products-container">
            {DUMMY_PRODUCTS.map((product, index) => (
            <li key={index}>
                <Product
                id={product.id}
                name={product.name}
                imgURL={product.imgURL}
                price={product.price}
                />
            </li>
            ))}
        </ul>
     );
}
 
export default Products;