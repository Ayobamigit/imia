import React, { useState, createContext } from 'react'
import { Container } from 'react-bootstrap';
import EmptyState from '../../../components/EmptyState/EmptyState';
import Layout from '../../../components/Layout/Layout';
import CreateAdvertisement from '../../../components/PromotionComponents/Advertisement/CreateAdvertisement';
import CreateCoupon from '../../../components/PromotionComponents/Coupon/CreateCoupon';
import CreatePromotion from '../../../components/PromotionComponents/CreatePromotion';
import Deactivated from '../../../components/PromotionComponents/Deactivated';
import CreateDiscount from '../../../components/PromotionComponents/Discount/CreateDiscount';
import Expired from '../../../components/PromotionComponents/Expired';
import Ongoing from '../../../components/PromotionComponents/Ongoing';
import PromotionNav from '../../../components/PromotionComponents/PromotionNav/PromotionNav';
import Modal from '../../../components/UI/Modal/Modal'
import SideDrawer from '../../../components/UI/SideDrawer/SideDrawer'

export const PromotionsContext = createContext();

const Promotions = () => {
    const [state, setState] = useState({
      promotionList : [1],
      createPromotion: false,
      addPromotion: false,
      route: 'ongoing',
      option:''
    })

    const cancelCreatePromotion = () =>{
      setState(state=>({
        ...state,
        createPromotion: false
      }))
    }

    const onClickCreate = () =>{
      setState(state=>({
        ...state,
        createPromotion: true
      }))
    }

    const onRouteChange = (value) =>{
      setState(state=>({
         ...state,
         route: value
      }))

      //   console.log(route)
   }

   const onClickOption = (value) =>{
    setState(state=>({
       ...state,
       option: value,
       addPromotion: true,
       createPromotion: false
    }))

      // console.log(option)
  }

 const cancelCreateOption = () =>{
  setState(state=>({
    ...state,
    addPromotion: false
  }))
  }

    const {promotionList, addPromotion, createPromotion, route, option} = state;

    const renderPages = () =>{
      switch(route) {
         case 'ongoing':
            return <Ongoing />;
         case 'expired':
            return <Expired />;
         case 'deactivated':
            return <Deactivated />;
         default:
            return <Ongoing />
      }
   }

   const renderOptions = () =>{
    switch(option) {
       case 'advertisement':
          return <CreateAdvertisement />;
       case 'discount':
          return <CreateDiscount />;
       case 'coupon':
          return <CreateCoupon />;
       default:
          return null
    }
 }

    return (
      <>
      

        <Modal open={createPromotion} modalClosed = {cancelCreatePromotion}>
          <CreatePromotion 
            onClickOption={onClickOption}
          />
        </Modal>
        <SideDrawer open={addPromotion} closed={cancelCreateOption} >
          {renderOptions()}
        </SideDrawer>

        <Layout
          page = "Promotions"
          value= "Create promotion"
          click={onClickCreate}
        >
          <PromotionsContext.Provider value={{
            onRouteChange,
            state
          }}>
            {
              promotionList.length === 0 ?
                <Container fluid>
                  <EmptyState
                    title = "No promotions yet"
                    text = "You've not created any promotion yet. Get started by creating one today for your store or products." 
                  />
                </Container>
              :
              <>
                <PromotionNav />
                <Container>
                  {renderPages()}
                </Container>
              </>
            }
         
          </PromotionsContext.Provider>
          
            
        </Layout>
      </>
    )
}

export default Promotions
