import React from "react"
import classNames from 'classnames/bind';
import '../styles/Button.scss'

export default function Button(props){
    let buttonClass = classNames('button', {
        'button--login': props.login,
        'button--signup': props.signup,
        'button--logout': props.logout,
        'button--search': props.search,
        'button--comments': props.comments,
        'button--graphs': props.graphs,
        'button--tags': props.tags 
    })
    return (
       <button className = {buttonClass} 
               onClick = {props.onClick}>
               {props.children}
        </button> 
    );
}