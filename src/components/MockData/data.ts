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
 const menuData: MenuCategory[] = [
    {
      id: 1,
      imageUrl:"/assets/menu1.png",
      menuType: "Starter",
      menuItems: [
        {
          itemId: 1,
          itemHeading: "Alder Grilled Chinook Salmon",
          description: "Toasted French bread topped with romano, cheddar",
          calories: "560 CAL",
          price: "32$",
        },
        {
          itemId: 2,
          itemHeading: "Beef Bourguignon",
          description: "Crispy onion, garlic, bell peppers, and tomatoes",
          calories: "630 CAL",
          price: "38$",
        },
        {
          itemId: 3,
          itemHeading: "Chicken Fajitas",
          description: "Grilled chicken breasts, avocado, cilantro, and lime juice",
          calories: "450 CAL",
          price: "28$",
        },
        {
          itemId: 4,
          itemHeading: "Grilled Salmon with BBQ Sauce",
          description: "Salmon fillets, tomatoes, onions, and BBQ sauce",
          calories: "580 CAL",
          price: "35$",
        },
      ],
    },
    {
      id: 2,
      imageUrl:"/assets/img12.png",
      menuType: "Main Course",
      menuItems: [
        {
          itemId: 1,
          itemHeading: "Grilled Chicken Sandwich",
          description: "Grilled chicken breasts, bacon, lettuce, tomatoes, and onions",
          calories: "500 CAL",
          price: "25$",
        },
        {
          itemId: 2,
          itemHeading: "Ribeye Steak",
          description: "Ribeye steak, bell peppers, onions, and corn",
          calories: "700 CAL",
          price: "38$",
        },
        {
          itemId: 3,
          itemHeading: "Chicken BBQ Ranch",
          description: "Grilled chicken breasts, BBQ sauce, corn, and black beans",
          calories: "620 CAL",
          price: "35$",
        },
        {
          itemId: 4,
          itemHeading: "Grilled Salmon with BBQ Sauce",
          description: "Salmon fillets, tomatoes, onions, and BBQ sauce",
          calories: "580 CAL",
          price: "35$",
        },
      ],
    },
    {
      id: 3,
      imageUrl:"/assets/menu2.png",
      menuType: "Dessert",
      menuItems: [
        {
          itemId: 1,
          itemHeading: "Chocolate Cheesecake",
          description: "Layered with whipped cream, cream cheese, and chocolate",
          calories: "850 CAL",
          price: "45$",
        },
        {
          itemId: 2,
          itemHeading: "Vanilla Ice Cream Cone",
          description: "Sugar-coated ice cream, vanilla, and whipped cream",
          calories: "300 CAL",
          price: "15$",
        },
        {
          itemId: 3,
          itemHeading: "Strawberry Cheesecake",
          description: "Layered with whipped cream, cream cheese, and strawberry",
          calories: "850 CAL",
          price: "45$",
        },
        {
          itemId: 4,
          itemHeading: "Rocky Road Cake",
          description: "Chocolate, marshmallows, and nuts",
          calories: "800 CAL",
          price: "40$",
        },
      ],
    },
    {
      id: 4,
      imageUrl:"/assets/menu3.png",
      menuType: "Beverages",
      menuItems: [
        {
          itemId: 1,
          itemHeading: "Cold Brew Coffee",
          description: "Espresso, steamed milk, and caramel sauce",
          calories: "250 CAL",
          price: "10$",
        },
        {
          itemId: 2,
          itemHeading: "Hot Chocolate",
          description: "Vanilla, milk, and caramel sauce",
          calories: "250 CAL",
          price: "10$",
        },
        {
          itemId: 3,
          itemHeading: "Cappuccino",
          description: "Espresso, milk, and steamed milk",
          calories: "250 CAL",
          price: "10$",
        },
        {
          itemId: 4,
          itemHeading: "Tea",
          description: "Black tea, milk, and lemon",
          calories: "200 CAL",
          price: "8$",
        },
      ],
    },
  ];
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
        priceNow: "$12.99",
        priceThen: "$15.99",
        name: "Margherita Pizza"
    },
    {
        id: 2,
        imageUrl: "/assets/img2.png",
        priceNow: "$8.99",
        priceThen: "$10.99",
        name: "Classic Cheeseburger"
    },
    {
        id: 3,
        imageUrl: "/assets/img3.png",
        priceNow: "$14.99",
        name: "Spaghetti Carbonara"
    },
    {
        id: 4,
        imageUrl: "/assets/img4.png",
        priceNow: "$9.99",
        priceThen: "$12.99",
        name: "Caesar Salad"
    },
    {
        id: 5,
        imageUrl: "/assets/img5.png",
        priceNow: "$19.99",
        name: "Sushi Platter"
    },
    {
        id: 6,
        imageUrl: "/assets/img6.png",
        priceNow: "$24.99",
        priceThen: "$29.99",
        name: "Grilled Ribeye Steak"
    },
    {
        id: 7,
        imageUrl: "/assets/img7.png",
        priceNow: "$6.99",
        name: "Chicken Tacos"
    },
    {
        id: 8,
        imageUrl: "/assets/img8.png",
        priceNow: "$7.99",
        priceThen: "$9.99",
        name: "Club Sandwich"
    },
    {
        id: 9,
        imageUrl: "/assets/img9.png",
        priceNow: "$11.99",
        name: "Pork Dumplings"
    },
    {
        id: 10,
        imageUrl: "/assets/img10.png",
        priceNow: "$13.99",
        priceThen: "$16.99",
        name: "Tonkotsu Ramen"
    },
    {
      id: 11,
      imageUrl: "/assets/img11.png",
      priceNow: "$5.99",
      name: "Vanilla Ice Cream"
  },
  {
      id: 12,
      imageUrl: "/assets/img12.png",
      priceNow: "$6.99",
      priceThen: "$8.99",
      name: "Berry Smoothie"
  },
  {
      id: 13,
      imageUrl: "/assets/img13.png",
      priceNow: "$7.99",
      name: "Buttermilk Pancakes"
  },
  {
      id: 14,
      imageUrl: "/assets/img14.png",
      priceNow: "$8.99",
      priceThen: "$10.99",
      name: "Tomato Basil Soup"
  },
  {
      id: 15,
      imageUrl: "/assets/img15.png",
      priceNow: "$14.99",
      name: "Chicken Curry"
  }
];
   


  export default menuData
  