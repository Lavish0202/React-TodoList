import React, { Component } from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header style={headStyle}>
            <h1>Todo List</h1>
            <Link style={linkstyle} to ='/'>Home</Link> | {' '}
            <Link style={linkstyle} to ='/about'>About</Link>
        </header>
    )
}
const headStyle={
    background: '#590707',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px'

}
const linkstyle={
    color:'#fff',
    textDecoration: 'none'
}
export default Header;
