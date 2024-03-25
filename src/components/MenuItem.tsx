import type { MenuItem } from "../types"

type MenuItemProps = {
    item        : MenuItem;
    addItem     : (item:MenuItem) => void;
}


const MenuItem = ({ item, addItem }: MenuItemProps ) => {

    return (

        <button
            className="border-2 border-slate-900 hover:bg-slate-600 hover:text-white w-full p-3 flex justify-between rounded-2xl"
            onClick={ () => addItem(item) }
        >
            <p>{ item.name }</p>
            <p className="font-black">${ item.price }</p>
        </button>

    )
}

export default MenuItem