import React, { useState, useEffect } from 'react';
import * as loginService from '../../../service/auth/login/Login.service';
import { useHistory } from 'react-router-dom';
import LoginComponent from '../../../component/auth/login/LoginComponent';
import LoaderComponent from '../../../component/common/loader/LoaderComponent';

function Login(props){
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    let access;
    let refresh;

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = './src/empty.js';
        script.async = true;
      
        document.head.appendChild(script);
      
        return () => {
          document.head.removeChild(script);
        }
      }, []);


    const onLogin = async (credentials) => {
        setLoading(true)
        if (credentials !== null) {
            const res = await loginService.login(credentials)
            if (res) {
                access = "JWT " + res.access;
                refresh = "JWT " + res.refresh;
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);
                setLoading(false)
                history.push('/')
            }
        }
    }

    return loading? <LoaderComponent/> :
    <LoginComponent login={onLogin}/>
}

export default Login;