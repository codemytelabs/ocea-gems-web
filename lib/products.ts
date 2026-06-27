export interface Product {
  id: string
  name: string
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'loose-gems'
  gemstone: 'sapphire' | 'ruby' | 'diamond' | 'emerald' | 'pearl' | 'alexandrite'
  metal: 'white-gold' | 'yellow-gold' | 'rose-gold'
  price: number
  originalPrice?: number
  badge?: 'new' | 'sale' | 'certified'
  rating: number
  reviews: number
  specs: string
  isCertified: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Blue Sapphire Solitaire Ring',
    category: 'rings',
    gemstone: 'sapphire',
    metal: 'white-gold',
    price: 2450,
    originalPrice: 2800,
    badge: 'sale',
    rating: 5,
    reviews: 12,
    specs: '2.5ct | 18K Gold',
    isCertified: true,
  },
  {
    id: '2',
    name: 'Burmese Ruby Pendant',
    category: 'necklaces',
    gemstone: 'ruby',
    metal: 'yellow-gold',
    price: 3200,
    badge: 'certified',
    rating: 5,
    reviews: 8,
    specs: '1.8ct | 18K Gold',
    isCertified: true,
  },
  {
    id: '3',
    name: 'Diamond Stud Earrings',
    category: 'earrings',
    gemstone: 'diamond',
    metal: 'white-gold',
    price: 1850,
    badge: 'new',
    rating: 4,
    reviews: 5,
    specs: '0.5ct Each | 18K Gold',
    isCertified: false,
  },
  {
    id: '4',
    name: 'Emerald Tennis Bracelet',
    category: 'bracelets',
    gemstone: 'emerald',
    metal: 'rose-gold',
    price: 2650,
    rating: 5,
    reviews: 14,
    specs: '5.2ct Total | 18K Gold',
    isCertified: true,
  },
  {
    id: '5',
    name: 'Ceylon Sapphire Loose Stone',
    category: 'loose-gems',
    gemstone: 'sapphire',
    metal: 'white-gold',
    price: 1200,
    rating: 5,
    reviews: 6,
    specs: '1.5ct | GIA Certified',
    isCertified: true,
  },
  {
    id: '6',
    name: 'Pearl Drop Earrings',
    category: 'earrings',
    gemstone: 'pearl',
    metal: 'yellow-gold',
    price: 890,
    badge: 'new',
    rating: 4,
    reviews: 9,
    specs: '8mm Pearls | 18K Gold',
    isCertified: false,
  },
  {
    id: '7',
    name: 'Sapphire & Diamond Ring',
    category: 'rings',
    gemstone: 'sapphire',
    metal: 'white-gold',
    price: 3450,
    rating: 5,
    reviews: 11,
    specs: '3.2ct Sapphire | 18K Gold',
    isCertified: true,
  },
  {
    id: '8',
    name: 'Alexandrite Cocktail Ring',
    category: 'rings',
    gemstone: 'alexandrite',
    metal: 'rose-gold',
    price: 1650,
    badge: 'new',
    rating: 4,
    reviews: 4,
    specs: '2.1ct | 18K Gold',
    isCertified: false,
  },
  {
    id: '9',
    name: 'Ruby Halo Necklace',
    category: 'necklaces',
    gemstone: 'ruby',
    metal: 'white-gold',
    price: 2900,
    rating: 5,
    reviews: 7,
    specs: '1.5ct Ruby | 18K Gold',
    isCertified: true,
  },
]
