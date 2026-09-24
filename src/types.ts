export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number; // in FCFA
  category: string;
  isPopular?: boolean;
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
  calories?: string;
  customizable?: boolean;
}

export interface CartItemOption {
  category: string;
  name: string;
  priceDelta: number;
}

export interface CartItem {
  cartItemId: string;
  dish: Dish;
  quantity: number;
  options: CartItemOption[];
  specialInstructions?: string;
  totalPrice: number;
}

export interface OrderState {
  orderId: string;
  status: 'received' | 'preparing' | 'on_the_way' | 'delivered';
  customerName: string;
  phone: string;
  address: string;
  neighborhood: string;
  paymentMethod: 'wave' | 'orange' | 'mtn' | 'moov' | 'cash' | 'card';
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  estimatedMinutes: number;
  createdAt: string;
  courierName?: string;
  courierPhone?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  neighborhood: string;
  zone: '2 Plateaux' | 'Angré' | 'Cocody Centre' | 'Riviera' | 'Zone 3';
  cuisine: string;
  rating: number;
  reviewCount: number;
  deliveryTimeMin: number;
  deliveryTimeMax: number;
  deliveryFee: number; // in FCFA
  minOrder: number; // in FCFA
  image: string;
  logo: string;
  address: string;
  specialties: string[];
  dishes: Dish[];
  isFeatured?: boolean;
}

export interface CoverageZone {
  id: string;
  name: string;
  description: string;
  deliveryTime: string;
  deliveryFee: number; // in FCFA
  status: 'active' | 'coming_soon';
  partnerCount: number;
  popularSpots: string[];
  coordinates: { x: number; y: number }; // SVG map percentage coordinates
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  neighborhood: string;
  personaType: 'Jeune Pro' | 'Famille' | 'Étudiant' | 'Partenaire';
  avatar: string;
  rating: number;
  comment: string;
  favoriteOrder: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  neighborhood: string;
  subject: 'client' | 'restaurant' | 'livreur' | 'entreprise';
  message: string;
}
