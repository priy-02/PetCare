import { useState } from "react";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Priya");
  const [email, setEmail] = useState("priya@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");

  const [notifications, setNotifications] = useState(true);
  const [healthReminders, setHealthReminders] = useState(true);

  const pets = [
    {
      name: "Bruno",
      breed: "Golden Retriever",
      age: "4 years",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=85",
    },
    {
      name: "Luna",
      breed: "Persian Cat",
      age: "2 years",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=85",
    },
  ];

  const saveProfile = () => {
    setEditing(false);
  };

  return (
    <div className="profile-page">

      {/* =====================================================
          PROFILE HERO
          ===================================================== */}

      <section className="profile-hero">

        <div className="profile-hero-content">

          <span>
            PETCARE ACCOUNT 👋
          </span>

          <h1>
            Welcome back,
            <br />
            <strong>{name}.</strong>
          </h1>

          <p>
            Everything about you and your furry family,
            all in one happy place.
          </p>

        </div>


        <div className="profile-hero-pets">

          <div className="profile-hero-pet pet-back">
            <img
              src={pets[1].image}
              alt={pets[1].name}
            />
          </div>

          <div className="profile-hero-pet pet-front">
            <img
              src={pets[0].image}
              alt={pets[0].name}
            />
          </div>

          <div className="profile-hero-heart">
            ❤️
          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN PROFILE AREA
          ===================================================== */}

      <section className="profile-main-layout">

        {/* ===================================================
            LEFT COLUMN
            =================================================== */}

        <div className="profile-left-column">

          {/* PROFILE CARD */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>

                <span>
                  PET PARENT
                </span>

                <h2>
                  Personal information
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setEditing(!editing)}
              >
                {editing ? "Cancel" : "Edit Profile"}
              </button>

            </div>


            <div className="profile-user-section">

              <div className="profile-avatar">
                {name.charAt(0).toUpperCase()}
              </div>

              <div>

                <h3>
                  {name}
                </h3>

                <span>
                  Pet Parent · PetCare member
                </span>

                <small>
                  Member since 2026
                </small>

              </div>

            </div>


            <div className="profile-form">

              <div className="profile-input">

                <label>
                  FULL NAME
                </label>

                {editing ? (
                  <input
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                  />
                ) : (
                  <strong>{name}</strong>
                )}

              </div>


              <div className="profile-input">

                <label>
                  EMAIL ADDRESS
                </label>

                {editing ? (
                  <input
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                  />
                ) : (
                  <strong>{email}</strong>
                )}

              </div>


              <div className="profile-input">

                <label>
                  PHONE NUMBER
                </label>

                {editing ? (
                  <input
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                  />
                ) : (
                  <strong>{phone}</strong>
                )}

              </div>


              <div className="profile-input">

                <label>
                  PET PARENT ID
                </label>

                <strong>
                  PC-2026-0184
                </strong>

              </div>

            </div>


            {editing && (

              <button
                type="button"
                className="save-profile-button"
                onClick={saveProfile}
              >
                Save Changes ✓
              </button>

            )}

          </section>


          {/* ADDRESS */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>

                <span>
                  DELIVERY
                </span>

                <h2>
                  Saved address
                </h2>

              </div>

              <button type="button">
                Edit
              </button>

            </div>


            <div className="profile-address">

              <div className="profile-address-icon">
                🏠
              </div>

              <div>

                <strong>
                  Home
                </strong>

                <p>
                  Priya
                  <br />
                  Hyderabad, Telangana
                  <br />
                  India
                </p>

              </div>

              <span className="default-address">
                DEFAULT
              </span>

            </div>

          </section>


          {/* MY PETS */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>

                <span>
                  YOUR FAMILY
                </span>

                <h2>
                  My pets
                </h2>

              </div>

              <button type="button">
                + Add Pet
              </button>

            </div>


            <div className="profile-pets-list">

              {pets.map((pet) => (

                <div
                  className="profile-pet-item"
                  key={pet.name}
                >

                  <img
                    src={pet.image}
                    alt={pet.name}
                  />

                  <div>

                    <strong>
                      {pet.name}
                    </strong>

                    <span>
                      {pet.breed}
                    </span>

                    <small>
                      {pet.age}
                    </small>

                  </div>

                  <button type="button">
                    View
                  </button>

                </div>

              ))}

            </div>

          </section>

        </div>


        {/* ===================================================
            RIGHT COLUMN
            =================================================== */}

        <aside className="profile-right-column">

          {/* MEMBER CARD */}

          <section className="profile-member-card">

            <div className="profile-member-top">

              <div className="profile-member-avatar">
                {name.charAt(0).toUpperCase()}
              </div>

              <div>

                <strong>
                  {name}
                </strong>

                <span>
                  Gold Pet Parent
                </span>

              </div>

            </div>


            <div className="profile-member-progress">

              <div className="profile-member-progress-header">

                <span>
                  PetCare loyalty
                </span>

                <strong>
                  720 / 1000
                </strong>

              </div>

              <div className="profile-member-progress-bar">

                <div />

              </div>

            </div>


            <p>
              ⭐ 280 more points to unlock your next
              PetCare reward.
            </p>

          </section>


          {/* STATS */}

          <section className="profile-stats-card">

            <div className="profile-stats-header">

              <span>
                YOUR PETCARE JOURNEY
              </span>

              <h2>
                Activity overview
              </h2>

            </div>


            <div className="profile-stat">

              <div className="profile-stat-icon green">
                🐾
              </div>

              <div>

                <strong>
                  2
                </strong>

                <span>
                  Registered pets
                </span>

              </div>

            </div>


            <div className="profile-stat">

              <div className="profile-stat-icon blue">
                📅
              </div>

              <div>

                <strong>
                  8
                </strong>

                <span>
                  Appointments
                </span>

              </div>

            </div>


            <div className="profile-stat">

              <div className="profile-stat-icon orange">
                🛍️
              </div>

              <div>

                <strong>
                  14
                </strong>

                <span>
                  Orders placed
                </span>

              </div>

            </div>


            <div className="profile-stat">

              <div className="profile-stat-icon pink">
                ❤️
              </div>

              <div>

                <strong>
                  92%
                </strong>

                <span>
                  Wellness average
                </span>

              </div>

            </div>

          </section>


          {/* PREFERENCES */}

          <section className="profile-preferences">

            <div className="profile-preferences-header">

              <span>
                PREFERENCES
              </span>

              <h2>
                Your settings
              </h2>

            </div>


            <div className="profile-setting">

              <div>

                <strong>
                  Notifications
                </strong>

                <span>
                  Order and appointment updates
                </span>

              </div>

              <button
                type="button"
                className={
                  notifications
                    ? "profile-toggle active"
                    : "profile-toggle"
                }
                onClick={() =>
                  setNotifications(!notifications)
                }
              >
                <span />
              </button>

            </div>


            <div className="profile-setting">

              <div>

                <strong>
                  Health reminders
                </strong>

                <span>
                  Vaccination and care alerts
                </span>

              </div>

              <button
                type="button"
                className={
                  healthReminders
                    ? "profile-toggle active"
                    : "profile-toggle"
                }
                onClick={() =>
                  setHealthReminders(!healthReminders)
                }
              >
                <span />
              </button>

            </div>


            <div className="profile-setting">

              <div>

                <strong>
                  Language
                </strong>

                <span>
                  English
                </span>

              </div>

              <b>
                ›
              </b>

            </div>


            <div className="profile-setting">

              <div>

                <strong>
                  Privacy & Security
                </strong>

                <span>
                  Manage account security
                </span>

              </div>

              <b>
                ›
              </b>

            </div>

          </section>

        </aside>

      </section>


      {/* =====================================================
          BOTTOM BANNER
          ===================================================== */}

      <section className="profile-bottom-banner">

        <div>

          <span>
            PETCARE COMMUNITY 🐾
          </span>

          <h2>
            You're not just a customer.
            <br />
            You're part of the family.
          </h2>

          <p>
            We're here to make every stage of your
            pet's journey healthier and happier.
          </p>

        </div>


        <div className="profile-banner-pets">

          <span>🐶</span>
          <span>🐱</span>
          <span>🐰</span>

        </div>

      </section>

    </div>
  );
}

export default Profile;