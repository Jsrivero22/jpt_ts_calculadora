import { useMemo } from "react";
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order       : OrderItem[];
    tip         : number;
    placeOrder  : () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps ) => {

    // useMemo
    const subTotalAmount = useMemo(() => order.reduce((acc, item) => acc + (item.price * item.quantity), 0), [order]);

    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

    // useCallback
    // const subTotalAmount = useCallback(() => order.reduce((acc, item) => acc + (item.price * item.quantity), 0), [order]);

    // const tipAmount = useCallback(() => subTotalAmount() * tip, [tip, order])
    // const totalAmount = useCallback(() => subTotalAmount() + tipAmount(), [tip, order])

    return (

        <>
            <div className="space-y-3">

                <h2 className="font-black text-2xl">Totales y Propina:</h2>

                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency( subTotalAmount ) }</span>
                </p>

                <p>Propinas: {''}
                    <span className="font-bold">{ formatCurrency( tipAmount ) }</span>
                </p>

                <p>Total a Pagar: {''}
                    <span className="font-bold">{ formatCurrency( totalAmount ) }</span>
                </p>

            </div>

            <button
                className="w-full p-3 bg-black uppercase text-white font-bold mt-10 rounded-md disabled:opacity-10"
                disabled={ totalAmount === 0 }
                onClick={ placeOrder }
            >
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotals