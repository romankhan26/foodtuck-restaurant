export interface MenuItems {
  itemId: number;
  itemHeading: string;
  description: string;
  calories: string;
  price: string;
}
interface MenuCategory {
  id: number;
  imageUrl: string;
  menuType: string; // Changed to camelCase
  menuItems: MenuItems[]; // Clearer pluralization
}
// const menuData: MenuCategory[] ;
export interface ProductCardInterface {
  id: number;
  imageUrl: string;
  priceNow: string;
  priceThen?: string;
  name: string;
}

export const foodProductCards: ProductCardInterface[] = [
  {
    id: 1,
    imageUrl: "/assets/img1.png",
    priceNow: "12.99",
    priceThen: "15.99",
    name: "Margherita Pizza",
  },
  {
    id: 2,
    imageUrl: "/assets/img2.png",
    priceNow: "8.99",
    priceThen: "10.99",
    name: "Classic Cheeseburger",
  },
  {
    id: 3,
    imageUrl: "/assets/img3.png",
    priceNow: "14.99",
    name: "Spaghetti Carbonara",
  },
  {
    id: 4,
    imageUrl: "/assets/img4.png",
    priceNow: "9.99",
    priceThen: "12.99",
    name: "Caesar Salad",
  },
  {
    id: 5,
    imageUrl: "/assets/img5.png",
    priceNow: "19.99",
    name: "Sushi Platter",
  },
  {
    id: 6,
    imageUrl: "/assets/img6.png",
    priceNow: "24.99",
    priceThen: "29.99",
    name: "Grilled Ribeye Steak",
  },
  {
    id: 7,
    imageUrl: "/assets/img7.png",
    priceNow: "6.99",
    name: "Chicken Tacos",
  },
  {
    id: 8,
    imageUrl: "/assets/img8.png",
    priceNow: "7.99",
    priceThen: "9.99",
    name: "Club Sandwich",
  },
  {
    id: 9,
    imageUrl: "/assets/img9.png",
    priceNow: "11.99",
    name: "Pork Dumplings",
  },
  {
    id: 10,
    imageUrl: "/assets/img10.png",
    priceNow: "13.99",
    priceThen: "16.99",
    name: "Tonkotsu Ramen",
  },
  {
    id: 11,
    imageUrl: "/assets/img11.png",
    priceNow: "5.99",
    name: "Vanilla Ice Cream",
  },
  {
    id: 12,
    imageUrl: "/assets/img12.png",
    priceNow: "6.99",
    priceThen: "8.99",
    name: "Berry Smoothie",
  },
  {
    id: 13,
    imageUrl: "/assets/img13.png",
    priceNow: "7.99",
    name: "Buttermilk Pancakes",
  },
  {
    id: 14,
    imageUrl: "/assets/img14.png",
    priceNow: "8.99",
    priceThen: "10.99",
    name: "Tomato Basil Soup",
  },
  {
    id: 15,
    imageUrl: "/assets/img15.png",
    priceNow: "14.99",
    name: "Chicken Curry",
  },
];

