
import { Product, Solution } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'zaptec-go',
    name: 'Zaptec Go',
    price: 7862,
    description: 'Världens minsta 22kW laddare. Prisbelönt skandinavisk design som kombinerar kraft med minimalism.',
    category: 'laddbox',
    features: ['22kW effekt', 'Norsk design', 'Väderbeständig (IP54)'],
    image: 'https://cleancharge.se/wp-content/uploads/Zaptec-go-4.png'
  },
  {
    id: 'zaptec-pro',
    name: 'Zaptec Pro',
    price: 0,
    description: 'Den ultimata lösningen för större anläggningar och BRF. Levererar intelligent lastbalansering och 4G-stöd.',
    category: 'laddbox',
    features: ['Integrerad 4G', 'Fasbalansering', 'Skalbar design'],
    image: 'https://cleancharge.se/wp-content/uploads/Zaptec-pro-1-1.png'
  },
  {
    id: 'easee-charge-lite',
    name: 'Easee Charge Lite',
    price: 6995,
    description: 'Smart, kraftfull och säker. Easee Charge Lite är designad för enkelhet och passar alla bilar och elnät.',
    category: 'laddbox',
    features: ['Lokal kontroll', 'Helt automatiserad', 'Kompakt storlek'],
    image: 'https://easee.com/wp-content/uploads/2025/05/wave-wall.jpg'
  },
  {
    id: 'autel-dh480',
    name: 'Autel MaxiCharger DH480',
    price: 0,
    description: 'Fullt modulär 480 kW allt-i-ett-laddare. Ultrasnabb laddning med 98% drifttid, optimerad för publika nätverk och flottor.',
    category: 'snabbladdare',
    features: ['480 kW effekt', 'Modulär arkitektur', '98% Uptime'],
    image: '/autel-dh480-product.png'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    title: 'Ladda Privat',
    description: 'Smarta laddlösningar för hemmet. Vi installerar marknadens mest driftsäkra boxar för en enkel vardag.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200',
    link: '#/privat'
  },
  {
    title: 'Lönsam Laddning',
    description: 'Fokus på betallösningen. Vi hjälper företag att tjäna pengar på sina laddplatser med automatiserad debitering.',
    image: '/juice-YX-BmnafcJE-unsplash.jpg',
    link: '#/foretag'
  },
  {
    title: 'Publika Anläggningar',
    description: 'Vi tar hand om era publika laddstationer. Driftsäkerhet och service i världsklass för maximal tillgänglighet.',
    image: '/autel-dh480-lifestyle.jpg',
    link: '#/brf'
  }
];
