'use client'
import { useCartStore } from "@/store";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartDrawer from "./CartDrawer";

export default  function Cart() {
    const useStore = useCartStore();
    return(
      <>
        <div onClick={() => useStore.toggleCart()} className="flex items-center cursor-pointer relative">
        <MdOutlineShoppingCart className="w-5 h-5" />
            <span className="bg-teal-600 text-sm font-bold rounded-full h-4 w-4 flex items-center justify-center absolute left-3 bottom-3">
              {useStore.cart?.length}
            </span>
        </div>

       {!useStore.isOpen && <CartDrawer/>}
      </>
    )
}