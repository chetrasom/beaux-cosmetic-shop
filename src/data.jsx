import { nanoid } from "nanoid";

import { MdOutlineLocalShipping } from "react-icons/md";
import { ImLoop } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";

import heroSlider1 from './assets/images/hero-1.jpg';
import heroSlider2 from './assets/images/hero-2.jpg';
import heroSlider3 from './assets/images/hero-3.jpg';

import collection1 from './assets/images/category-1.jpg';
import collection2 from './assets/images/category-2.jpg';
import collection3 from './assets/images/category-3.jpg';

import Product1Front from './assets/images/products-type/product-1-front.jpg';
import Product1Back from './assets/images/products-type/product-1-back.jpg';

import aboutIcon1 from './assets/images/icon1.png';
import aboutIcon2 from './assets/images/icon2.png';
import aboutIcon3 from './assets/images/icon3.png';
import aboutIcon4 from './assets/images/icon1.png';

import team1 from './assets/images/team-1.jpg';
import team2 from './assets/images/team-2.jpg';
import team3 from './assets/images/team-3.jpg';
import team4 from './assets/images/team-4.jpg';

export const menuData = [
    { id: nanoid(), name: 'home', url: '/' },
    { id: nanoid(), name: 'about', url: '/about' },
    { id: nanoid(), name: 'shop', url: '/shop' },
    { id: nanoid(), name: 'contact', url: '/contact' },
    // { id: nanoid(), name: '404', url: '/404' },
];

export const aboutData = [
    { 
        id: nanoid(),
        icon: aboutIcon1,
        number: '1,250K',
        title: 'Cosmetic Creams',
        detail: 'Semper viverra nam libero justo laoreet sit amet cursus sit. Ut consequat semper viverra nam. Eu turpis egestas. Vulputate ispsum sed.',
    },
    { 
        id: nanoid(),
        icon: aboutIcon2,
        number: '1,100K',
        title: 'Facial Creams',
        detail: 'Elementum curabitur vitae nunc sed velit. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae sit amet.',
    },
    { 
        id: nanoid(),
        icon: aboutIcon3,
        number: '1,750K',
        title: 'Lipsticks',
        detail: 'Imperdiet nulla malesuada pellentesque elit. Ac turpis egestas maecenas pharetra convallis posuere morbi sit eouleo.',
    },
    { 
        id: nanoid(),
        icon: aboutIcon4,
        number: '1,200K',
        title: 'Face Colors',
        detail: 'Sit amet consectetur adipiscing elit duis tristique sollicitudin. Lobortis mattis aliquam faucibus purus in massa tempor nec.',
    },
];

export const teamMembers = [
    {
        id: nanoid(),
        image: team1,
        name: 'Jenny',
        position: 'CEO',
    },
    {
        id: nanoid(),
        image: team2,
        name: 'Rose',
        position: 'Marketing Manager',
    },
    {
        id: nanoid(),
        image: team3,
        name: 'Lisa',
        position: 'Quality Manager',
    },
    {
        id: nanoid(),
        image: team4,
        name: 'Jisoo',
        position: 'Customer support',
    },
];

export const heroData = [
    { 
        id: nanoid(),
        image: heroSlider1,
        subTitle: 'Gentle for winter',
        title: 'Skin Lightening',
        description: 'Deal with hyperpigmentation, Beaux skin lightening products are formulated to even out skin tone and restore the skin’s natural color get even, clear and radiant skin.',
    },
    { 
        id: nanoid(),
        image: heroSlider2,
        subTitle: 'Look Gorgeous',
        title: 'Natural Glow',
        description: 'Beaux products protect, moisturize, and lubricate your skin. It smartly nourish your skin with lotions, day creams, night creams, tinted moisturizers, and more.',
    },
    { 
        id: nanoid(),
        image: heroSlider3,
        subTitle: '20% Discount for all products',
        title: 'A Perfect and Incredible Cosmetics!',
        description: 'Choose our herbal beauty cosmetic products to look good which last all day, get smooth gentle skin, natural glow, silky soft hair.',
    },
];

export const collectionsData = [
    {
        id: nanoid(),
        image: collection1,
        title: 'new in',
        url: '/shop',
    },
    {
        id: nanoid(),
        image: collection2,
        title: 'cosmetic',
        url: '/shop',
    },
    {
        id: nanoid(),
        image: collection3,
        title: 'skin care',
        url: '/shop',
    },
];

