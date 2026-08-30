import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PetDetails() {
  const pets = useSelector(
    (state) => state.pets.pets
  );

  const pet = pets[0];

  if (!pet) {
    return (
      <div className="empty-state">
        <div>🐾</div>

        <h3>
          No pet profile found
        </h3>

        <Link
          to="/pets"
          className="btn btn-petcare"
        >
          Go to My Pets
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/pets"
        className="back-link"
      >
        ← Back to My Pets
      </Link>

      <div className="pet-details-hero mt-3">
        <div className="pet-details-avatar">
          {pet.emoji}
        </div>

        <div>
          <span>
            PET PROFILE
          </span>

          <h1>
            {pet.name}
          </h1>

          <p>
            {pet.breed} · {pet.age} years old
          </p>
        </div>

        <div className="pet-detail-score">
          <strong>
            {pet.healthScore}%
          </strong>

          <span>
            Health Score
          </span>
        </div>
      </div>

      <div className="row g-4 mt-1">
        <div className="col-lg-8">
          <div className="dashboard-card">
            <div className="card-heading">
              <div>
                <small>PROFILE</small>
                <h3>
                  About {pet.name}
                </h3>
              </div>
            </div>

            <div className="pet-information-grid">
              <div>
                <span>TYPE</span>
                <strong>{pet.type}</strong>
              </div>

              <div>
                <span>BREED</span>
                <strong>{pet.breed}</strong>
              </div>

              <div>
                <span>AGE</span>
                <strong>{pet.age} years</strong>
              </div>

              <div>
                <span>WEIGHT</span>
                <strong>{pet.weight} kg</strong>
              </div>

              <div>
                <span>VACCINATION</span>
                <strong>
                  {pet.vaccination}
                </strong>
              </div>

              <div>
                <span>NEXT CHECKUP</span>
                <strong>
                  {pet.nextCheckup}
                </strong>
              </div>
            </div>
          </div>

          <div className="dashboard-card mt-4">
            <div className="card-heading">
              <div>
                <small>WELLNESS</small>
                <h3>
                  Health Overview
                </h3>
              </div>
            </div>

            <div className="health-overview">
              <div>
                <span>Overall Health</span>

                <strong>
                  {pet.healthScore}%
                </strong>
              </div>

              <div className="progress mt-2">
                <div
                  className="progress-bar bg-success"
                  style={{
                    width: `${pet.healthScore}%`,
                  }}
                />
              </div>
            </div>

            <div className="row g-3 mt-3">
              <div className="col-md-4">
                <div className="mini-health">
                  🥗
                  <strong>Nutrition</strong>
                  <span>Excellent</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mini-health">
                  💉
                  <strong>Vaccines</strong>
                  <span>Up to date</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mini-health">
                  🏃
                  <strong>Activity</strong>
                  <span>Very active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="dashboard-card">
            <span className="section-kicker">
              QUICK ACTIONS
            </span>

            <div className="pet-detail-actions">
              <Link to="/appointments">
                📅 Book Appointment
              </Link>

              <Link to="/health">
                ❤️ View Health
              </Link>

              <Link to="/supplies">
                🛒 Shop Supplies
              </Link>

              <Link to="/pets">
                ✏️ Edit Profile
              </Link>
            </div>
          </div>

          <div className="pet-care-tip mt-4">
            <div>
              💡
            </div>

            <h4>
              PetCare Tip
            </h4>

            <p>
              Regular exercise and a balanced
              diet are key to keeping {pet.name}
              happy and healthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetails;