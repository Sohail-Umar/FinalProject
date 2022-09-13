import React from "react";
import "../Style/home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useCreateProductDispatchContext, useCreateProductStateContext } from "../Context/productContext"


function Products() {

    const [selectedCategory, setSelectedCategory] = React.useState("Chairs")
    const setProductData = useCreateProductDispatchContext();

    React.useEffect(() => {
        getProduct();
    }, []
    )

    const getProduct = async () => {
        try {
            const response = fetch("http://localhost:3001/products/allproducts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Credentials': 'true'
                }
            });
            const data = await (await response).json();

            // console.log(data);

            setProductData.handleProductChange(data);
        } catch (error) {
            console.log(error);

        }
    }


    const products = useCreateProductStateContext();
    console.log(products.productData)


    return (
        <>
            <h2>Furniture that Everyone Loves</h2>

            <h3>Filter By:</h3>
            <span className="filter-class" onClick={() => {
                setSelectedCategory("Chairs")
            }}>Chair</span>
            <span className="filter-class" onClick={() => {
                setSelectedCategory("Sofas")
            }}>Sofas</span>
            <span className="filter-class" onClick={() => {
                setSelectedCategory("Tables")
            }}>Tables</span>

            <div className="container">
                {products.productData.filter((value) => value.category === selectedCategory).
                    map((value) => {
                        return (
                            <div className="container">
                                <div className="block-container">
                                    <img
                                        src={"http://localhost:3001/images/" + value.image}
                                        className="product-images"
                                    />
                                    <th className='data-props duration-color'>{value.productname}</th>
                                    <tr className='data-props duration-color'>{value.category}</tr>
                                    <tr className='data-props duration-color'>{value.description}</tr>
                                    <tr className='data-props duration-color'>{value.price}</tr>
                                    <button>Buy</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    );
}

export default Products;