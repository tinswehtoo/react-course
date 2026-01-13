import profilepic from "./assets/profilepic.avif";

export default function Card() {
  return (
    <div className="card">
      <img src={profilepic} alt="profile-picture" className="card-image" />
      <h2 className="card-title">Tin Swe Htoo</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
