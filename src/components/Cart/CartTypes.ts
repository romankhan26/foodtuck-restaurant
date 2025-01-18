export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface CartContextType {
    cartItems: CartItem[];
    updateQuantity: (productId: string, quantity: number) => void;
    removeFromCart: (productId: string) => void;
  }
  