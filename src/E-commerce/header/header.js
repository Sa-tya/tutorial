import React from 'react'
import './headercss.css'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import MoreT from './MoreT';
// import LoginT from './LoginT';
// import Search from './Search'
// import Sresult from './Sresult';
export const Header = () => {
    return (
       <div className="header">
           <div className="header__first">
      <span><LocalLibraryIcon />  DELTA CORNER</span>
           </div>
           <div className="header__second">
               {/* <Search/>
              <SearchIcon/> */}
               
           </div>
           <div className="header__third">
               <Tippy interactive="true"><button>log in</button></Tippy>
    
           </div>
           <div className="header__fourth">
       <Tippy  interactive="true"><span>more</span>
      </Tippy>
      <ExpandMoreIcon/>
           </div>
           <div className="header__fifth">
     <ShoppingCartIcon/>
     <p>cart</p>
           </div>
          
       </div>
      
    )
}