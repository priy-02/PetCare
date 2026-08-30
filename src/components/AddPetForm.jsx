import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPet } from "../redux/slices/petSlice";

function AddPetForm({ onClose }) {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [type, setType] = useState("Dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const submit = (e) => {

    e.preventDefault();

    if (!name || !breed) {
      alert("Please enter pet name and breed.");
      return;
    }

    dispatch(
      addPet({
        id: Date.now(),
        name,
        type,
        breed,
        age: Number(age),
        weight: Number(weight),
        healthScore: 100,
        vaccination: "Not updated",
        nextCheckup: "Not scheduled",
        emoji:
          type === "Cat"
            ? "🐈"
            : "🐕",
      })
    );

    onClose();
  };

  return (
    <div className="pet-modal">

      <div className="pet-modal-card">

        <div className="d-flex justify-content-between">

          <div>
            <span className="section-kicker">
              NEW PROFILE
            </span>

            <h2>
              Add Your Pet 🐾
            </h2>

            <p>
              Tell us a little about your furry friend.
            </p>
          </div>

          <button
            className="btn-close"
            onClick={onClose}
          />

        </div>

        <form
          onSubmit={submit}
          className="mt-4"
        >

          <div className="mb-3">

            <label className="form-label">
              Pet Name
            </label>

            <input
              className="form-control"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="e.g. Bruno"
            />

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Type
              </label>

              <select
                className="form-select"
                value={type}
                onChange={(e) =>
                  setType(e.target.value)
                }
              >

                <option>
                  Dog
                </option>

                <option>
                  Cat
                </option>

              </select>

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Breed
              </label>

              <input
                className="form-control"
                value={breed}
                onChange={(e) =>
                  setBreed(e.target.value)
                }
                placeholder="Labrador"
              />

            </div>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Age
              </label>

              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) =>
                  setAge(e.target.value)
                }
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Weight (kg)
              </label>

              <input
                type="number"
                className="form-control"
                value={weight}
                onChange={(e) =>
                  setWeight(e.target.value)
                }
              />

            </div>

          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">

            <button
              type="button"
              className="btn btn-light"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-petcare"
            >
              Add Pet
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddPetForm;