import React, { useState } from 'react'
import Container  from 'react-bootstrap/container';
import Layout from '../../../components/Layout/Layout';
import Search from '../../../components/Search/Search';
import ProductTable from '../../../components/ProductComponents/ProductTable';
import EmptyState from '../../../components/EmptyState/EmptyState';
import { useHistory } from 'react-router';


const Products = () => {

    const history = useHistory();
    const [state, setState] = useState({
        productList : [1]
    })

    const {productList} = state;

    //Make add product a function that pushes to the add product page and pass the function down as a prop to the layout and the header
    return (
        <Layout
            page = "Products"
            value= "Add product"
            click = {()=>{history.push('add-product')}}
        >
            <Container fluid>

                {
                    productList.length !==0 ?
                    <>
                        <div className = "ml-40 mt-40">
                            <Search 
                                placeholder="Type to search products..."
                            />
                        </div>

                        <ProductTable />
                    </>
                    :

                    <EmptyState
                        title = "No products yet"
                        text = "You've not added any products yet. Get started today by adding a new product so you can start selling."
                    />
                }

                

            </Container>
            
        </Layout>
    )
}

export default Products
