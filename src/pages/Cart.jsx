import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const [showPayment, setShowPayment] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => {
      return (
        total +
        Number(item.price || 0) *
          Number(item.quantity || 1)
      );
    },
    0
  );

  const delivery =
    subtotal >= 999 || subtotal === 0 ? 0 : 99;

  const total = subtotal + delivery;


  // =====================================================
  // PAYMENT SUCCESS
  // =====================================================

  if (orderPlaced) {
    return (
      <div className="cart-page">

        <section className="order-success-page">

          <div className="order-success-circle">
            ✓
          </div>

          <span className="order-success-eyebrow">
            ORDER CONFIRMED 🎉
          </span>

          <h1>
            Thank you for
            <br />
            <strong>shopping with PetCare!</strong>
          </h1>

          <p>
            Your pet's goodies are officially on
            their way. We hope your furry friend
            loves them! 🐾
          </p>


          <div className="order-number-card">

            <div>
              <span>
                ORDER STATUS
              </span>

              <strong>
                Confirmed ✓
              </strong>
            </div>

            <div>
              <span>
                ORDER TOTAL
              </span>

              <strong>
                ₹{total}
              </strong>
            </div>

          </div>


          <div className="order-success-actions">

            <Link
              to="/supplies"
              className="success-primary-button"
            >
              Continue Shopping →
            </Link>

            <Link
              to="/"
              className="success-secondary-button"
            >
              Back to Dashboard
            </Link>

          </div>


          <div className="order-success-message">

            <span>
              🚚
            </span>

            <div>

              <strong>
                We'll take good care of your order.
              </strong>

              <small>
                Your pet's essentials will be delivered
                safely to your doorstep.
              </small>

            </div>

          </div>

        </section>

      </div>
    );
  }


  // =====================================================
  // PAYMENT PAGE
  // =====================================================

  if (showPayment) {
    return (
      <div className="cart-page">

        <section className="payment-page">

          <div className="payment-header">

            <button
              type="button"
              onClick={() => setShowPayment(false)}
              className="payment-back-button"
            >
              ← Back to cart
            </button>

            <span>
              SECURE CHECKOUT 🔒
            </span>

            <h1>
              Complete your
              <br />
              <strong>PetCare order.</strong>
            </h1>

            <p>
              Your payment information is secure
              and protected.
            </p>

          </div>


          <div className="payment-layout">

            {/* =================================================
                PAYMENT FORM
            ================================================= */}

            <div className="payment-form-card">

              <div className="payment-card-heading">

                <span>
                  PAYMENT DETAILS
                </span>

                <h2>
                  Choose your payment method
                </h2>

              </div>


              <div className="payment-methods">

                <button
                  type="button"
                  className="payment-method active"
                >
                  💳
                  <span>
                    Card
                  </span>
                </button>

                <button
                  type="button"
                  className="payment-method"
                >
                  📱
                  <span>
                    UPI
                  </span>
                </button>

                <button
                  type="button"
                  className="payment-method"
                >
                  💵
                  <span>
                    COD
                  </span>
                </button>

              </div>


              <div className="payment-input-group">

                <label>
                  CARDHOLDER NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              <div className="payment-input-group">

                <label>
                  CARD NUMBER
                </label>

                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                />

              </div>


              <div className="payment-input-row">

                <div className="payment-input-group">

                  <label>
                    EXPIRY DATE
                  </label>

                  <input
                    type="text"
                    placeholder="MM / YY"
                  />

                </div>


                <div className="payment-input-group">

                  <label>
                    CVV
                  </label>

                  <input
                    type="password"
                    placeholder="•••"
                  />

                </div>

              </div>


              {/* DELIVERY ADDRESS */}

              <div className="payment-address">

                <div>

                  <span>
                    DELIVERY ADDRESS
                  </span>

                  <strong>
                    Priya
                  </strong>

                  <p>
                    Hyderabad, Telangana
                    <br />
                    India
                  </p>

                </div>

                <button type="button">
                  Edit
                </button>

              </div>


              {/* PAYMENT BUTTON */}

              <button
                type="button"
                className="pay-now-button"
                onClick={() => {

                  setOrderPlaced(true);

                  dispatch(clearCart());

                }}
              >
                Pay ₹{total} Securely →
              </button>


              <p className="payment-security">
                🔒 Secure payment · Your details
                are protected
              </p>

            </div>


            {/* =================================================
                ORDER SUMMARY
            ================================================= */}

            <aside className="payment-summary">

              <span>
                YOUR ORDER
              </span>

              <h2>
                Order summary
              </h2>


              <div className="payment-products">

                {cartItems.map((item) => (

                  <div
                    className="payment-product"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>

                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        Qty: {item.quantity || 1}
                      </span>

                    </div>

                    <b>
                      ₹
                      {Number(item.price || 0) *
                        Number(item.quantity || 1)}
                    </b>

                  </div>

                ))}

              </div>


              <div className="payment-summary-divider" />


              <div className="payment-summary-row">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{subtotal}
                </strong>

              </div>


              <div className="payment-summary-row">

                <span>
                  Delivery
                </span>

                <strong>
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery}`}
                </strong>

              </div>


              <div className="payment-summary-divider" />


              <div className="payment-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>

            </aside>

          </div>

        </section>

      </div>
    );
  }


  // =====================================================
  // EMPTY CART
  // =====================================================

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">

        <section className="cart-empty-state">

          <div className="cart-empty-icon">
            🛒
          </div>

          <span>
            YOUR CART IS WAITING
          </span>

          <h2>
            Nothing here yet.
          </h2>

          <p>
            Find something special for your furry
            friend and add it to your PetCare bag.
          </p>

          <Link
            to="/supplies"
            className="cart-shop-button"
          >
            Explore Pet Supplies →
          </Link>

        </section>

      </div>
    );
  }


  // =====================================================
  // NORMAL CART PAGE
  // =====================================================

  return (
    <div className="cart-page">

      {/* =================================================
          CART HEADER
      ================================================= */}

      <section className="cart-page-header">

        <div>

          <span>
            YOUR PETCARE BAG 🛒
          </span>

          <h1>
            Everything your pet
            <br />
            <strong>
              needs, in one place.
            </strong>
          </h1>

          <p>
            Review your essentials, adjust quantities
            and get everything ready for your pet.
          </p>

        </div>


        <div className="cart-header-illustration">
          🐶
        </div>

      </section>


      {/* =================================================
          CART CONTENT
      ================================================= */}

      <section className="cart-layout">

        {/* LEFT */}

        <div className="cart-items-section">

          <div className="cart-section-heading">

            <div>

              <span>
                SHOPPING BAG
              </span>

              <h2>
                {cartItems.length} item
                {cartItems.length !== 1
                  ? "s"
                  : ""}
              </h2>

            </div>

            <Link to="/supplies">
              Continue shopping →
            </Link>

          </div>


          <div className="cart-items">

            {cartItems.map((item) => (

              <article
                className="cart-item"
                key={item.id}
              >

                {/* PRODUCT IMAGE */}

                <div className="cart-item-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                {/* PRODUCT DETAILS */}

                <div className="cart-item-details">

                  <span>
                    {item.category ||
                      "Pet Supplies"}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    Perfect for your pet's
                    everyday care.
                  </p>

                  <button
                    type="button"
                    className="cart-remove-button"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Remove
                  </button>

                </div>


                {/* PRICE + QUANTITY */}

                <div className="cart-item-actions">

                  <strong>
                    ₹{item.price}
                  </strong>


                  <div className="cart-quantity">

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity || 1}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          addToCart(item)
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* DELIVERY */}

          <div className="cart-delivery-message">

            <div>
              🚚
            </div>

            <div>

              <strong>
                {subtotal >= 999
                  ? "You've unlocked free delivery!"
                  : "Free delivery on orders above ₹999"}
              </strong>

              <span>
                Your pet's essentials will be delivered
                safely to your doorstep.
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            ORDER SUMMARY
        ================================================= */}

        <aside className="cart-summary">

          <span>
            ORDER SUMMARY
          </span>

          <h2>
            Your total
          </h2>


          <div className="cart-summary-line">

            <span>
              Subtotal
            </span>

            <strong>
              ₹{subtotal}
            </strong>

          </div>


          <div className="cart-summary-line">

            <span>
              Delivery
            </span>

            <strong>
              {delivery === 0
                ? "FREE"
                : `₹${delivery}`}
            </strong>

          </div>


          <div className="cart-summary-divider" />


          <div className="cart-total-line">

            <span>
              Total
            </span>

            <strong>
              ₹{total}
            </strong>

          </div>


          <button
            type="button"
            className="checkout-button"
            onClick={() =>
              setShowPayment(true)
            }
          >
            Proceed to Payment →
          </button>


          <div className="cart-secure-info">

            <span>
              🔒 Secure checkout
            </span>

            <span>
              🐾 PetCare trusted
            </span>

          </div>

        </aside>

      </section>

    </div>
  );
}

export default Cart;