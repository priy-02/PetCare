import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  // Get cart items from Redux
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const menuItems = [
    {
      path: "/dashboard",
      icon: "🏠",
      label: "Dashboard",
    },
    {
      path: "/pets",
      icon: "🐾",
      label: "My Pets",
    },
    {
      path: "/supplies",
      icon: "🛒",
      label: "Pet Supplies",
    },
    {
      path: "/services",
      icon: "🩺",
      label: "Veterinary",
    },
    {
      path: "/appointments",
      icon: "📅",
      label: "Appointments",
    },
    {
      path: "/health",
      icon: "❤️",
      label: "Health Tracker",
    },
    {
      path: "/cart",
      icon: "🛍️",
      label: "Cart",
      badge: cartCount,
    },
    {
      path: "/profile",
      icon: "⚙️",
      label: "Profile",
    },
  ];

  return (
    <aside className="petcare-sidebar">

      {/* =========================
          BRAND
      ========================== */}

      <div className="petcare-brand">

        <div className="brand-paw">
          🐾
        </div>

        <div>
          <h4>
            PetCare
          </h4>

          <small>
            Smart Pet Wellness
          </small>
        </div>

      </div>


      {/* =========================
          MENU TITLE
      ========================== */}

      <div className="sidebar-label">
        MAIN MENU
      </div>


      {/* =========================
          NAVIGATION
      ========================== */}

      <nav className="petcare-nav">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `petcare-nav-link ${
                isActive ? "active" : ""
              }`
            }
          >

            {/* Icon */}

            <span className="nav-icon">
              {item.icon}
            </span>


            {/* Label */}

            <span>
              {item.label}
            </span>


            {/* Cart Badge */}

            {item.badge > 0 && (
              <span className="nav-badge">
                {item.badge}
              </span>
            )}

          </NavLink>

        ))}

      </nav>


      {/* =========================
          SUPPORT CARD
      ========================== */}

      <div className="sidebar-help">

        <div className="help-image">
          🐶
        </div>

        <div>
          <strong>
            Need help?
          </strong>

          <small>
            PetCare Support
          </small>
        </div>

        <button
          type="button"
          onClick={() =>
            alert(
              "PetCare Support: We're here to help! 🐾"
            )
          }
        >
          →
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;