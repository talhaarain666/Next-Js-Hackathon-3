type CartItem = {
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  
  export const getCart = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const saveCart = (cart: CartItem[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  
  export const addToCart = (product: CartItem) => {
    const cart = getCart();
    const existingItem = cart.find((item) => item._id === product._id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    saveCart(cart);
  };
  
  export const updateQuantity = (id: string, delta: number) => {
    const cart = getCart();
    const updatedCart = cart
      .map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
      .filter((item) => item.quantity > 0);
  
    saveCart(updatedCart);
  };
  
  export const removeFromCart = (id: string) => {
    const cart = getCart();
    const updatedCart = cart.filter((item) => item._id !== id);
    saveCart(updatedCart);
  };
  