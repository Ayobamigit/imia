import React, { createContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SignInHeader from '../../../../components/SignInComponents/SignInHeader';
import SignInDescription from '../../../../components/SignInComponents/SignInDescription';
import SignInForm from '../../../../components/SignInComponents/SignInForm/SignInForm';
import { businessLogin } from '../../../../utils/urls';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from '../../../../constants/swal';

export const LoginContext = createContext();

const MainLogin = () => {
    const [state, setState] = useState({
        email:'',
        password:'',
        isPasswordShown: true,
        isLoggingIn: false
    })
    const history = useHistory();

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

    const onClickLogin =()=>{
        const {email, password} = state;

        if ( email.trim()==='' || password.trim()==='')
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
                isLoggingIn: true
            }))

            let reqBody = {
                email, 
                password
            }

            axios({
                method:'post',
                url:`${businessLogin}`,
                headers:{
                    'Content-Type': 'application/json'
                },
                data: reqBody
            })
            .then(response=>{
                setState(state=>({
                    ...state,
                    isLoggingIn: false
                }))
                if(response.data.status === 'success'){
                    const {token, user: {id, lastName, firstName, status, account_type}} = response.data.data;
                    localStorage.setItem('userDetails', JSON.stringify({
                        merchantId: id,
                        token,
                        account_type,
                        status,
                        firstName, 
                        lastName                         
                    }))

                    history.push('/dashboard')

                }else{
                    Swal.fire({
                        title: 'Oops...',
                        icon: 'error', 
                        text: `An error occured, please try again`,
                    })
                }
            }).catch(err => {
                console.log(err.response)
                setState(state=>({
                    ...state,
                    isLoggingIn: false
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
        <LoginContext.Provider value={{
            state,
            onChange,
            togglePassword,
            onClickLogin
        }}>
            <SignInHeader/> 
            <Row className="form-div">
                <Col lg={5}>
                    <SignInForm />
                </Col>
                <Col lg={7}>
                    <SignInDescription />
                </Col>
            </Row>
        </LoginContext.Provider>
    )
}

export default MainLogin
