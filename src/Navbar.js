import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/contact">Contact Us</NavLink> |
            <NavLink to="/course/php">PHP</NavLink> |
            <NavLink to="/course/python">Python</NavLink> |
            <NavLink to="/searchparams1">Filter 1 (SearchParams)</NavLink> |
            <NavLink to="/searchparams2">Filter 2 (SearchParams)</NavLink>
        </>
    )
}
