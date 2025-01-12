import HeaderSection from '@/components/generalComponents/headersection'
import HeaderTwo from '@/components/header/Header2'
import MenuSection from '@/components/MenuPage/MenuSection'
import menuData from '@/components/MenuPage/data'
import { ReactNode } from 'react'
const Menu = () => {
  const menu_data = menuData
  return (
    <div className='bg-white'>
        <HeaderTwo/>
        <HeaderSection text='Menu' textHeading='Our Menu'/>
{
  menu_data.map((element)=>{
   return <MenuSection key={element.id} MenuType={element.menuType} MenuItems={element.menuItems} ImageUrl={element.imageUrl } MenuId={element.id}/>  
  })
}
    </div>
  )
}

export default Menu
// replace menu_data with actual data from API call or local storage.  // This is just a placeholder for demonstration purposes.  // Actual implementation should handle API calls, error handling, and data fetching.  // Also, implement pagination for larger menu lists.  // Also, implement search functionality to filter menu items.  // Also, implement sorting functionality to sort menu items by various criteria.  // Also, implement a responsive design for different screen sizes.  // Also, implement a feature to add items to a cart, remove items from a cart, and update quantities of items in a cart.  // Also, implement a feature to apply discounts or promotions to items in a cart.  // Also, implement a feature to checkout and submit orders.  // Also, implement a feature to track order statuses and provide feedback on order experiences.  // Also, implement a feature