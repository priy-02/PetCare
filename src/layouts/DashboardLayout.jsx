import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DashboardLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 1),
    0
  );

  const navigation = [
    {
      path: "/",
      label: "Dashboard",
      icon: "⌂",
    },
    {
      path: "/pets",
      label: "My Pets",
      icon: "🐾",
    },
    {
      path: "/supplies",
      label: "Pet Supplies",
      icon: "🛍",
    },
    {
      path: "/services",
      label: "Veterinary",
      icon: "🩺",
    },
    {
      path: "/appointments",
      label: "Appointments",
      icon: "📅",
    },
    {
      path: "/health",
      label: "Health Tracker",
      icon: "❤️",
    },
    {
      path: "/cart",
      label: "Cart",
      icon: "🛒",
      badge: cartCount,
    },
  ];

  const accountNavigation = [
    {
      path: "/profile",
      label: "Profile",
      icon: "👤",
    },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="petcare-app-shell">

      {/* =====================================================
          MOBILE TOP BAR
          ===================================================== */}

      <header className="mobile-topbar">

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          aria-label="Open navigation"
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>


        <Link
          to="/"
          className="mobile-brand"
          onClick={closeMobileMenu}
        >

          <span className="brand-paw">
            🐾
          </span>

          <span>
            PetCare
          </span>

        </Link>


        <Link
          to="/cart"
          className="mobile-cart-button"
          onClick={closeMobileMenu}
        >

          🛒

          {cartCount > 0 && (
            <span>
              {cartCount}
            </span>
          )}

        </Link>

      </header>


      {/* =====================================================
          MOBILE OVERLAY
          ===================================================== */}

      {mobileMenuOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={closeMobileMenu}
        />
      )}


      {/* =====================================================
          SIDEBAR
          ===================================================== */}

      <aside
        className={
          mobileMenuOpen
            ? "petcare-sidebar mobile-open"
            : "petcare-sidebar"
        }
      >

        {/* BRAND */}

        <div className="sidebar-brand">

          <Link
            to="/"
            onClick={closeMobileMenu}
          >

            <div className="sidebar-brand-icon">
              🐾
            </div>

            <div>

              <strong>
                PetCare
              </strong>

              <span>
                happy pets · happy lives
              </span>

            </div>

          </Link>

        </div>


        {/* PET PARENT MINI PROFILE */}

        <div className="sidebar-user-card">

          <div className="sidebar-user-avatar">
            P
          </div>

          <div className="sidebar-user-info">

            <strong>
              Priya
            </strong>

            <span>
              Pet Parent
            </span>

          </div>

          <Link
            to="/profile"
            className="sidebar-user-arrow"
            onClick={closeMobileMenu}
          >
            →
          </Link>

        </div>


        {/* MAIN NAVIGATION */}

        <nav className="sidebar-navigation">

          <div className="sidebar-section-label">
            MAIN MENU
          </div>


          {navigation.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-nav-link active"
                  : "sidebar-nav-link"
              }
            >

              <span className="sidebar-nav-icon">
                {item.icon}
              </span>

              <span className="sidebar-nav-label">
                {item.label}
              </span>

              {item.badge > 0 && (
                <span className="sidebar-cart-badge">
                  {item.badge}
                </span>
              )}

            </NavLink>

          ))}


          {/* ACCOUNT */}

          <div className="sidebar-section-label account-label">
            ACCOUNT
          </div>


          {accountNavigation.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-nav-link active"
                  : "sidebar-nav-link"
              }
            >

              <span className="sidebar-nav-icon">
                {item.icon}
              </span>

              <span className="sidebar-nav-label">
                {item.label}
              </span>

            </NavLink>

          ))}

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">

          <div className="sidebar-help-card">

            <div className="sidebar-help-icon">
              💬
            </div>

            <div>

              <strong>
                Need help?
              </strong>

              <span>
                We're here for you.
              </span>

            </div>

            <button type="button">
              →
            </button>

          </div>


          <div className="sidebar-footer">

            <span>
              PetCare Platform
            </span>

            <span>
              v1.0
            </span>

          </div>

        </div>

      </aside>


      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="petcare-main-content">

        {children}

      </main>

    </div>
  );
}

export default DashboardLayout;