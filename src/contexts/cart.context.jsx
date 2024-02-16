import React, { createContext, useState } from "react";

export const CartContext = createContext ({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {isCartOpen, setIsCartOpen}

  return (
    <div>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </div>
  );
};
