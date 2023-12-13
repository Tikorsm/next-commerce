'use client'
import { useCartStore } from "@/store";
import { MdOutlineShoppingCart } from "react-icons/md";

export default  function Cart() {
    const useStore = useCartStore();
    return(
      <>
        <div onClick={() => useStore.toggleCart()} className="flex items-center cursor-pointer relative">
        <MdOutlineShoppingCart className="w-5 h-5" />
            <span className="bg-teal-600 text-sm font-bold rounded-full h-4 w-4 flex items-center justify-center absolute left-3 bottom-3">2</span>
        </div>

       {!useStore.isOpen && (
          <div onClick={() => useStore.toggleCart()} className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">

            <div onClick={(e) => e.stopPropagation()} className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll">
            <h1>Meu carinho</h1>
               {
                useStore.cart.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
               }
            </div>
          </div>

            )}
      </>
    )
}