import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {

    const [ order, setOrder ] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = ( item:MenuItem ) => {

        // Check if the item is already in the order
        const itemExist = order.find( orderItem => orderItem.id === item.id );

        if (itemExist) {

            const updatedOrder = order.map( orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            );

            setOrder( updatedOrder );

        } else {
            setOrder([
                ...order,
                { ...item, quantity: 1 }
            ]);
        }
    }

    const removeItem = ( id:MenuItem['id'] ) => {
        setOrder(order.filter( item => item.id !== id ));
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    return {
        // properties
        order,
        tip,
        setTip,

        // methods
        addItem,
        removeItem,
        placeOrder

    }
}