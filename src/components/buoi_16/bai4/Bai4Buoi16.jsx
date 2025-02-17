import React, { useContext } from 'react'
import { ProductCtx } from './productContext/ProductContext'
import { ModalCtx } from '../bai5/ModalCtontext';

const Bai4Buoi16 = () => {
    const { products, addProduct, removeProduct } = useContext(ProductCtx);
    const { openModal, closeModal } = useContext(ModalCtx)

    const onAddNewProduct = () => {
        const stt = products?.length + 1;
        const newProduct = {
            id: `PRD${stt}`,
            name: `Product ${stt}`,
            price: 5000,
            quantity: 10
        }

        addProduct(newProduct);
    }

    const renderProducts = () => {
        return products?.map((prd) => {
            return <tr key={prd?.id}>
                <td>{prd?.id}</td>
                <td>{prd?.name}</td>
                <td>{prd?.price}</td>
                <td>{prd?.quantity}</td>
                <td><button onClick={() => removeProduct(prd?.id)}>Remove</button></td>
            </tr>
        })
    }

    return (
        <div>
            <button onClick={onAddNewProduct}>Add new product</button>
            <button onClick={() => openModal({ title: "Goodbye", description: "hen gap lai" })}>
                Open modal bai 4</button>
            <button onClick={closeModal}>Close modal bai 4</button>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>ACTION</th>
                </tr>
                {renderProducts()}
            </table>
        </div>
    )
}

export default Bai4Buoi16