export const productsTypeData = [
    {
        id: nanoid(),
        title: "Luke Moisturizing",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 120,
        discountPercentage: 15.66,
        rating: 5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: Product1Front,
        images: [
            Product1Back,
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Laura Face Wash Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 400,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: 'https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-28.jpg?v=1580215508&width=1066',
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-22_9a34d66d-00c0-4c1f-bb77-fa36a90c29f2.jpg?v=1581313489&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Nyka Face Creams",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-21.jpg?v=1580215410&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-23_0013e4d7-beed-4888-a722-aeef39889d27.jpg?v=1581314051&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Fabell Body Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-22.jpg?v=1580211344&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-43_7f819878-1dee-4d97-b711-3ea5b3c8a034.jpg?v=1581313105&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Masa Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/1_435ac920-469b-44e1-adcb-d312e1451379.jpg?v=1580205341&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-53_1fdf93af-a2ef-423a-97e9-1deb373024d5.jpg?v=1581060942&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Maven Dark Circle",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-36.jpg?v=1580206944&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-25_39fb82c0-7c0f-4eab-9992-da7b5c6c2d85.jpg?v=1581060993&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Leila Face Creams",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-23.jpg?v=1580203807&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-59_3f548a90-835c-4840-91a4-ff244de05557.jpg?v=1581060846&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Prime Moisturizer Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-4.jpg?v=1580208580&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-57.jpg?v=1581314400&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Frag Dark Spot Cream",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-34.jpg?v=1580202420&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-45.jpg?v=1581313201&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Elite Face Wash Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-59.jpg?v=1580201636&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-60.jpg?v=1581312598&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Royal Beauty Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/1_978a721e-3e7e-42db-8d2a-15867218d774.jpg?v=1580208224&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-38.jpg?v=1581314536&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "New Age Miracle",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 40,
        discountPercentage: 15.66,
        rating: 4.5,
        stock: 12,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-37.jpg?v=1612854093&width=1066",
        images: [
            "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-35_2814dcb1-f6ff-4cc1-9649-9661d98d5fef.jpg?v=1612854093&width=1066",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
];

export const bestSellersData = [
    {
        id: nanoid(),
        title: "Amruth Face Wash",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-60_7d10b4d8-3687-48c0-879d-db8ec8b590fc.jpg?v=1581314624&width=533",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Ale Vitamin E Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-14.jpg?v=1580295268&width=1066",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Leila Face Creams",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-23.jpg?v=1580203807&width=1066",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Barbi Moisturizer",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-25.jpg?v=1580201175&width=1066",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Prime Beauty Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/1_bf8c4fca-6fb4-4124-a01e-bd9b68637268.jpg?v=1580207878&width=533",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Prime Moisturizer Lotion",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-4.jpg?v=1580208580&width=1066",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Ale Acne Cream",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-56.jpg?v=1616999281&width=1066",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
    {
        id: nanoid(),
        title: "Nyka Face Creams",
        description: "Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.",
        price: 168,
        discountPercentage: 10,
        rating: 5,
        stock: 8,
        // brand: "",
        // category: "",
        thumbnail: "https://beaux-theme.myshopify.com/cdn/shop/products/shop-new-21.jpg?v=1580215410&width=533",
        images: [
            "",
            "https://i.dummyjson.com/data/products/12/2.jpg",
            "https://i.dummyjson.com/data/products/12/3.png",
            "https://i.dummyjson.com/data/products/12/4.jpg",
            "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
    },
];

export const whyData = [
    {
        id: nanoid(),
        image: 'https://codewithsadee.github.io/glowing/assets/images/feature-1.jpg',
        title: 'Guaranteed PURE',
        description: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.',
    },
    {
        id: nanoid(),
        image: 'https://codewithsadee.github.io/glowing/assets/images/feature-2.jpg',
        title: 'Completely Cruelty-Free',
        description: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.',
    },
    {
        id: nanoid(),
        image: 'https://codewithsadee.github.io/glowing/assets/images/feature-3.jpg',
        title: 'Ingredient Sourcing',
        description: 'All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.',
    },
];

export const servicesData = [
    {
        id: nanoid(),
        icon: <MdOutlineLocalShipping />,
        title: 'Free Shipping',
        detail: 'Free Shipping for orders over $130',
    },
    {
        id: nanoid(),
        icon: <ImLoop />,
        title: 'Returns',
        detail: 'Within 30 days for an exchange.',
    },
    {
        id: nanoid(),
        icon: <BiSupport />,
        title: 'Online Support',
        detail: '24 hours a day, 7 days a week',
    },
    {
        id: nanoid(),
        icon: <BsCreditCard />,
        title: 'Flexible Payment',
        detail: 'Pay with Multiple Credit Cards',
    },
];

export const brandsData = [
    { 
        id: nanoid(), 
        image: 'https://beaux-theme.myshopify.com/cdn/shop/files/client-5_9b8beb53-1b37-40da-8fed-23eac89a7564.png?v=1614298697', 
    },
    { 
        id: nanoid(), 
        image: 'https://beaux-theme.myshopify.com/cdn/shop/files/client-3_092fa64d-f991-430c-aa25-0fb85dc7eb88.png?v=1614298697', 
    },
    { 
        id: nanoid(), 
        image: 'https://beaux-theme.myshopify.com/cdn/shop/files/client-6_8d71261b-bebe-4c0d-b752-359fed2f4c45.png?v=1614298697', 
    },
    { 
        id: nanoid(), 
        image: 'https://beaux-theme.myshopify.com/cdn/shop/files/client-2_a92a5a88-0282-4ce1-bda9-59f95d335f36.png?v=1614298697', 
    },
    { 
        id: nanoid(), 
        image: 'https://beaux-theme.myshopify.com/cdn/shop/files/client-1_b6fbaa1b-7677-450d-8c88-07d00dff28a1.png?v=1614298697', 
    },
    { 
        id: nanoid(), 
        image: 'https://beaux-theme.myshopify.com/cdn/shop/files/client-4_fcf1c06e-c655-4be4-889c-382a44608ed0.png?v=1614298697', 
    },
    { 
        id: nanoid(), 
        image: 'https://beaux-theme.myshopify.com/cdn/shop/files/client-2_a92a5a88-0282-4ce1-bda9-59f95d335f36.png?v=1614298697', 
    },
];