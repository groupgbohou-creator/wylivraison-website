import { Restaurant, CoverageZone, Testimonial } from '../types';

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'burger-shop',
    name: 'Burger Shop',
    tagline: 'Smash Burgers artisanaux, 100% Bœuf Black Angus & Poulet Croustillant',
    neighborhood: 'Cocody Deux Plateaux Vallons',
    zone: '2 Plateaux',
    cuisine: 'Burgers & Street',
    rating: 4.8,
    reviewCount: 864,
    deliveryTimeMin: 25,
    deliveryTimeMax: 35,
    deliveryFee: 1000,
    minOrder: 2500,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    logo: 'BS',
    address: 'Rue des Jardins, Cocody 2 Plateaux Vallons, Abidjan',
    specialties: ['Smash Beef Burger Double', 'Pure Angus Bacon Cheese', 'Molten Crispy Chicken', 'Dirty Loaded Fries'],
    isFeatured: true,
    dishes: [
      {
        id: 'bs-pop-1',
        name: 'Smash Beef Burger Double',
        description: 'Double steak de bœuf Black Angus écrasé à la plancha, double cheddar fondu, oignons caramélisés, sauce secrète Woudy, cornichons doux.',
        price: 4900,
        category: 'Populaire',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-pop-2',
        name: 'Fresh Local Fried Potatoes (Frites Fraîches)',
        description: 'Pommes de terre fraîches coupées à la main chaque matin, double friture dorée et assaisonnement sel de mer & paprika doux.',
        price: 1500,
        category: 'Populaire',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-pop-3',
        name: 'Pure Angus Bacon Cheese Burger',
        description: 'Steak de bœuf Black Angus 200g, bacon croustillant fumé, cheddar affiné de caractère, oignons rouges, sauce barbecue maison.',
        price: 5500,
        category: 'Populaire',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-pop-4',
        name: 'Molten Crispy Chicken Fillet',
        description: 'Filet de poulet pané panko ultra-croustillant, cœur de fromage coulant, salade batavia fraîche, mayonnaise relevée.',
        price: 4800,
        category: 'Populaire',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-smash-1',
        name: 'The Classic Smash Single',
        description: 'Steak Black Angus écrasé croustillant sur les bords, cheddar américain fondu, pickles doux, ketchup & moutarde douce.',
        price: 3900,
        category: 'Smash Burgers',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-smash-2',
        name: 'The Abidjan Smash Double',
        description: 'Deux steaks smashés juteux, double cheddar affiné, oignons caramélisés au beurre, sauce secrète Woudy dans un pain brioché toasté.',
        price: 4900,
        category: 'Smash Burgers',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-smash-3',
        name: 'Triple Smash Monster Burger',
        description: 'Trois steaks smashés crousti-dorés, triple dose de cheddar fondu, double bacon fumé et sauce spéciale Burger Shop.',
        price: 6500,
        category: 'Smash Burgers',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-smash-4',
        name: 'Smash Truffle & Melted Cheese',
        description: 'Double smash burger parfumé à la truffe noire, fromage fondu coulant, champignons sautés au thym et roquette.',
        price: 5900,
        category: 'Smash Burgers',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-beef-1',
        name: 'Make Your Own Premium Beef Burger',
        description: '100% bœuf Black Angus irlandais premium. Choisissez votre cuisson, vos fromages préférés, vos sauces artisanales et vos garnitures.',
        price: 5200,
        category: 'Boeuf Premium Angus',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-beef-2',
        name: 'Molten Beef Burger',
        description: 'Steak Black Angus garni d’un cœur coulant de fromage fondu, oignons grillés, sauce Burger Shop et salade croquante.',
        price: 5600,
        category: 'Boeuf Premium Angus',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-beef-3',
        name: 'Dirty Beef Burger',
        description: 'Steak angus épais, sauce dirty secrète Burger Shop, bacon croustillant, lamelles d’oignons frits croustillants et cornichons.',
        price: 5800,
        category: 'Boeuf Premium Angus',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-beef-4',
        name: 'Honest Beef Burger',
        description: 'La recette pure et authentique : steak de bœuf Black Angus, laitue fraîche, rondelles de tomate de Cocody, cheddar et sauce maison.',
        price: 4700,
        category: 'Boeuf Premium Angus',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-beef-5',
        name: 'Creamy Mushroom Beef Burger',
        description: 'Steak de bœuf Angus nappé d’une poêlée onctueuse de champignons à la crème d’herbes et fromage suisse fondu.',
        price: 5700,
        category: 'Boeuf Premium Angus',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-beef-6',
        name: 'Fiery Spicy Beef Burger',
        description: 'Pour les amateurs de piquant : steak Angus épicé, piments jalapeños sautés, piment habanero doux, sauce dynamite et cheddar.',
        price: 5400,
        category: 'Boeuf Premium Angus',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80',
        spicy: true,
        customizable: true
      },
      {
        id: 'bs-chick-1',
        name: 'Pure Chicken Fillet Regular (200g)',
        description: 'Gros filet de poulet frais mariné aux herbes puis pané doré, sauce mayonnaise citronnée douce et salade croquante.',
        price: 4500,
        category: 'Poulet Fillet Croustillant',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-chick-2',
        name: 'Honey Mustard Crispy Chicken',
        description: 'Filet de poulet pané croustillant, sauce moutarde miel onctueuse, cornichons et oignons rouges.',
        price: 4800,
        category: 'Poulet Fillet Croustillant',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-chick-3',
        name: 'Dirty Chicken Fillet Burger',
        description: 'Filet de poulet croustillant, sauce dirty au piment doux, bacon de bœuf grillé, double fromage fondu.',
        price: 5200,
        category: 'Poulet Fillet Croustillant',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-combo-1',
        name: 'Menu Smash Double Combo',
        description: 'The Abidjan Smash Double + Frites fraîches locales de pommes de terre + Boisson 33cl au choix.',
        price: 6200,
        category: 'Menus & Combos',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-combo-2',
        name: 'Menu Pure Angus Gourmet Box',
        description: 'Pure Angus Bacon Cheese + Frites de patates douces + Boisson 33cl + Sauce artisanale au choix.',
        price: 7500,
        category: 'Menus & Combos',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-combo-3',
        name: 'Menu Duo Partage Burger Shop',
        description: '2 Burgers au choix (Smash Double ou Crispy Chicken) + 2 Frites fraîches + 2 Boissons 33cl + 2 Sauces dip.',
        price: 11900,
        category: 'Menus & Combos',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
        customizable: true
      },
      {
        id: 'bs-side-1',
        name: 'Fresh Local Fried Potatoes (Frites Fraîches)',
        description: 'Frites de pommes de terre locales fraîches, croustillantes à l’extérieur et fondantes à cœur.',
        price: 1500,
        category: 'Accompagnements (Sides)',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-side-2',
        name: 'Frites Croustillantes de Patate Douce',
        description: 'Bâtonnets dorés de patate douce ivoirienne assaisonnés d’une pointe d’origan et sel fin.',
        price: 1800,
        category: 'Accompagnements (Sides)',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-side-3',
        name: 'Dirty Loaded Cheese Fries',
        description: 'Portion généreuse de frites fraîches recouvertes de sauce cheddar fondue chaude, bacon croustillant et oignons frits.',
        price: 2800,
        category: 'Accompagnements (Sides)',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-side-4',
        name: 'Golden Onion Rings Artisanaux (8 pcs)',
        description: 'Rondelles d’oignons frais enrobées d’une pâte à beignet croustillante dorée, servies avec sauce BBQ.',
        price: 2000,
        category: 'Accompagnements (Sides)',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1639024471285-0afc38317e3f?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-side-5',
        name: 'Mozzarella Sticks Fondants (5 pcs)',
        description: 'Bâtonnets de mozzarella panés croustillants au cœur ultra-filant, sauce tomate basilic dip.',
        price: 2500,
        category: 'Accompagnements (Sides)',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-sauce-1',
        name: 'Sauce Secrète Woudy Burger',
        description: 'Recette signature onctueuse à base de mayonnaise maison, relish doux et épices fumées.',
        price: 500,
        category: 'Sauces Maison',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1514944298352-f1e138a0b0d3?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-sauce-2',
        name: 'Mayonnaise Truffée Onctueuse',
        description: 'Crème de truffe noire et mayonnaise légère fouettée à la main.',
        price: 800,
        category: 'Sauces Maison',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1514944298352-f1e138a0b0d3?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-sauce-3',
        name: 'Sauce Fromagère Cheddar Chaud',
        description: 'Cheddar fondant affiné fondu lentement au lait frais et poivre concassé.',
        price: 700,
        category: 'Sauces Maison',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1514944298352-f1e138a0b0d3?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-drink-1',
        name: 'Jus de Bissap Artisanal Frais (50cl)',
        description: 'Infusion fraîche de fleurs d’hibiscus, menthe douce et vanille locale.',
        price: 1200,
        category: 'Boissons & Desserts',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-drink-2',
        name: 'Coca-Cola Zéro / Original (33cl)',
        description: 'Canette fraîche servie très fraîche.',
        price: 1000,
        category: 'Boissons & Desserts',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-drink-3',
        name: 'Fanta Orange Frais (33cl)',
        description: 'Canette fraîche désaltérante.',
        price: 1000,
        category: 'Boissons & Desserts',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-drink-4',
        name: 'Eau Minérale Awa (50cl)',
        description: 'Bouteille d’eau minérale plate fraîche.',
        price: 600,
        category: 'Boissons & Desserts',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'bs-drink-5',
        name: 'Cookie Moelleux Cœur Chocolat Noir',
        description: 'Cuit minute, brisures de chocolat noir ivoirien et fleur de sel.',
        price: 1500,
        category: 'Boissons & Desserts',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-1',
    name: 'Chez Ambroise Cocody',
    tagline: 'L’incontournable des braisés ivoiriens & du kédjénou mijoté',
    neighborhood: 'Deux Plateaux Vallons',
    zone: '2 Plateaux',
    cuisine: 'Ivoirien & Braisés',
    rating: 4.9,
    reviewCount: 342,
    deliveryTimeMin: 25,
    deliveryTimeMax: 35,
    deliveryFee: 1000,
    minOrder: 3000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    logo: 'CA',
    address: 'Rue des Jardins, face pharmacie des Vallons, Cocody',
    specialties: ['Poulet Braisé braisé au feu de bois', 'Alloco doré croustillant', 'Attiéké Garba Chic'],
    isFeatured: true,
    dishes: [
      {
        id: 'd-1',
        name: 'Grand Demi-Poulet Braisé & Alloco',
        description: 'Demi-poulet mariné aux épices locales, braisé lentement, servi avec alloco banane mûre et piment vert écrasé.',
        price: 4500,
        category: 'Grillades',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-2',
        name: 'Kédjénou de Pintade Traditionnel',
        description: 'Pintade mijotée à l’étouffée dans un canari en terre cuite avec tomates fraîches, oignons doux et piments entiers.',
        price: 6500,
        category: 'Mijotés',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-3',
        name: 'Attiéké Garba Chic Mérou',
        description: 'Pavé de mérou doré croustillant, attiéké frais de Grand-Bassam, dés de tomates, oignons et piment frais.',
        price: 3500,
        category: 'Classiques',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-4',
        name: 'Bouteille Jus de Bissap Artisanal (50cl)',
        description: 'Infusion de fleurs d’hibiscus biologique, menthe fraîche et touche de vanille locale.',
        price: 1200,
        category: 'Boissons',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-2',
    name: 'Le Saakan Cocody',
    tagline: 'Gastronomie africaine moderne et créations d’Abidjan',
    neighborhood: 'Cocody Danga',
    zone: 'Cocody Centre',
    cuisine: 'Africain Moderne',
    rating: 4.8,
    reviewCount: 215,
    deliveryTimeMin: 30,
    deliveryTimeMax: 40,
    deliveryFee: 1200,
    minOrder: 4500,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    logo: 'LS',
    address: 'Boulevard de France, près de la Cité des Arts, Cocody',
    specialties: ['Filet de Capitaine aux herbes', 'Brochettes d’Agouti fines', 'Riz Gras au Soumara'],
    isFeatured: true,
    dishes: [
      {
        id: 'd-21',
        name: 'Filet de Capitaine Rôti & Banane Plantain Écrasée',
        description: 'Capitaine frais de la lagune Ébrié, émulsion citronnelle et purée onctueuse de bananes braisées.',
        price: 7500,
        category: 'Signature',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-22',
        name: 'Riz Djolof Royal au Gigot d’Agneau',
        description: 'Riz sauté aux épices d’Afrique de l’Ouest, morceaux de gigot confit et légumes glacés.',
        price: 6800,
        category: 'Plats',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-3',
    name: 'Le Maquis Du Val Cocody',
    tagline: 'Brochettes de mérou braisé, escargots piquants & attiéké d’or',
    neighborhood: 'Cocody Val Doyen',
    zone: 'Cocody Centre',
    cuisine: 'Ivoirien & Braisés',
    rating: 4.8,
    reviewCount: 412,
    deliveryTimeMin: 25,
    deliveryTimeMax: 35,
    deliveryFee: 1000,
    minOrder: 3000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    logo: 'MV',
    address: 'Boulevard des Martyrs, Val Doyen, Cocody',
    specialties: ['Brochettes de mérou', 'Escargots sauce piquante', 'Aloco craquant'],
    isFeatured: false,
    dishes: [
      {
        id: 'd-31',
        name: 'Brochettes Géantes de Mérou Braisé (3 pièces)',
        description: 'Morceaux tendres de mérou grillés sur braises de charbon de bois avec sauce chimichurri ivoirienne.',
        price: 5500,
        category: 'Grillades',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-32',
        name: 'Poêlée d’Escargots Sauvages Piquants',
        description: 'Gros escargots de forêt sautés à la tomate fraîche, oignons doux et piments de Tiassalé.',
        price: 6000,
        category: 'Spécialités',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-4',
    name: 'Pizzeria Bella Cocody',
    tagline: 'Pizzas artisanales cuites au vrai feu de bois d’hévéa',
    neighborhood: 'Deux Plateaux Aghien',
    zone: '2 Plateaux',
    cuisine: 'Italien & Pizza',
    rating: 4.7,
    reviewCount: 180,
    deliveryTimeMin: 25,
    deliveryTimeMax: 35,
    deliveryFee: 1000,
    minOrder: 4000,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    logo: 'PB',
    address: 'Carrefour Aghien, face Église Ste Cécile, 2 Plateaux',
    specialties: ['Pizza Truffe & Champignons', 'Pizza Babi Braisée', 'Tiramisu traditionnel'],
    isFeatured: false,
    dishes: [
      {
        id: 'd-41',
        name: 'Pizza Reine d’Aghien (Feu de bois)',
        description: 'Sauce tomate San Marzano, mozzarella fior di latte, jambon supérieur braisé, champignons de Paris frais.',
        price: 6500,
        category: 'Pizzas',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-42',
        name: 'Pizza 4 Fromages Affinés',
        description: 'Mozzarella, gorgonzola crémeux, provolone fumé et copeaux de parmesan 24 mois.',
        price: 7000,
        category: 'Pizzas',
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-5',
    name: 'L’Avenue Riviera Grill',
    tagline: 'Poissons entiers braisés, soles de Grand-Béréby & cocktails frais',
    neighborhood: 'Riviera Golf',
    zone: 'Riviera',
    cuisine: 'Ivoirien & Braisés',
    rating: 4.9,
    reviewCount: 290,
    deliveryTimeMin: 25,
    deliveryTimeMax: 35,
    deliveryFee: 1200,
    minOrder: 4000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    logo: 'AR',
    address: 'Boulevard François Mitterrand, Riviera Golf, Cocody',
    specialties: ['Carpe braisée entière', 'Sole grillée aux épices kankankan', 'Cocktail Ananas Gingembre'],
    isFeatured: true,
    dishes: [
      {
        id: 'd-51',
        name: 'Carpe Lagune Braisée XXL (Pour 2)',
        description: 'Carpe fraîche marinée 12h, grillée sur charbon de bois, servie avec double attiéké, alloco et sauce tomate pimentée.',
        price: 8500,
        category: 'Poissons',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-52',
        name: 'Travers de Porc Laqués au Miel de Korhogo',
        description: 'Travers marinés au miel sauvage du Nord de la Côte d’Ivoire et gingembre frais.',
        price: 5900,
        category: 'Grillades',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-6',
    name: 'Noura Saveurs Libanaises',
    tagline: 'Chawarmas au couteau, falafels dorés & houmous velouté',
    neighborhood: 'Zone 3 / Liaison Express',
    zone: 'Zone 3',
    cuisine: 'Burgers & Street',
    rating: 4.8,
    reviewCount: 310,
    deliveryTimeMin: 30,
    deliveryTimeMax: 40,
    deliveryFee: 1500,
    minOrder: 3500,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=80',
    logo: 'NS',
    address: 'Rue des Brasseurs, Zone 3 / Liaison express Cocody',
    specialties: ['Chawarma Poulet mariné', 'Assiette Mezzé Mixte', 'Sandwich Falafel chaud'],
    isFeatured: false,
    dishes: [
      {
        id: 'd-61',
        name: 'Plateau Mezzé Libanais Complet',
        description: 'Houmous à l’huile d’olive d’Orient, moutabal d’aubergines grillées, taboulé persillé, 4 falafels et pains pita chauds.',
        price: 5800,
        category: 'Mezzés',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-62',
        name: 'Duo Chawarmas Poulet & Frites',
        description: 'Deux chawarmas généreux, crème d’ail toum traditionnelle, cornichons libanais et frites chaudes.',
        price: 4500,
        category: 'Street Food',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-7',
    name: 'Green & Fresh Cocody',
    tagline: 'Salades généreuses, bowls tièdes & pressages de fruits de saison',
    neighborhood: 'Cocody Cité des Cadres',
    zone: 'Cocody Centre',
    cuisine: 'Healthy & Jus locaux',
    rating: 4.9,
    reviewCount: 164,
    deliveryTimeMin: 20,
    deliveryTimeMax: 30,
    deliveryFee: 800,
    minOrder: 2500,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    logo: 'GF',
    address: 'Rue des Ambassades, Cocody Centre',
    specialties: ['Abidjan Protein Bowl', 'Salade Mangue Crevettes', 'Jus Gingembre Citron Pur'],
    isFeatured: false,
    dishes: [
      {
        id: 'd-71',
        name: 'The Cocody Superfood Bowl',
        description: 'Quinoa bio, avocat de Bingerville, poulet grillé au thym, maïs grillé, fèves et vinaigrette mangue-passion.',
        price: 4800,
        category: 'Bowls',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'd-72',
        name: 'Salade Fraîcheur Avocat & Crevettes de Sassandra',
        description: 'Crevettes sautées, dés d’avocat mûr, pamplemousse d’Adzopé et mesclun croquant.',
        price: 5200,
        category: 'Salades',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'rest-8',
    name: 'Saveurs du Sahel & Thiéboudienne',
    tagline: 'Tchep rouge au mérou authentique, Yassa au poulet fumé',
    neighborhood: 'Angré Château',
    zone: 'Angré',
    cuisine: 'Africain Moderne',
    rating: 4.8,
    reviewCount: 198,
    deliveryTimeMin: 25,
    deliveryTimeMax: 35,
    deliveryFee: 900,
    minOrder: 3000,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
    logo: 'SS',
    address: 'Carrefour Château, Angré, Cocody',
    specialties: ['Tchep Royal au Mérou', 'Poulet Yassa caramélisé', 'Alloco aux oignons'],
    isFeatured: false,
    dishes: [
      {
        id: 'd-81',
        name: 'Tchep Penda Sénégalais au Mérou Royal',
        description: 'Riz rouge cuit dans le bouillon parfumé au poisson, quartier de chou, carottes, manioc et mérou braisé.',
        price: 5000,
        category: 'Plats',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export const COVERAGE_ZONES: CoverageZone[] = [
  {
    id: 'zone-2p',
    name: 'Deux Plateaux & Vallons',
    description: 'Vallons, Aghien, Ena, Rue des Jardins, Las Palmas, Sainte Cécile, 7e Tranche',
    deliveryTime: '20 - 30 min',
    deliveryFee: 800,
    status: 'active',
    partnerCount: 42,
    popularSpots: ['Rue des Jardins', 'Carrefour Duncan', 'Vallons Chic', 'Cité Cadres'],
    coordinates: { x: 38, y: 35 }
  },
  {
    id: 'zone-angre',
    name: 'Angré & Extensions',
    description: '8e Tranche, Château d’Eau, Djibi, Petroci, Nouveau CHU d’Angré, Terminus 81/82',
    deliveryTime: '25 - 35 min',
    deliveryFee: 1000,
    status: 'active',
    partnerCount: 36,
    popularSpots: ['Angré 8e Tranche', 'Carrefour Château', 'Cité Soleil 3', 'Angré Mahou'],
    coordinates: { x: 55, y: 22 }
  },
  {
    id: 'zone-cocody-centre',
    name: 'Cocody Centre, Danga & Ambassades',
    description: 'Cité des Arts, Saint-Jean, Danga, Lycée Classique, Université FHB, CHU Cocody',
    deliveryTime: '25 - 35 min',
    deliveryFee: 1000,
    status: 'active',
    partnerCount: 29,
    popularSpots: ['Boulevard de France', 'Église St-Jean', 'Hôtel Ivoire Sofitel', 'Danga Bas'],
    coordinates: { x: 32, y: 55 }
  },
  {
    id: 'zone-riviera',
    name: 'Riviera (1 à 4) & Palmeraie',
    description: 'Riviera 2, Riviera 3, Riviera Golf, Palmeraie, Bonoumin, Attoban',
    deliveryTime: '30 - 40 min',
    deliveryFee: 1200,
    status: 'active',
    partnerCount: 31,
    popularSpots: ['Riviera Golf', 'Carrefour Faya', 'Palmeraie Rond-Point', 'Attoban Cité'],
    coordinates: { x: 68, y: 48 }
  },
  {
    id: 'zone-zone3',
    name: 'Zone 3 & Marcory (Liaison Express)',
    description: 'Rue des Brasseurs, Boulevard VGE, Biétry liaison rapide via Pont HKB',
    deliveryTime: '30 - 40 min',
    deliveryFee: 1500,
    status: 'active',
    partnerCount: 18,
    popularSpots: ['Boulevard de Marseille', 'Rue du Canal', 'Carrefour Solibra'],
    coordinates: { x: 42, y: 78 }
  },
  {
    id: 'zone-yopougon',
    name: 'Yopougon, Plateau & Abobo',
    description: 'Phase d’extension suivante prévue pour 2027 suite au succès du hub Cocody',
    deliveryTime: 'Bientôt disponible',
    deliveryFee: 0,
    status: 'coming_soon',
    partnerCount: 0,
    popularSpots: ['Extension programmée'],
    coordinates: { x: 18, y: 42 }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marc Amani',
    role: 'Co-fondateur Fintech & Consultant',
    neighborhood: 'Deux Plateaux Vallons',
    personaType: 'Jeune Pro',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Woudy a complètement changé mes midis au bureau aux Vallons. Avant, les livreurs se perdaient ou mettaient 1h15 avec les embouteillages. Avec Woudy, mon poulet braisé arrive chaud en 26 minutes chrono.',
    favoriteOrder: 'Chez Ambroise – Demi-poulet & Alloco'
  },
  {
    id: 'test-2',
    name: 'Sarah & Yves Konan',
    role: 'Cadres supérieurs & Parents de 2 enfants',
    neighborhood: 'Angré 8e Tranche',
    personaType: 'Famille',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Le vendredi soir après le travail, pas envie de cuisiner. L’emballage hermétique de Woudy est irréprochable : les sauces ne coulent jamais dans le sac et les frites restent croustillantes. Les enfants adorent.',
    favoriteOrder: 'Burger & Co + Pizza Bella Cocody'
  },
  {
    id: 'test-3',
    name: 'Aïcha Diallo',
    role: 'Étudiante en Master à l’Université FHB',
    neighborhood: 'Cocody Cité des Arts',
    personaType: 'Étudiant',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'La commande minimum est super basse comparée aux autres applications internationales. En tant qu’étudiante avec un budget calculé, pouvoir commander un bon plat copieux à 3 000 FCFA sans frais cachés, c’est le top.',
    favoriteOrder: 'Attiéké Garba Chic & Jus de Bissap'
  },
  {
    id: 'test-4',
    name: 'Chef Christian B.',
    role: 'Propriétaire & Chef cuisinier partenaire',
    neighborhood: 'Cocody Danga',
    personaType: 'Partenaire',
    avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'En tant que restaurateur, confier nos plats à des coursiers était souvent un calvaire. L’équipe Woudy forme ses livreurs avec un sac isotherme thermique pro. Nos clients nous félicitent pour la chaleur des assiettes !',
    favoriteOrder: 'Partenaire Certifié Woudy depuis 2025'
  }
];

export const PRP_SPECS = {
  version: '1.0',
  date: 'Septembre 2026',
  team: [
    { role: 'Product Manager / Owner', name: 'Jean-Luc' },
    { role: 'DevOps / Infrastructure', name: 'Doucoure Ibrahim (Aquilas Dev)' },
    { role: 'Designer / UI-UX', name: 'Studio Woudy Design' },
    { role: 'Développeur Frontend', name: 'React / Vite Specialist' },
    { role: 'Content Manager', name: 'Content & SEO Abidjan' }
  ],
  kpis: [
    { metric: 'Visiteurs uniques / mois', target: '5 000 - 10 000', period: 'Mois 1-3' },
    { metric: 'Taux de conversion global', target: '3 - 5 %', period: 'Continu' },
    { metric: 'Inscriptions application mobile', target: '150 - 500 / mois', period: 'Mois 1-3' },
    { metric: 'Souscrits newsletter Cocody', target: '1 000+', period: 'Mois 3' },
    { metric: 'Taux de rebond (Bounce rate)', target: '< 40 %', period: 'Continu' }
  ],
  calendar: [
    { phase: '1. Découverte', tasks: 'Brief client, research Cocody, wireframes', duration: '1-2 semaines' },
    { phase: '2. Design', tasks: 'Design Figma, composants, design system Woudy', duration: '2-3 semaines' },
    { phase: '3. Développement', tasks: 'Frontend React, carte interactive, intégrations', duration: '3-4 semaines' },
    { phase: '4. Contenu', tasks: 'Shooting restaurants Cocody, rédaction, assets', duration: '2-3 semaines' },
    { phase: '5. Test & QA', tasks: 'Testing mobile, bugfixes, tests temps de livraison', duration: '1-2 semaines' },
    { phase: '6. Lancement', tasks: 'Déploiement public, campagne lancement Cocody', duration: '1 semaine' }
  ],
  budget: [
    { item: 'Design (Figma & UI System)', cost: '$2,000 - $3,500' },
    { item: 'Développement (React / Node / APIs)', cost: '$5,000 - $8,000' },
    { item: 'Infrastructure & Hébergement annuel', cost: '$500 - $1,000' },
    { item: 'Contenu (Photos pros, rédaction SEO)', cost: '$1,000 - $2,000' },
    { item: 'Testing & Contrôle Qualité', cost: '$500 - $1,000' }
  ]
};
