import React, { createContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import SignInHeader from '../../../../components/SignInComponents/SignInHeader';
import SignInDescription from '../../../../components/SignInComponents/SignInDescription';
import SignUpForm from '../../../../components/SignInComponents/SignUpForm/SignUpForm';
import { useState } from 'react';
import axios from 'axios';
import { businessSignUp } from '../../../../utils/urls';
import Swal from '../../../../constants/swal';
import { useHistory } from 'react-router-dom';

export const SignUpContext = createContext();

const SignUp = () => {
    const history = useHistory();
    const [state, setState] = useState({
        firstName:'',
        lastName:'',
        role:'',
        email:'',
        password:'',
        businessName:'',
        isPasswordShown: true,
        isLoading: false
    })

    const onChange =(e)=>{
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))
    }

    const togglePassword = () =>{
        setState(state=>({
            ...state,
            isPasswordShown  : !state.isPasswordShown
        }))
    }

    const createMerchant = ()=>{

        const {firstName, lastName, businessName, email, password} = state
        if ( firstName.trim()==='' || lastName.trim()==='' || businessName.trim()===""|| email.trim()===""|| password.trim()==="" )
        {
            Swal.fire({
                title: 'You missed some...',
                icon: 'warning',
                text: `Please fill all required fields to continue`,
            })
        }
        else{
            setState(state=>({
                ...state,
                isLoading: true
            }))

            let reqBody = {
                firstName,
                lastName,
                accountType: "business",
                businessName,
                email, 
                password
            }
    
            axios({
                method:'post',
                url:`${businessSignUp}`,
                headers:{
                    'Content-Type': 'application/json'
                },
                data: reqBody
            }).then(response=>{
                setState(state=>({
                    ...state,
                    isLoading: false
                }))
                if(response.data.status === 'success'){
                    Swal.fire({
                        title: 'Sucessful...',
                        icon: 'success',
                        text: `Merchant account created successfully`,
                    })
                    history.push('/vendor-log-in')
                }else{
                    Swal.fire({
                        title: 'Oops...',
                        icon: 'error',
                        text: `An error occured, please try again`,
                    }) 
                }
            }).catch(err => {
                setState(state=>({
                    ...state,
                    isLoading: false
                }))
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                    // footer: 'Please contact support'
                })
            });
    
        }


    }
    return (
        <SignUpContext.Provider value={{
            state,
            onChange,
            createMerchant,
            togglePassword
        }}>
            <SignInHeader/> 
            <Row className="form-div">
                <Col lg={5}>
                    <SignUpForm />
                </Col>
                <Col lg={7}>
                    <SignInDescription />
                </Col>
            </Row>
        </SignUpContext.Provider>
    )
}

export default SignUp
