export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  store: string;
  shipping: string;
  country: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Smart LED Lamp Pro',
    category: 'Électronique',
    price: 79,
    originalPrice: 99,
    rating: 4.8,
    reviews: 2140,
    badge: 'Top Vente',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    store: 'NovaTech',
    shipping: 'Livraison 2-4 jours',
    country: 'France'
  },
  {
    id: 2,
    name: 'Casque Audio Air Max',
    category: 'Électronique',
    price: 119,
    originalPrice: 169,
    rating: 4.7,
    reviews: 1825,
    badge: 'Nouveau',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    store: 'SoundWave',
    shipping: 'Livraison express',
    country: 'Belgique'
  },
  {
    id: 3,
    name: 'Montre Connectée Urban',
    category: 'Mode',
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    reviews: 3610,
    badge: 'Meilleure vente',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    store: 'TimeFit',
    shipping: 'Livraison gratuite',
    country: 'Allemagne'
  },
  {
    id: 4,
    name: 'Sac à Dos Voyager',
    category: 'Sport',
    price: 89,
    originalPrice: 120,
    rating: 4.9,
    reviews: 980,
    badge: 'Très apprécié',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    store: 'TrailMate',
    shipping: 'Livraison en 3 jours',
    country: 'Espagne'
  },
  {
    id: 5,
    name: 'Chaussures Running Flex',
    category: 'Sport',
    price: 129,
    originalPrice: 176,
    rating: 4.8,
    reviews: 2412,
    badge: 'Flash Sale',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
    store: 'RunCity',
    shipping: 'Livraison gratuite',
    country: 'France'
  },
  {
    id: 6,
    name: 'Tapis de Yoga Premium',
    category: 'Maison',
    price: 49,
    originalPrice: 69,
    rating: 4.7,
    reviews: 1550,
    badge: 'Eco',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    store: 'ZenNest',
    shipping: 'Livraison 2-5 jours',
    country: 'Italie'
  }
];

export const categories = [
  'Tout',
  'Électronique',
  'Mode',
  'Sport',
  'Maison',
];
