import { Link } from "react-router-dom";

function EmptyState({
  icon = "🐾",
  eyebrow = "PETCARE",
  title = "Nothing here yet",
  message = "Let's get something started for your pet.",
  buttonText = "",
  buttonLink = "",
}) {
  return (
    <div className="petcare-empty-state">

      {/* Decorative circles */}

      <div className="empty-decoration empty-decoration-one">
        🐾
      </div>

      <div className="empty-decoration empty-decoration-two">
        ❤️
      </div>


      {/* Main icon */}

      <div className="empty-state-icon">
        {icon}
      </div>


      {/* Small heading */}

      <span className="empty-state-eyebrow">
        {eyebrow}
      </span>


      {/* Main title */}

      <h2>
        {title}
      </h2>


      {/* Description */}

      <p>
        {message}
      </p>


      {/* Optional button */}

      {buttonText && buttonLink && (
        <Link
          to={buttonLink}
          className="empty-state-button"
        >
          {buttonText} →
        </Link>
      )}

    </div>
  );
}

export default EmptyState;