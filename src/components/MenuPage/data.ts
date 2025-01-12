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
  export default menuData
  