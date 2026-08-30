import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <header className="dashboard-navbar">

      {/* LEFT SIDE */}

      <div className="navbar-left">

        <div className="navbar-page-title">
          <h2>PetCare Dashboard</h2>

          <p>
            Your pet's health, care and happiness in one place.
          </p>
        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="navbar-right">

        {/* Pet count */}

        <div className="navbar-pet-count">
          <span>🐾</span>
          <strong>2</strong>
          <small>Pets</small>
        </div>


        {/* Cart */}

        <div className="navbar-icon">

          🛒

          {cartCount > 0 && (
            <span className="navbar-badge">
              {cartCount}
            </span>
          )}

        </div>


        {/* Notification */}

        <div className="navbar-icon">
          🔔
        </div>


        {/* User */}

        <div className="navbar-user">

          <div className="navbar-avatar">
            P
          </div>

          <div className="navbar-user-info">

            <strong>
              Priya
            </strong>

            <span>
              Pet Parent
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;