// ─────────────────────────────────────────────────────────────
// Graphic Design Portfolio Data
// ─────────────────────────────────────────────────────────────

import neonImage from '../assets/NEON.jpg';
import iceCreamImage from '../assets/ice cream.jpg';
import eventImage from '../assets/event 1.png';
import meNemoImage from '../assets/me & nemo.png';
import engagement3 from '../assets/engagement3.jpg';


// ─────────────────────────────────────────────────────────────
// Design Categories
// ─────────────────────────────────────────────────────────────

export const DESIGN_CATEGORIES = [
  'All',
  'Branding',
  'Social Media',
  'Posters',
  'UI Design',
  'Marketing',
  'Creative Design',
];


// ─────────────────────────────────────────────────────────────
// Graphic Design Projects
// ─────────────────────────────────────────────────────────────

export const GRAPHIC_DESIGN_PROJECTS = [
  {
    id: 1,

    title: 'Brand Identity',
    category: 'Branding',

    description:
      'A complete visual identity system built around a clean, modern wordmark and a flexible color palette.',

    longDescription:
      'A full brand identity package covering logo design, color system, and typography guidelines. The mark was designed to work across digital and print, with a modular structure that scales from a favicon to large signage while staying recognizable.',

    tools: [
      'Adobe Photoshop',
      'Canva',
      'Figma',
    ],

    image: neonImage,

    aspect: 'aspect-[3/4]',

    link: '#',
  },

  {
    id: 2,

    title: 'Social Media Campaign',
    category: 'Social Media',

    description:
      'A cohesive set of feed and story templates designed to keep a brand consistent across every post.',

    longDescription:
      'A month-long content campaign spanning feed posts, stories, and carousels. Each template follows a shared grid and color logic so the brand stays instantly recognizable no matter who is scrolling past it.',

    tools: [
      'Adobe Photoshop',
      'Canva',
      'Figma',
    ],

    image: engagement3,

    aspect: 'aspect-square',

    link: '#',
  },

  {
    id: 3,

    title: 'Creative Poster',
    category: 'Posters',

    description:
      'A bold event poster built around strong typography and a striking color contrast.',

    longDescription:
      'A print-ready poster designed for a live event, built to grab attention from across a room. The layout leans on oversized type and a limited color palette to keep the hierarchy clear at any distance.',

    tools: [
      'Adobe Photoshop',
      'Canva',
      'Figma',
    ],

    image: eventImage,

    aspect: 'aspect-[2/3]',

    link: '#',
  },

  {
    id: 4,

    title: 'Marketing Campaign',
    category: 'Marketing',

    description:
      'A multi-format marketing kit including banners, flyers, and email headers for a product launch.',

    longDescription:
      'A cross-channel marketing kit built for a product launch — web banners, print flyers, and email headers all sharing one visual language so the message stays consistent from inbox to storefront.',

    tools: [
      'Canva',
      'Adobe Illustrator',
      'Adobe Photoshop',
    ],

    image: iceCreamImage,

    aspect: 'aspect-[4/3]',

    link: '#',
  },

  {
    id: 5,

    title: 'Creative Artwork',
    category: 'Creative Design',

    description:
      'An experimental digital artwork exploring color, texture, and abstract composition.',

    longDescription:
      'A personal, experimental piece created to explore composition and color outside the constraints of a client brief — a space to test new techniques that later feed back into client work.',

    tools: [
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],

    image: meNemoImage,

    aspect: 'aspect-[3/4]',

    link: '#',
  },
];