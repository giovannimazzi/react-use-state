export default function DetailsButton({ title, isActive, parentFnc }) {
  return (
    <button
      className={`btn btn-primary px-3 py-2 me-3 ${isActive ? "btn-warning" : ""}`}
      onClick={() => {
        parentFnc();
      }}
    >
      {title}
    </button>
  );
}
