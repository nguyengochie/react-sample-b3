import React, { useMemo, useReducer } from 'react'

const PRODUCTS = [
    { id: 1, name: "Macbook M4", price: 2000 },
    { id: 2, name: "Iphone 16 Pro", price: 1500 },
    { id: 3, name: "Air pod 4", price: 500 },
    { id: 4, name: "Magic Mouse", price: 300 },
    { id: 5, name: "Air pod Max", price: 1000 },
]

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            // thêm vào cart nếu chư tồn tại
            // tăng số lượng sp nếu đã tồn tại
            let isAdded = false;

            const cart = state?.map((prd) => {
                if (prd?.id === action?.product?.id) {
                    isAdded = true;
                    return { ...prd, quantity: (prd?.quantity || 0) + 1 }
                }
                return prd;
            })

            return isAdded ? cart : [...state, { ...action?.product, quantity: 1 }];
        case "TANG_SL":
            return state?.map((prd) => {
                if (prd?.id === action?.id) {
                    return { ...prd, quantity: (prd?.quantity || 0) + 1 }
                }
                return prd;
            })
        case "GIAM_SL":
            const isSoldout = state?.find((prd) => prd?.id === action?.id)?.quantity === 1;

            if (isSoldout) {
                return state?.filter((prd) => prd?.id !== action?.id);
            }

            return state?.map((prd) => {
                if (prd?.id === action?.id) {
                    return { ...prd, quantity: (prd?.quantity || 0) - 1 }
                }
                return prd;
            })


        default:
            break;
    }
}

const Buoi15Bai4 = () => {
    const [cartList, dispatch] = useReducer(reducer, []);

    const onGetToalAmount = () => {
        let total = 0;
        cartList?.forEach((prd) => {
            const sum = prd?.quantity * prd?.price;
            total += sum;
        });

        return total;
    }

    const amount = useMemo(() => onGetToalAmount(), [cartList]);

    const renderProducts = () => {
        return PRODUCTS.map((prd) => {
            return <tr key={prd.id}>
                <td>{prd.id}</td>
                <td>{prd.name}</td>
                <td>{prd.price}</td>
                <td><button onClick={() => onAddToCart(prd)}>Add to cart</button></td>
            </tr>
        })
    }

    const renderCart = () => {
        return cartList.map((prd) => {
            return <tr key={prd.id}>
                <td>{prd.id}</td>
                <td>{prd.name}</td>
                <td>{prd.price}</td>
                <td>
                    <div style={{ display: "flex", gap: "4px" }}>
                        <button onClick={() => onDecrease(prd?.id)}>-</button>
                        <div><h3>{prd?.quantity || 0}</h3></div>
                        <button onClick={() => onIncrease(prd?.id)}>+</button>
                    </div>
                </td>
            </tr>
        })
    }

    const onAddToCart = (product) => {
        dispatch({ type: "ADD_CART", product });
    }

    const onIncrease = (id) => {
        dispatch({ type: "TANG_SL", id });
    }
    const onDecrease = (id) => {
        dispatch({ type: "GIAM_SL", id });
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "20px" }}>
                <table border="1px">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    {renderProducts()}
                </table>

                <div>
                    <table border={1}>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        {renderCart()}
                    </table>
                    <h1>{amount}$</h1>
                </div>
            </div>
        </div>
    )
}

export default Buoi15Bai4