declare module '@/app/context/CartContext' {
  interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  interface CartState {
    items: CartItem[];
    total: number;
  }

  type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
    | { type: 'CLEAR_CART' };

  interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
  }

  export function CartProvider({ children }: { children: React.ReactNode }): JSX.Element;
  export function useCart(): CartContextType;
}
