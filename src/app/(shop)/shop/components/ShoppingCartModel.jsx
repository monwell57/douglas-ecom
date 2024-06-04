"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../../../../components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../../../components/ui/sheet";

export function ShoppingCartModel() {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart();
  console.log(cartCount);
  return (
    <Sheet
      className="text-gray-800"
      open={shouldDisplayCart}
      onOpenChange={() => handleCartClick()}
    >
      <SheetContent className="sm:max-w-lg w-[90vw] text-gray-800">
        <SheetHeader className={"text-black"}>
          <SheetTitle className="text-black">Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don't have any items</h1>
              ) : (
                <h1 className="py-6">Hey, you have some items</h1>
              )}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default ShoppingCartModel;
