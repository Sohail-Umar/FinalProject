import React from "react"
import Modal from 'react-modal';
import { useCreateProductDispatchContext, useCreateProductStateContext } from "../Context/productContext"



function AdminDashboard() {
    const setProductData = useCreateProductDispatchContext();
    const [modalIsOpenAddProduct, setIsOpenAddProduct] = React.useState(false);
    const [addproduct, setAddproduct] = React.useState({
        productname: '',
        description: '',
        category: 0,
        price: '',
        image: '',
    });

    const [image, setImage] = React.useState({});
    const handleImageChange = event => {
        setImage(event.target.files[0]);
    };

    function openModalAddProduct() {
        setIsOpenAddProduct(true);
    }

    function closeModalAddProduct() {
        setIsOpenAddProduct(false);
    }

    const handleAddProduct = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('productname', addproduct.productName);
        formData.append('category', addproduct.productCategory);
        formData.append('description', addproduct.productDescription);
        formData.append('price', addproduct.productPrice);
        formData.append('image', addproduct.productImage);

        const url = 'http://localhost:3001/products/addproduct';

        const responce = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        const json = await responce.json();
        console.log(json);

        alert("Product Added")
    }



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
            <div>
                <button onClick={() => { openModalAddProduct() }}>Add Product</button>
                <button onClick={() => { getProduct() }}>View All Products</button>
                {/* <button onClick={() => { }}>View All Users</button> */}
            </div>
            <div>
                <Modal
                    style={{ height: "600", width: "40%", backgroundColor: "#000" }}
                    isOpen={modalIsOpenAddProduct}

                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModalAddProduct}
                    // style={ }
                    contentLabel="Example Modal"
                >
                    <h2>Add New Product Data</h2>
                    <div className="add-new-product">
                        <form>
                            <input type="text" name="productName" value={addproduct.productName} placeholder="Enter Product Name" />
                            <br />
                            <input type="text" name="productCategory" value={addproduct.productCategory} placeholder="Enter Product Category" />
                            <br />
                            <input type="text" name="productDescription" value={addproduct.productDescription} placeholder="Enter Description" />
                            <br />
                            <input type="number" name="productPrice" value={addproduct.productPrice} placeholder="Enter Price" />
                            <br />
                            <input type="file" name="productImage" value={addproduct.productImage} accept="image/*" placeholder="Enter Price" />

                        </form>
                    </div>
                    <button onClick={handleAddProduct}>Add New</button>
                    <br />
                    <button onClick={closeModalAddProduct}>Close</button>
                </Modal>
            </div>

            <div className="container">
                {products.productData.map((value) => {
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
                            </div>
                        </div>
                    )
                })}
            </div>


        </>
    )
}

export default AdminDashboard