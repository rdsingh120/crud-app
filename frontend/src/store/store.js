import { create } from 'zustand'

export const useStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  getProducts: async () => {
    const response = await fetch('api/products')
    const { data } = await response.json()
    set({ products: data })
  },
  createProduct: async (newProduct) => {
    const { name, price, image } = newProduct
    if (!name || !price || !image) {
      return { success: false, message: 'Please complete all the fields' }
    }
    const response = await fetch('api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
    const { data } = await response.json()
    set((state) => ({ products: [...state.products, data] }))
    return { success: true, message: 'New product created ' }
  },
  updateProduct: async (id, productUpdate) => {
    const response = await fetch(`api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productUpdate),
    })
    const { data, success, message } = await response.json()
    if (!success) return { success: success, message: message }
    set((state) => ({
      products: state.products.map((product) =>
        product._id == id ? data : product
      ),
    }))
    return { success: success, message: message }
  },
  deleteProduct: async (id) => {
    const response = await fetch(`api/products/${id}`, {
      method: 'DELETE',
    })
    const { success, message } = await response.json()
    set((state) => ({
      products: state.products.filter(({ _id }) => _id != id),
    }))
    return { success: success, message: message }
  },
}))
