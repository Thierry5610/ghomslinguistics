// Users Data
const users = [
    {
      userId: "user001",
      name: "John Doe",
      email: "johndoe@example.com",
    },
    {
      userId: "user002",
      name: "Jane Smith",
      email: "janesmith@example.com",
    },
    {
      userId: "user003",
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
    },
    {
      userId: "user004",
      name: "Bob Brown",
      email: "bobbrown@example.com",
    },
    {
      userId: "user005",
      name: "Charlie Davis",
      email: "charliedavis@example.com",
    }
  ];
  
  // Product Reviews Data
  const reviews = [
    {
      reviewId: "review001",
      productId: 1,
      userId: "user001",
      rating: 5,
      text: "Amazing phone! The performance is stellar.",
      createdAt: "2024-08-20T10:30:00Z",
    },
    {
      reviewId: "review002",
      productId: 1,
      userId: "user002",
      rating: 4,
      text: "Good phone, but the battery life could be better.",
      createdAt: "2024-08-19T14:45:00Z",
    },
    {
      reviewId: "review003",
      productId: 2,
      userId: "user003",
      rating: 4.5,
      text: "The laptop is excellent for productivity and gaming.",
      createdAt: "2024-08-18T09:15:00Z",
    },
    {
      reviewId: "review004",
      productId: 3,
      userId: "user004",
      rating: 4.7,
      text: "These headphones have incredible sound quality.",
      createdAt: "2024-08-17T12:00:00Z",
    },
    {
      reviewId: "review005",
      productId: 4,
      userId: "user005",
      rating: 4.2,
      text: "Great VR kit, but the controllers could be more responsive.",
      createdAt: "2024-08-16T08:30:00Z",
    }
  ];
  
  // Products Data
  const products = [
    {
      id: 1,
      productImageUrls: [
        'https://plus.unsplash.com/premium_photo-1680615470480-4f96d7882a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBtb2NrdXB8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680615470480-4f96d7882a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680615470480-4f96d7882a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1680615470480-4f96d7882a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
      ],
      productName: 'Phone X',
      brand: 'TechBrand',
      category: 'Smartphone',
      actualPrice: 899,
      originalPrice: 999,
      rating: 4.5,
      isHot: true,
      stock: 100,
      summary: 'A sleek, powerful smartphone with cutting-edge features.',
      description: 'Phone X is designed to deliver a premium user experience with a powerful processor, a stunning display, and an advanced camera system...',
      characteristics: {
        display_size: '6.1 inch',
        battery_life: '24 hours',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.0',
        camera: '12 MP dual-camera system',
        sensors: 'Face ID, accelerometer, gyroscope',
        water_resistance: 'IP68',
      },
    },
    {
      id: 2,
      productImageUrls: [
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhcHRvcCUyMEUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
      ],
      productName: 'Laptop Pro',
      brand: 'TechBrand',
      category: 'Laptop',
      actualPrice: 1099,
      originalPrice: 1299,
      rating: 4.8,
      isHot: false,
      stock: 50,
      summary: 'A high-performance laptop for professionals and creators.',
      description: 'Laptop Pro offers unparalleled performance with its latest-gen processors and high-resolution display. It is perfect for power users, creators, and professionals...',
      characteristics: {
        display_size: '15.6 inch',
        processor: 'Intel Core i7',
        RAM: '16GB',
        storage: '512GB SSD',
        battery_life: '12 hours',
        connectivity: 'Wi-Fi 6, Bluetooth 5.1, USB-C',
      },
    },
    {
      id: 3,
      productImageUrls: [
        'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lfGVufDB8fDB8fHww',
      ],
      productName: 'Headphones Z',
      brand: 'SoundMaster',
      category: 'Headphones',
      actualPrice: 249,
      originalPrice: 299,
      rating: 4.3,
      isHot: true,
      stock: 200,
      summary: 'Noise-cancelling over-ear headphones with exceptional sound quality.',
      description: 'Headphones Z deliver studio-quality sound with advanced noise-cancelling technology...',
      characteristics: {
        battery_life: '30 hours',
        connectivity: 'Bluetooth 5.0, wired',
        noise_cancelling: 'Active noise cancellation (ANC)',
        weight: '250g',
        frequency_response: '20Hz - 20kHz',
      },
    },
    {
      id: 4,
      productImageUrls: [
        'https://images.unsplash.com/photo-1657734240334-b13dfc3f6c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFZSJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1657734240334-b13dfc3f6c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFZSJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1657734240334-b13dfc3f6c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFZSJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1657734240334-b13dfc3f6c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFZSJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D',
      ],
      productName: 'VR Kit',
      brand: 'VirtualX',
      category: 'Virtual Reality',
      actualPrice: 449,
      originalPrice: 499,
      rating: 4.7,
      isHot: false,
      stock: 75,
      summary: 'Immersive virtual reality headset with advanced motion tracking.',
      description: 'VR Kit by VirtualX is your gateway to the world of immersive experiences...',
      characteristics: {
        display_resolution: '2160x1200',
        field_of_view: '110 degrees',
        tracking: '6DoF motion tracking',
        connectivity: 'Wireless, USB-C',
        weight: '500g',
      },
    },
    {
      id: 5,
      productImageUrls: [
        'https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV0fGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV0fGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV0fGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV0fGVufDB8fDB8fHww',
      ],
      productName: 'Tablet Y',
      brand: 'TabWorld',
      category: 'Tablet',
      actualPrice: 549,
      originalPrice: 599,
      rating: 4.6,
      isHot: false,
      stock: 120,
      summary: 'A versatile tablet with a stunning display and powerful performance.',
      description: 'Tablet Y offers a perfect balance between power and portability, making it an excellent choice for entertainment, productivity, and creativity...',
      characteristics: {
        display_size: '10.5 inch',
        battery_life: '15 hours',
        connectivity: 'Wi-Fi, Bluetooth 5.0',
        storage: '128GB',
        weight: '500g',
      },
    },
  ];
  
  const cart = [
    {
      productId: 1,
      productName: 'Phone X',
      brand: 'TechBrand',
      category: 'Smartphone',
      price: 899,
      quantity: 2,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1680615470480-4f96d7882a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBtb2NrdXB8ZW58MHx8MHx8fDA%3D',
    },
    {
      productId: 3,
      productName: 'Headphones Z',
      brand: 'SoundMaster',
      category: 'Headphones',
      price: 249,
      quantity: 1,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lfGVufDB8fDB8fHww',
    },
    {
      productId: 4,
      productName: 'VR Kit',
      brand: 'VirtualX',
      category: 'Virtual Reality',
      price: 449,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1657734240334-b13dfc3f6c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFZSJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D',
    }
  ];
  
    
  // Exporting data
  export { products, users, reviews, cart };
  