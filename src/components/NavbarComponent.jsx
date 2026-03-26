import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <>
    <Navbar fluid className="sticky top-0">
      <NavbarBrand href="">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Koliko Store</span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-3">
        <Button>Sign up</Button>
        <Button>Login</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/home">
          Home
        </NavbarLink>
        <NavbarLink href="/list-games">List Games</NavbarLink>
        <NavbarLink href="/cart">Cart</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </>
  )
}
