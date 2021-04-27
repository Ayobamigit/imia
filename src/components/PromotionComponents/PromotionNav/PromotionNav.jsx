import React, {useContext} from 'react';
import { NavLink } from 'react-bootstrap';
import { PromotionsContext } from '../../../pages/Promotions/Promotions';

const PromotionNav = () => {
    const { onRouteChange, state:{route}} = useContext(PromotionsContext);
    return (
        <div className="Nav-Bar">
           <div className="nav-navigation">
               <ul className="nav-ul">
                   <li 
                        onClick={()=>onRouteChange('ongoing')} 
                        className={route === 'ongoing' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Ongoing</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('expired')} 
                        className={route === 'expired' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Expired</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('deactivated')} 
                        className= {route === 'deactivated' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Deactivated</NavLink>
                    </li>
               </ul>
            </div> 
        </div>
    )
}

export default PromotionNav
