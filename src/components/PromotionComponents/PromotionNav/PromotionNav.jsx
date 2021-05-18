import React, {useContext} from 'react';
import { PromotionsContext } from '../../../pages/Merchant/Promotions/Promotions';

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
                        Ongoing
                    </li>

                   <li 
                        onClick={()=>onRouteChange('expired')} 
                        className={route === 'expired' ? 'nav-li-active' : null}
                    >
                        Expired
                    </li>

                   <li 
                        onClick={()=>onRouteChange('deactivated')} 
                        className= {route === 'deactivated' ? 'nav-li-active' : null}
                    >
                        Deactivated
                    </li>
               </ul>
            </div> 
        </div>
    )
}

export default PromotionNav
