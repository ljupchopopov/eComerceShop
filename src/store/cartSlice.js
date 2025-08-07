import { createSlice } from "@reduxjs/toolkit";

const initialCart = JSON.parse(localStorage.getItem("cart_item")) || [];
const initialTotal = JSON.parse(localStorage.getItem("cart_total")) || 0;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: initialCart,
    totalProduct: initialTotal,
  },
  reducers: {
    saveInCartAction: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);

      if (index === -1) {
        // Add new product with count and cartTotal
        state.cart.push({
          ...product,
          count: product.count || 1,
          cartTotal: product.price * (product.count || 1),
        });
        state.totalProduct += product.count || 1;
      } else {
        // If exists, update count & cartTotal (respect stock limit)
        const currentCount = state.cart[index].count;
        const addCount = product.count || 1;
        const newCount = Math.min(currentCount + addCount, product.stock);

        state.totalProduct += newCount - currentCount;
        state.cart[index].count = newCount;
        state.cart[index].cartTotal = newCount * product.price;
      }

      // Sync localStorage including unique item count
      localStorage.setItem("cart_item", JSON.stringify(state.cart));
      localStorage.setItem("cart_total", JSON.stringify(state.totalProduct));
      localStorage.setItem("cart_unique_count", state.cart.length);
    },

    updateProductQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index === -1) return;

      const product = state.cart[index];
      let newCount = product.count + amount;

      if (newCount < 1) newCount = 1;
      if (newCount > product.stock) newCount = product.stock;

      state.totalProduct += newCount - product.count;
      product.count = newCount;
      product.cartTotal = product.price * newCount;

      // Sync localStorage including unique item count
      localStorage.setItem("cart_item", JSON.stringify(state.cart));
      localStorage.setItem("cart_total", JSON.stringify(state.totalProduct));
      localStorage.setItem("cart_unique_count", state.cart.length);
    },

    deleteFromCartAction: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index === -1) return;

      const removedCount = state.cart[index].count;
      state.cart.splice(index, 1);
      state.totalProduct -= removedCount;

      // Sync localStorage including unique item count
      localStorage.setItem("cart_item", JSON.stringify(state.cart));
      localStorage.setItem("cart_total", JSON.stringify(state.totalProduct));
      localStorage.setItem("cart_unique_count", state.cart.length);
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalProduct = 0;
      localStorage.removeItem("cart_item");
      localStorage.removeItem("cart_total");
      localStorage.removeItem("cart_unique_count");
    },
  },
});

export const {
  saveInCartAction,
  updateProductQuantity,
  deleteFromCartAction,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
