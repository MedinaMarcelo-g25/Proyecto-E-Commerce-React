const productos = [
    {
        "id": 1,
        "nombre": "iPhone 11 128GB",
        "precio": 699.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 11.jpg"
    },
    {
        "id": 2,
        "nombre": "iPhone 11 PRO 256GB",
        "precio": 899.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 11 PRO.jpg"
    },
    {
        "id": 3,
        "nombre": "iPhone 11 PRO MAX 256GB",
        "precio": 999.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 11 PRO MAX.jpg"
    },
    {
        "id": 4,
        "nombre": "iPhone 12 128GB",
        "precio": 799.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 12.jpg"
    },
    {
        "id": 5,
        "nombre": "iPhone 12 PRO 128GB",
        "precio": 899.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 12 PRO.jpg"
    },
    {
        "id": 6,
        "nombre": "iPhone 13 128GB",
        "precio": 899.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 13.jpg"
    },
    {
        "id": 7,
        "nombre": "iPhone 13 PRO 128GB",
        "precio": 999.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 13 PRO.jpg"
    },
    {
        "id": 8,
        "nombre": "iPhone 13 PRO MAX 128GB",
        "precio": 1099.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 13 PRO MAX.jpg"
    },
    {
        "id": 9,
        "nombre": "iPhone 14 128GB",
        "precio": 1099.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 14.jpg"
    },
    {
        "id": 10,
        "nombre": "iPhone 14 PRO 128GB",
        "precio": 1199.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 14 PRO.jpg"
    },
    {
        "id": 11,
        "nombre": "iPhone 14 PRO MAX 128GB",
        "precio": 1299.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 14 PRO.jpg"
    },
    {
        "id": 12,
        "nombre": "iPhone 15 128GB",
        "precio": 1199.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 15.jpg"
    },
    {
        "id": 13,
        "nombre": "iPhone 15 PRO 128GB",
        "precio": 1299.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 15 PRO.jpg"
    },
    {
        "id": 14,
        "nombre": "iPhone 16 128GB",
        "precio": 1299.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 16.jpg"
    },
    {
        "id": 15,
        "nombre": "iPhone 16 PRO 128GB",
        "precio": 1399.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 16.jpg"
    },
    {
        "id": 16,
        "nombre": "iPhone 16 PRO MAX 256GB",
        "precio": 1499.99,
        "category": "Celulares",
        "imagenUrl": "/assets/IPHONE 16.jpg"
    },
    {
        "id": 17,
        "nombre": "YARA MOL",
        "precio": 37000,
        "category": "Perfumería",
        "imagenUrl": "/assets/YARA.jpg"
    },
    {
        "id": 18,
        "nombre": "Al Noble Safeer EDP",
        "precio": 36000,
        "category": "Perfumería",
        "imagenUrl": "/assets/AL NOBLE.jpg"
    },
    {
        "id": 19,
        "nombre": "Asad Zanzibar EDP",
        "precio": 30000,
        "category": "Perfumería",
        "imagenUrl": "/assets/ASAD ZANZIBAR.jpg"
    },
    {
        "id": 20,
        "nombre": "Her Confession EDP",
        "precio": 57000,
        "category": "Perfumería",
        "imagenUrl": "/assets/HER CONFESSION.jpg"
    },
    {
        "id": 21,
        "nombre": "Khamrah EDP",
        "precio": 38000,
        "category": "Perfumería",
        "imagenUrl": "/assets/KHAMRAH.jpg"
    },
    {
        "id": 22,
        "nombre": "PS5 con lectora y 2 juegos físicos",
        "precio": 799.99,
        "category": "Electrónica",
        "imagenUrl": "/assets/PS5 +2JF.jpg"
    },
    {
        "id": 23,
        "nombre": "PS5 con lectora",
        "precio": 699.99,
        "category": "Electrónica",
        "imagenUrl": "/assets/PS 5.jpg"
    },
    {
        "id": 24,
        "nombre": "PS4",
        "precio": 399.99,
        "category": "Electrónica",
        "imagenUrl": "/assets/PS 4.jpg"
    },
    {
        "id": 25,
        "nombre": "XBOX Series S",
        "precio": 299.99,
        "category": "Electrónica",
        "imagenUrl": "/assets/X BOX SERIE S.jpg"
    }
]
function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
}

export default getProductos;