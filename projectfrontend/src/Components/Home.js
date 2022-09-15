import React from "react";
import "../Style/home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useCreateProductDispatchContext, useCreateProductStateContext } from "../Context/productContext"


function Home() {

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
            <div className="slider">
                <Carousel height={800} showThumbs={false} autoPlay={true} interval={4500} infiniteLoop={true}>
                    <div>
                        <img className="slider-img" src=".././background.jpg" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img className="slider-img" src=".././background.jpg" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img className="slider-img" src=".././background.jpg" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </div>

            {/* <img className="background-img" src=".././background.jpg" /> */}
            <h2 style={{ textAlign: "center" }}>Furniture that Everyone Loves</h2>
            <button>Buy Now</button>
            <button>Explore</button>

            <div className="container">
                {products.productData.slice(2, 8).map((value) => {
                    return (
                        <div className="container">
                            <div className="block-container">
                                <img
                                    src={"http://localhost:3001/images/" + value.image}
                                    className="product-images"
                                />
                                <p className='data-props duration-color'><span className="span-headings">Product name: </span>{value.productname}</p>
                                <p className='data-props duration-color'><span className="span-headings"> Category: </span>{value.category}</p>
                                <p className='data-props duration-color'><span className="span-headings">Description: </span>{value.description}</p>
                                <p className='data-props duration-color'><span className="span-headings">Price: </span>{value.price}</p>
                                <button>Buy</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Home;