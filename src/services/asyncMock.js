const products = [
  {
    id: "1",
    name: "Smartphone Lumina X",
    price: 899,
    category: "electronics",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop",
    stock: 10,
    description: "El smartphone más avanzado con cámara de 108MP y batería de larga duración."
  },
  {
    id: "2",
    name: "Auriculares Noise-Cancelling",
    price: 249,
    category: "electronics",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    stock: 15,
    description: "Auriculares inalámbricos con cancelación de ruido activa."
  },
  {
    id: "3",
    name: "Chaqueta de Invierno",
    price: 120,
    category: "clothing",
    img: "https://images.unsplash.com/photo-1551028719-01c1eb562251?q=80&w=600&auto=format&fit=crop",
    stock: 5,
    description: "Chaqueta térmica resistente al agua para las condiciones más frías."
  },
  {
    id: "4",
    name: "Reloj Inteligente",
    price: 199,
    category: "accessories",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
    stock: 8,
    description: "Reloj inteligente con monitor de salud y notificaciones."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500); // Simulamos 1.5s de delay de red
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 1500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 1000);
  });
};
