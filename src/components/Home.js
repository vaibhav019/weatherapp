import React from 'react'
import { Button } from 'reactstrap'

function Home(props) {
    console.warn("props",props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="/images/gary.png" />
                </div>
                
                <div className="text-wrapper item"  >
                    <span>
                        Ben
                    </span>
                    <span>
                This is high damand toy.
                    </span>
                    <br/>
                    <span>
                        <b>Price: $1000.00</b>
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <Button 
                    color="primary"
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</Button>
                        <Button 
                        color="primary"
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove to Cart</Button>
                        
                </div>
            </div>
        </div>
    )
}
export default Home