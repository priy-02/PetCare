import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Pets() {
  const pets = useSelector(
    (state) => state.pets?.pets || []
  );

  // Demo pets
  // These are shown when Redux does not contain pets yet.
  const demoPets = [
    {
      id: "bruno",
      name: "Bruno",
      breed: "Golden Retriever",
      age: "4 years",
      weight: "28 kg",
      gender: "Male",
      status: "Healthy",
      wellness: 86,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
    },

    {
      id: "luna",
      name: "Luna",
      breed: "Persian Cat",
      age: "2 years",
      weight: "4.5 kg",
      gender: "Female",
      status: "Healthy",
      wellness: 92,
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85",
    },

    {
      id: "coco",
      name: "Coco",
      breed: "Beagle",
      age: "3 years",
      weight: "12 kg",
      gender: "Female",
      status: "Good",
      wellness: 78,
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=85",
    },
  ];

  // Use real Redux pets if available.
  // Otherwise show demo pets.
  const displayPets =
    pets.length > 0 ? pets : demoPets;

  const averageWellness =
    displayPets.length > 0
      ? Math.round(
          displayPets.reduce(
            (total, pet) =>
              total + Number(pet.wellness || 0),
            0
          ) / displayPets.length
        )
      : 0;

  return (
    <div className="pets-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pets-page-hero">

        <div className="pets-hero-content">

          <span className="pets-eyebrow">
            MY PET FAMILY 🐾
          </span>

          <h1>
            Meet the little
            <br />
            <span>loves of your life.</span>
          </h1>

          <p>
            Keep all your pet information together.
            Track their wellness, manage their care
            and make every day a little happier.
          </p>

          <Link
            to="/pets/add"
            className="pets-add-main-button"
          >
            + Add a New Pet
          </Link>

        </div>


        <div className="pets-hero-visual">

          <div className="pets-hero-photo">

            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85"
              alt="Happy dog"
            />

          </div>

          <div className="pets-hero-bubble bubble-one">
            🐾
          </div>

          <div className="pets-hero-bubble bubble-two">
            ❤️
          </div>

        </div>

      </section>


      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <section className="pets-summary">

        <div className="pets-summary-card">

          <div className="pets-summary-icon green">
            🐾
          </div>

          <div>

            <strong>
              {displayPets.length}
            </strong>

            <span>
              Happy Pets
            </span>

          </div>

        </div>


        <div className="pets-summary-card">

          <div className="pets-summary-icon pink">
            ❤️
          </div>

          <div>

            <strong>
              {averageWellness}%
            </strong>

            <span>
              Avg. Wellness
            </span>

          </div>

        </div>


        <div className="pets-summary-card">

          <div className="pets-summary-icon blue">
            💉
          </div>

          <div>

            <strong>
              100%
            </strong>

            <span>
              Vaccinations
            </span>

          </div>

        </div>


        <div className="pets-summary-card">

          <div className="pets-summary-icon orange">
            📅
          </div>

          <div>

            <strong>
              2
            </strong>

            <span>
              Upcoming Visits
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          PET LIST
      ===================================================== */}

      <section className="pets-list-section">

        <div className="pets-list-heading">

          <div>

            <span>
              YOUR PET FAMILY
            </span>

            <h2>
              All my pets
            </h2>

          </div>

          <Link
            to="/pets/add"
            className="pets-add-small-button"
          >
            + Add Pet
          </Link>

        </div>


        {/* =================================================
            PET GRID
        ================================================= */}

        <div className="professional-pets-grid">

          {displayPets.map((pet) => (

            <article
              className="professional-pet-card"
              key={pet.id}
            >

              {/* PET IMAGE */}

              <div className="professional-pet-image">

                <img
                  src={pet.image}
                  alt={pet.name}
                  loading="lazy"
                />

                <span className="pet-health-badge">
                  ✓ {pet.status || "Healthy"}
                </span>

                <button
                  type="button"
                  className="pet-favorite-button"
                  aria-label={`Favorite ${pet.name}`}
                >
                  ♡
                </button>

              </div>


              {/* PET CONTENT */}

              <div className="professional-pet-content">

                <div className="pet-name-row">

                  <div>

                    <h3>
                      {pet.name}
                    </h3>

                    <span>
                      {pet.breed}
                    </span>

                  </div>

                  <span className="pet-gender">

                    {pet.gender === "Female"
                      ? "♀"
                      : "♂"}

                  </span>

                </div>


                {/* BASIC DETAILS */}

                <div className="pet-basic-details">

                  <div>

                    <small>
                      Age
                    </small>

                    <strong>
                      {pet.age}
                    </strong>

                  </div>


                  <div>

                    <small>
                      Weight
                    </small>

                    <strong>
                      {pet.weight}
                    </strong>

                  </div>


                  <div>

                    <small>
                      Health
                    </small>

                    <strong>
                      {pet.wellness || 0}%
                    </strong>

                  </div>

                </div>


                {/* WELLNESS */}

                <div className="pet-wellness">

                  <div className="pet-wellness-heading">

                    <span>
                      Wellness score
                    </span>

                    <strong>
                      {pet.wellness || 0}%
                    </strong>

                  </div>


                  <div className="pet-wellness-bar">

                    <div
                      style={{
                        width: `${pet.wellness || 0}%`,
                      }}
                    />

                  </div>

                </div>


                {/* ACTIONS */}

                <div className="pet-card-actions">

                  <Link
                    to={`/pets/${pet.id}`}
                    className="pet-view-button"
                  >
                    View Profile
                  </Link>


                  <Link
                    to="/appointments"
                    className="pet-book-button"
                  >
                    Book Care
                  </Link>

                </div>

              </div>

            </article>

          ))}


          {/* =================================================
              ADD PET CARD
          ================================================= */}

          <Link
            to="/pets/add"
            className="add-pet-card"
          >

            <div className="add-pet-circle">
              +
            </div>

            <h3>
              Add another pet
            </h3>

            <p>
              Create a profile for
              your furry friend.
            </p>

          </Link>

        </div>

      </section>


      {/* =====================================================
          CARE BANNER
      ===================================================== */}

      <section className="pets-care-banner">

        <div className="pets-care-image">

          <img
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=85"
            alt="Happy pet"
          />

        </div>


        <div className="pets-care-content">

          <span>
            🐾 PETCARE TIP
          </span>

          <h2>
            Every pet has
            <br />
            their own story.
          </h2>

          <p>
            Keep their profile updated with their
            weight, vaccinations, appointments and
            wellness information.
          </p>

          <Link to="/health">
            Track their health →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Pets;