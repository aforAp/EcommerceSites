import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext); 
    //Now we are using to add one logic if the search bar is active but when we switch to different pages it should be inactive untill when i click the button
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    //it will helps us to get the path of the url /collection /name

    useEffect(() => {
        //the logic here only that was means the seaarch bar should be viibsle in the collections page alone so we 
        //have set to true if the pathname have collections else the search bar was not visible
      if(location.pathname.includes('collection')){
         setVisible(true);
      } else {
        setVisible(false);
      }
    }, [location]);

    return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
      <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <img src={assets.search_icon} alt="" className='w-4'/>
      </div>
      <img src={assets.cross_icon} alt="" className='inline w-3 cursor-pointer' onClick={() => setShowSearch(false)}/>
    </div>
  ) : null
}

export default SearchBar
