export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'burgers' | 'steaks' | 'sides' | 'drinks' | 'desserts';
  description: string;
  ingredients: string[];
  tags: string[];
  calories?: number;
  pairing?: string;
  image?: string;
  isChefSignature?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  // Gourmet Burgers
  {
    id: 'b1',
    name: 'The Sizzling Skillet Reserve',
    price: 225,
    category: 'burgers',
    description: 'Our crown jewel. A 250g house-ground Wagyu and Angus patty, seared over open flames, topped with 18-month aged cheddar, black truffle aioli, and caramelized red onion marmalade.',
    ingredients: ['250g Wagyu-Angus Blend', '18-Month Aged Cheddar', 'Black Truffle Aioli', 'Red Onion Marmalade', 'Toasted Artisanal Brioche'],
    tags: ['Chef Signature', 'High-End'],
    calories: 980,
    pairing: 'Rupert & Rothschild Classique (Red Blend)',
    image: '/images/hero-burger.jpg',
    isChefSignature: true
  },
  {
    id: 'b2',
    name: 'The Bone Marrow & Blue',
    price: 195,
    category: 'burgers',
    description: 'Rich, indulgent, and deeply savoury. Flame-grilled pure beef patty crowned with roasted bone marrow butter, creamy Gorgonzola dolce, and crispy smoked bacon strips.',
    ingredients: ['Flame-Grilled Beef Patty', 'Roasted Bone Marrow Butter', 'Gorgonzola Dolce', 'Smoked Bacon', 'Wild Rocket'],
    tags: ['Rich & Savoury'],
    calories: 1120,
    pairing: 'Meerlust Rubicon'
  },
  {
    id: 'b3',
    name: 'The Pretoria Pitmaster',
    price: 180,
    category: 'burgers',
    description: 'A tribute to local braai culture. Thick beef patty basted in our signature dark stout BBQ sauce, topped with 12-hour smoked beef brisket, fiery jalapeño slaw, and smoked provolone.',
    ingredients: ['Beef Patty', '12-Hour Smoked Brisket', 'Dark Stout BBQ Sauce', 'Jalapeño Slaw', 'Smoked Provolone'],
    tags: ['Local Favour', 'Spicy'],
    calories: 1050,
    pairing: 'Devil\'s Peak King\'s Blockhouse IPA'
  },
  {
    id: 'b4',
    name: 'The Truffled Portobello (V)',
    price: 165,
    category: 'burgers',
    description: 'A masterpiece for plant-lovers. Whole marinated Portobello mushroom fire-roasted with garlic and thyme, layered with grilled halloumi, avocado garden crèma, and crisp baby spinach.',
    ingredients: ['Fire-Roasted Portobello', 'Grilled Halloumi', 'Avocado Crèma', 'Garlic & Thyme', 'Baby Spinach'],
    tags: ['Vegetarian', 'Lighter Choice'],
    calories: 740,
    pairing: 'Hamilton Russell Chardonnay'
  },

  // Premium Steaks
  {
    id: 's1',
    name: '28-Day Dry-Aged Tomahawk (850g)',
    price: 680,
    category: 'steaks',
    description: 'The ultimate carnivore experience. On-the-bone ribeye dry-aged in our custom Himalayan salt room for maximum tenderness and intense umami depth. Served with café de Paris butter.',
    ingredients: ['850g Bone-in Ribeye', 'Himalayan Salt Dry-Aged', 'Café de Paris Compound Butter', 'Roasted Garlic Bulb'],
    tags: ['Chef Signature', 'Great for Sharing'],
    calories: 1650,
    pairing: 'Kanonkop Paul Sauer',
    image: '/images/premium-steak.jpg',
    isChefSignature: true
  },
  {
    id: 's2',
    name: 'Karoo Wagyu Ribeye (300g)',
    price: 440,
    category: 'steaks',
    description: 'Exceptional marbling (MS 7+) delivering a melt-in-your-mouth texture. Seared at 450°C on our wood-fired Josper grill to lock in the absolute peak of juiciness.',
    ingredients: ['300g Local Karoo Wagyu', 'Smoked Sea Salt Flakes', 'Fresh Rosemary Baste'],
    tags: ['Melt-in-Mouth', 'Premium Cut'],
    calories: 890,
    pairing: 'Rust en Vrede Estate Vineyard Syrah'
  },
  {
    id: 's3',
    name: 'Grass-Fed Chalmar Fillet (250g)',
    price: 290,
    category: 'steaks',
    description: 'The most tender cut available, sourced from sustainable South African pastures. Served with your choice of our wild Madagascar peppercorn reduction or rich Béarnaise.',
    ingredients: ['250g Chalmar Beef Fillet', 'Madagascar Peppercorn Reduction', 'Micro-Herb Salad'],
    tags: ['Lean & Tender'],
    calories: 610,
    pairing: 'Bouchard Finlayson Galpin Peak Pinot Noir'
  },
  {
    id: 's4',
    name: 'The Skillet Picanha Rump (350g)',
    price: 260,
    category: 'steaks',
    description: 'Traditional Brazilian-style cut with its signature fat cap intact, flame-kissed and sliced table-side with coarse sea salt and our zesty house-made chimichurri verde.',
    ingredients: ['350g Picanha Rump', 'Coarse Sea Salt', 'Authentic Chimichurri Verde'],
    tags: ['Intense Flavour'],
    calories: 820,
    pairing: 'Waterford Estate Cabernet Sauvignon'
  },

  // Signature Sides
  {
    id: 'sd1',
    name: 'Truffle & Parmesan Hand-Cut Fries',
    price: 75,
    category: 'sides',
    description: 'Thick-cut Agria potatoes double-fried in premium duck fat, tossed with white truffle oil, aged Parmigiano-Reggiano, and fresh flat-leaf parsley.',
    ingredients: ['Agria Potatoes', 'Duck Fat', 'White Truffle Oil', 'Parmigiano-Reggiano'],
    tags: ['Highly Recommended']
  },
  {
    id: 'sd2',
    name: 'Charred Broccolini & Toasted Almonds',
    price: 85,
    category: 'sides',
    description: 'Tender-stem broccolini blistered over the open coals, finished with a lemon-herb emulsion, flaked sea salt, and toasted Marcona almonds.',
    ingredients: ['Tender-Stem Broccolini', 'Lemon-Herb Emulsion', 'Marcona Almonds'],
    tags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'sd3',
    name: 'Smoked Gouda Mac & Cheese',
    price: 95,
    category: 'sides',
    description: 'Al dente lumacce pasta folded into a velvety four-cheese sauce featuring local smoked Gouda and mature cheddar, baked with a crispy herb-panko crust.',
    ingredients: ['Lumacce Pasta', 'Smoked Gouda', 'Mature Cheddar', 'Herb Panko'],
    tags: ['Comfort Food']
  },
  {
    id: 'sd4',
    name: 'Creamed Spinach with Grana Padano',
    price: 70,
    category: 'sides',
    description: 'Silky slow-cooked baby spinach infused with a hint of freshly grated nutmeg, double thick cream, and melted Grana Padano cheese.',
    ingredients: ['Baby Spinach', 'Double Thick Cream', 'Grana Padano', 'Nutmeg'],
    tags: ['Classic Pairing']
  },

  // Handcrafted Drinks
  {
    id: 'dr1',
    name: 'The Waterkloof Old Fashioned',
    price: 135,
    category: 'drinks',
    description: 'Our signature post-dinner libation. Premium small-batch bourbon infused with heavily charred oak, aromatic Angostura bitters, pure maple, and served over a hand-stamped ice sphere with a flamed orange peel.',
    ingredients: ['Small-Batch Bourbon', 'Charred Oak Infusion', 'Angostura Bitters', 'Pure Maple'],
    tags: ['Signature Cocktail']
  },
  {
    id: 'dr2',
    name: 'Smoked Rosemary Gin & Tonic',
    price: 115,
    category: 'drinks',
    description: 'Local artisanal botanical gin paired with premium bespoke tonic water, fresh grapefruit slices, and a theatrical smoking sprig of rosemary.',
    ingredients: ['Artisanal Botanical Gin', 'Premium Tonic', 'Grapefruit', 'Smoked Rosemary'],
    tags: ['Refreshing']
  },
  {
    id: 'dr3',
    name: 'Kanonkop Kadette Pinotage (Glass)',
    price: 95,
    category: 'drinks',
    description: 'South Africa’s signature grape at its finest. Expressive notes of red currants, mocha, and ripe black cherries. Pairs exquisitely with our flame-grilled burgers.',
    ingredients: ['100% Stellenbosch Pinotage'],
    tags: ['Sommelier Selection']
  },
  {
    id: 'dr4',
    name: 'Artisan Hibiscus & Berry Mocktail',
    price: 75,
    category: 'drinks',
    description: 'House-brewed organic hibiscus flower tea shaken with muddled mixed wild berries, fresh lime juice, and topped with sparkling club soda.',
    ingredients: ['Hibiscus Tea', 'Wild Berries', 'Fresh Lime', 'Sparkling Soda'],
    tags: ['Non-Alcoholic']
  },

  // Decadent Desserts
  {
    id: 'ds1',
    name: 'Deconstructed Dark Chocolate Fondant',
    price: 110,
    category: 'desserts',
    description: '70% Valrhona dark chocolate lava cake with a molten core, served alongside Madagascan vanilla bean gelato, gold-dusted honeycomb shards, and tart raspberry coulis.',
    ingredients: ['70% Valrhona Chocolate', 'Vanilla Bean Gelato', 'Honeycomb', 'Raspberry Coulis'],
    tags: ['Chef Signature'],
    isChefSignature: true
  },
  {
    id: 'ds2',
    name: 'Amarula & Salted Caramel Malva Pudding',
    price: 95,
    category: 'desserts',
    description: 'A traditional South African favourite elevated to fine-dining standards. Warm, deeply caramelized apricot sponge drenched in a rich Amarula cream sauce and topped with toasted pecans.',
    ingredients: ['Caramelized Apricot Sponge', 'Amarula Cream Sauce', 'Salted Caramel', 'Toasted Pecans'],
    tags: ['Local Classic']
  },
  {
    id: 'ds3',
    name: 'Burnt Basque Cheesecake',
    price: 105,
    category: 'desserts',
    description: 'Baked at high heat to achieve a beautifully rich, dark caramelized exterior while maintaining a perfectly creamy, custardy interior. Served with a seasonal citrus compote.',
    ingredients: ['Cream Cheese', 'Madagascan Vanilla', 'Seasonal Citrus Compote'],
    tags: ['Velvety']
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Masterpieces' },
  { id: 'burgers', name: 'Gourmet Burgers' },
  { id: 'steaks', name: 'Premium Steaks' },
  { id: 'sides', name: 'Signature Sides' },
  { id: 'drinks', name: 'Fine Wines & Cocktails' },
  { id: 'desserts', name: 'Decadent Desserts' }
];
