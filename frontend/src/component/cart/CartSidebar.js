import React from "react";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import Order from "./Order";

const cart = [
    {
        book_id: 17,
        cover: "3.png",
        title: "Beauty of Nature",
        author: "Hae-Won Jeon"
    },
    {
        book_id: 9,
        cover: "5.png",
        title: "Simple Recipe",
        author: "Juliana Silva"
    },
    {
        book_id: 67,
        cover: "9.png",
        title: "Silent in the Dark",
        author: "Sebastian Bennett"
    }
]

function CartSidebar({ showCart, setShowCart }) {

    const navigate = useNavigate();

    function handleCheckout(){
        setShowCart(false);
        navigate('/cart');
    }

    return (
        <>
            <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title as="h2">Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* map cart contents */}
                    {cart.length > 0 ?
                        <>
                        {cart.map((cart_item) =>  <Order key={cart_item.book_id} item={cart_item} /> )}
                        < button className="checkoutbtn loginbtn" onClick={handleCheckout}>Review Order</button>
                        </>
                        : <p>No items selected.</p>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CartSidebar;

//how to render on page
//import CartSidebar from "./cart/CartSidebar";
// const [showCart, setShowCart] = useState(false);
//<CartSidebar showCart={showCart} setShowCart={setShowCart} />
