import React from 'react'
import { Nav, NavbarBrand, NavItem, NavLink,Collapse,
    Navbar,
    NavbarToggler,
    } from 'reactstrap';


function Header(props)
{
    console.warn(props.data)
    return(
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Vidz.ai task</NavbarBrand>
        <NavbarToggler  />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="">Code</NavLink>
            </NavItem>
            
          </Nav>
          <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </Collapse>
        
      </Navbar>

        </div>
    )
}

export default Header
//"https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"