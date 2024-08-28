function Star({ rating }) {
  if (rating < 2) rating = 2;
  return (
    <>
      {[...Array(rating)].map((_, index) => (
        <span key={index}> &#9733;</span>
      ))}
    </>
  );
}

export default Star;
