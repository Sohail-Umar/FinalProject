import React from "react"
import Modal from 'react-modal';


function AdminDashboard() {
    const [modalIsOpenAddProduct, setIsOpenAddProduct] = React.useState(false);


    function openModalAddProduct() {
        setIsOpenAddProduct(true);
    }

    function closeModalAddProduct() {
        setIsOpenAddProduct(false);
    }



    return (
        <>

            <div>
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
                                <input type="text" placeholder="Enter Product Name" />
                                <br />
                                <input type="text" placeholder="Enter Product Category" />
                                <br />
                                <input type="text" placeholder="Enter Description" />
                                <br />
                                <input type="number" placeholder="Enter Price" />
                                <br />
                                <input type="file" accept="image/*" placeholder="Enter Price" />

                            </form>
                        </div>
                        <button onClick={closeModalAddProduct}>Add New</button>
                    </Modal>
                </div>
                <div>
                    <button onClick={() => { openModalAddProduct() }}>Add Product</button>
                    <button onClick={() => { }}>View All Products</button>
                    <button onClick={() => { }}>View All Users</button>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard