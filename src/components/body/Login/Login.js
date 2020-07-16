import React from 'react';
import './login.css';
import '../../../assets/images/aruba-logo.png'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'


function Login() {
    return (
        <Form className="login-form">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <h1><span className="font-weight-bold">HTS  </span>Login Page</h1>
            <h2 className='text-center'>Welcome</h2>
            <FormGroup>
                <label>Email </label>
                <Input type="email" placeholder='Email'/>
            </FormGroup>
            <FormGroup>
                <label>Password</label>
                <Input type="password" placeholder='Password'/>
            </FormGroup>
            <Button className='btn-lg btn-block'>Login</Button>
            <div className="text-center">
                <a href="/forgot-password">Forgot Password</a>
                <span className='p-2'>|</span>
                 <a href="/request-access">Request Access</a>
            </div>
        </Form>
    );
}

export default Login;
