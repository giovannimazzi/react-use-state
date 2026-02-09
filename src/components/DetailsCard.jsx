export default function DetailsCard({ title, description }) {
  return (
    <div className="card my-5">
      <div className="card-body">
        <h2 className="h5 card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
