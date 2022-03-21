import React, { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import {useAuth} from '../firebase/auth'

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ componet: Component, ...rest}) => {
    const {currentUser} = useAuth();
    return (
        <Route
        {...rest}
        render={props => {
            return currentUser ? <Component {...props}/> : <Navigate to= '/'/>
        }}
        >

        </Route>
    )
}

