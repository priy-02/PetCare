import { useDispatch } from "react-redux";

import { deletePet } from "../redux/slices/petSlice";

function PetCard({ pet }) {
  const dispatch = useDispatch();

  return (
    <div className="my-pet-card">

      <div className="my-pet-top">

        <div className="large-pet-avatar">
          {pet.emoji}
        </div>

        <button
          className="delete-pet-btn"
          onClick={() => dispatch(deletePet(pet.id))}
        >
          🗑️
        </button>

      </div>

      <div className="my-pet-name">

        <h3>{pet.name}</h3>

        <p>
          {pet.type} · {pet.breed}
        </p>

      </div>

      <div className="my-pet-stats">

        <div>
          <span>Age</span>
          <strong>{pet.age} years</strong>
        </div>

        <div>
          <span>Weight</span>
          <strong>{pet.weight} kg</strong>
        </div>

      </div>

      <div className="my-pet-health">

        <div className="health-header">

          <span>Health Score</span>

          <strong>
            {pet.healthScore}%
          </strong>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${pet.healthScore}%`,
            }}
          />

        </div>

      </div>

      <div className="vaccination-status">

        <span>Vaccination</span>

        <strong>
          ✓ {pet.vaccination}
        </strong>

      </div>

    </div>
  );
}

export default PetCard;