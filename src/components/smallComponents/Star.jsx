export default function Star({ rating }) {
  return (
    <>
      {Array.from({ length: rating }, (_, index) => (
        <span key={index}> &#9733;</span>
      ))}
    </>
  );
}
