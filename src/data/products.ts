import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Alpine Explorer',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'men',
    colors: ['#2D5F5D', '#22181C', '#7B6D8D'],
    features: [
      '40L capacity',
      'Waterproof exterior',
      'Padded laptop sleeve (17")',
      'Multiple compartments',
      'Ergonomic shoulder straps',
      'Chest and waist straps',
    ],
    description: 'The Alpine Explorer is designed for serious adventurers who need reliable gear. With 40L of storage space, waterproof materials, and ergonomic design, this backpack can handle multi-day treks while keeping your essentials safe and dry. The specialized compartments help organize your gear, and the padded laptop sleeve ensures your tech stays protected even in rugged conditions.',
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviews: 124,
    stock: 23
  },
  {
    id: '2',
    name: 'Urban Commuter',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'unisex',
    colors: ['#22181C', '#E07A5F', '#E5E5E5'],
    features: [
      '25L capacity',
      'Water-resistant',
      'Padded laptop sleeve (15")',
      'Quick-access front pocket',
      'Side water bottle holder',
      'Reflective details for night safety',
    ],
    description: 'Perfect for daily commutes and city exploration, the Urban Commuter combines style and functionality. The sleek design conceals ample storage for your work essentials, while the water-resistant exterior protects against unexpected showers. The padded laptop sleeve and organization pockets keep your devices and accessories secure as you navigate urban environments.',
    isFeatured: true,
    rating: 4.6,
    reviews: 98,
    stock: 45
  },
  {
    id: '3',
    name: 'Weekend Wanderer',
    price: 109.99,
    images: [
      'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'women',
    colors: ['#E07A5F', '#2D5F5D', '#E5E5E5'],
    features: [
      '30L capacity',
      'Water-resistant canvas',
      'Padded laptop sleeve (15")',
      'Expandable main compartment',
      'Hidden security pocket',
      'Convertible design (backpack/tote)',
    ],
    description: 'The Weekend Wanderer is your perfect companion for short getaways. This versatile backpack features an expandable main compartment that adapts to your packing needs, while the convertible design lets you carry it as a backpack or tote. Smart organization features and a hidden security pocket keep your belongings safe and accessible whether you\'re exploring a new city or heading to a countryside retreat.',
    isFeatured: false,
    isNew: true,
    rating: 4.7,
    reviews: 76,
    stock: 38
  },
  {
    id: '4',
    name: 'Digital Nomad',
    price: 149.99,
    images: [
      'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'unisex',
    colors: ['#22181C', '#7B6D8D', '#2D5F5D'],
    features: [
      '35L capacity',
      'TSA-friendly laptop compartment',
      'Built-in USB charging port',
      'RFID-blocking pocket',
      'Luggage pass-through',
      'Hidden pockets for valuables',
    ],
    description: 'Designed for modern professionals who work on the go, the Digital Nomad makes technology management seamless. The TSA-friendly laptop compartment lets you breeze through security, while the built-in USB charging port keeps your devices powered up. With thoughtful organization for cables, adapters, and documents, plus RFID protection for your cards and passport, this backpack is the ultimate tech-savvy travel companion.',
    isFeatured: true,
    rating: 4.9,
    reviews: 152,
    stock: 17
  },
  {
    id: '5',
    name: 'Daylight Hiker',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'unisex',
    colors: ['#7B6D8D', '#E07A5F', '#22181C'],
    features: [
      '20L capacity',
      'Lightweight design',
      'Hydration reservoir compatible',
      'Ventilated back panel',
      'Trekking pole attachments',
      'Emergency whistle on chest strap',
    ],
    description: 'The Daylight Hiker is engineered for day-long adventures on the trail. Weighing just over a pound empty, this ultralight pack won\'t slow you down, while the ventilated back panel keeps you cool during intense activities. With specialized attachments for trekking poles and a hydration reservoir sleeve, plus quick-access pockets for trail snacks and essentials, you\'ll be fully equipped for a day in nature.',
    rating: 4.5,
    reviews: 87,
    stock: 29
  },
  {
    id: '6',
    name: 'Campus Scholar',
    price: 69.99,
    images: [
      'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'unisex',
    colors: ['#E5E5E5', '#E07A5F', '#22181C'],
    features: [
      '28L capacity',
      'Laptop sleeve (15")',
      'Tablet pocket',
      'Organizer for stationery',
      'Side water bottle pocket',
      'Reinforced bottom for heavy textbooks',
    ],
    description: 'Designed with students in mind, the Campus Scholar helps you stay organized through long days of classes. The spacious main compartment fits textbooks and binders, while dedicated sleeves protect your laptop and tablet. The reinforced bottom stands up to daily wear and tear, and the water bottle pocket keeps hydration within reach. With comfortable straps and a back panel designed for all-day wear, this backpack makes campus life easier.',
    isFeatured: false,
    rating: 4.4,
    reviews: 112,
    stock: 53
  },
  {
    id: '7',
    name: 'Studio Voyager',
    price: 119.99,
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'women',
    colors: ['#E07A5F', '#E5E5E5', '#2D5F5D'],
    features: [
      '26L capacity',
      'Vegan leather accents',
      'Padded laptop sleeve (14")',
      'Yoga mat straps',
      'Separate shoe compartment',
      'Insulated water bottle holder',
    ],
    description: 'The Studio Voyager transitions seamlessly from work to workout, eliminating the need for multiple bags. The sleek design looks professional in an office setting, while specialized features like yoga mat straps and a separate shoe compartment make it ideal for fitness enthusiasts. The vegan leather accents add a touch of sophistication, and the thoughtful organization keeps your work essentials separate from your gym gear.',
    isNew: true,
    rating: 4.7,
    reviews: 65,
    stock: 31
  },
  {
    id: '8',
    name: 'Wilderness Trekker',
    price: 159.99,
    images: [
      'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'men',
    colors: ['#2D5F5D', '#7B6D8D', '#22181C'],
    features: [
      '55L capacity',
      'Rain cover included',
      'Adjustable suspension system',
      'Sleeping bag compartment',
      'Multiple access points',
      'Hydration compatible',
    ],
    description: 'Built for serious backpacking adventures, the Wilderness Trekker helps you carry substantial loads in comfort. The advanced suspension system distributes weight evenly, while the adjustable torso length ensures a perfect fit for your body. Multiple access points let you reach gear without unpacking, and the included rain cover provides extra protection in wet conditions. This pack is ready for multi-day journeys through challenging terrain.',
    isFeatured: true,
    rating: 4.9,
    reviews: 93,
    stock: 14
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => 
    product.category === category || 
    (category === 'men' && product.category === 'unisex') || 
    (category === 'women' && product.category === 'unisex')
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: string, category: string): Product[] => {
  return products
    .filter(product => 
      product.id !== currentProductId && 
      (product.category === category || product.category === 'unisex')
    )
    .slice(0, 4);
};