// export const ChefsData =[
//   {"name": "John Doe", "title": "Chef", "image": "/assets/Chef Card 1.png"},
//   {"name": "Emma Watson", "title": "Chef", "image": "/assets/Chef Card 1 (2).png"},
//   {"name": "Liam Brown", "title": "Chef", "image": "/assets/Chef Card 1 (3).png"},
//   {"name": "Liam Brown", "title": "Chef", "image": "/assets/Chef Card 1 (4).png"},
//   {"name": "Olivia Smith", "title": "Chef", "image": "/assets/Chef Card 4.png"},
//   {"name": "Chef Noah", "title": "Chef", "image": "/assets/Chef Card 5.png"},
//   {"name": "Ava Johnson", "title": "Chef", "image": "/assets/Chef Card 6.png"},
//   {"name": "William Davis", "title": "Chef", "image": "/assets/Chef Card 7.png"},
//   {"name": "Sophia Martinez", "title": "Chef", "image": "/assets/Chef Card 8.png"},
//   {"name": "James Wilson", "title": "Chef", "image": "/assets/Chef Card 9.png"},
//   {"name": "Isabella Anderson", "title": "Chef", "image": "/assets/Chef Card 10.png"},
//   {"name": "Benjamin Taylor", "title": "Chef", "image": "/assets/Chef Card 11.png"},
//   {"name": "Mia Thomas", "title": "Chef", "image": "/assets/Chef Card 12.png"},
//   {"name": "Lucas White", "title": "Chef", "image": "/assets/Chef Card 13.png"},
//   {"name": "Chef Amelia", "title": "Chef", "image": "/assets/Chef Card 14.png"},
//   {"name": "Henry Harris", "title": "Chef", "image": "/assets/Chef Card 15.png"}
// ]
export const FAQData =[
  {
    "question": "How do we serve food?",
    "answer": "Our food service is a blend of culinary artistry and meticulous attention to detail, designed to provide an exceptional dining experience. From the moment an order is placed, our process ensures that every dish is prepared to perfection. Our chefs use the freshest ingredients, sourced locally when possible, to create meals that are not only delicious but also nutritionally balanced. Each dish is plated with care to enhance its visual appeal, reflecting our dedication to presentation. Once prepared, our attentive serving staff ensures the food reaches you promptly, maintaining its optimal temperature and flavor. We also prioritize cleanliness and hygiene, with rigorous standards in place to ensure a safe and welcoming environment for all our guests."
  },
  {
    "question": "How can we get in touch with you?",
    "answer": "We value open communication with our customers and have made it easy for you to get in touch with us through multiple channels. For immediate assistance, you can call our dedicated customer service line at (123) 456-7890, where our team is ready to answer your questions or assist with reservations. For written inquiries or feedback, you can send us an email at contact@restaurant.com, and we aim to respond within 24 hours. Our website features a user-friendly contact form where you can submit any queries or comments directly. Additionally, you can engage with us on social media platforms like Facebook, Instagram, and Twitter, where we share updates and respond to messages promptly. If you prefer a face-to-face interaction, visit us at our restaurant during operating hours, where our staff will be happy to assist you."
  },
  {
    "question": "How is our food quality?",
    "answer": "Our food quality is a testament to our unwavering commitment to culinary excellence. We begin with sourcing the highest quality ingredients, ensuring that every component of your meal meets stringent standards for freshness and taste. Our chefs, who are passionate about their craft, use these ingredients to create dishes that are both innovative and rooted in tradition. Each dish is prepared with precise techniques to bring out the best flavors and textures. We conduct regular quality checks at every stage of preparation to maintain consistency and ensure that every meal exceeds expectations. Our commitment to food quality extends beyond taste, encompassing nutritional value, presentation, and adherence to safety and hygiene standards. Whether you dine in or order delivery, you can trust that our dedication to excellence is reflected in every dish we serve."
  },
  {
    "question": "What will be delivered? And when?",
    "answer": "When you order from us, you can expect a comprehensive delivery service that brings the full spectrum of our menu to your doorstep. We offer delivery of all items on our menu, including appetizers, main courses, desserts, and beverages, prepared fresh and packaged securely to retain their quality. Our delivery process is designed to be efficient and reliable, with an average delivery time of 30 to 45 minutes, depending on your location and order volume. During peak hours or special events, delivery times may vary, but we strive to provide accurate time estimates and keep you informed throughout the process. Our delivery staff is trained to handle food with care, ensuring it arrives at the right temperature and in perfect condition. Whether you're ordering a single meal or catering for a large gathering, our goal is to deliver a dining experience that matches the quality of our in-restaurant service."
  },
  {
    "question": "How do we give home delivery?",
    "answer": "Our home delivery service is designed to offer convenience without compromising on quality. We understand that our customers expect the same level of care and attention in delivery as they do when dining in our restaurant. To ensure this, we have a dedicated team of delivery personnel who are trained to handle food with the utmost care. Our delivery process begins with carefully packaging each order in insulated containers that preserve the food's temperature and freshness. Our drivers use GPS technology to find the most efficient routes, minimizing delivery times and ensuring your food arrives promptly. We offer multiple ordering options, including via our website, mobile app, or by phone, making it easy to place an order from the comfort of your home. Once your order is placed, you'll receive real-time updates on its status, so you know exactly when to expect your delivery."
  },
  {
    "question": "Is this restaurant 24 hours open?",
    "answer": "While we are not open 24 hours, our restaurant's operating hours are designed to accommodate a wide range of dining needs. We are open from 8 AM to 11 PM daily, providing ample opportunity for breakfast, lunch, and dinner. During these hours, we offer a full menu of options, including special promotions and seasonal dishes. For those who prefer to dine late, we suggest placing orders early to ensure timely service before closing. Although we close overnight, our commitment to providing exceptional food and service continues during all hours of operation. We also offer advance reservations and catering services for events outside our regular hours, ensuring we can meet your needs even when the restaurant is closed."
  }
]


export default menuData;
