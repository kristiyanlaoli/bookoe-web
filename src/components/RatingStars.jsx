/* eslint-disable react/prop-types */
function RatingStars(props) {
  const fullStar = "⭐";
  const halfStar = "☆";
  const emptyStar = "☆";

  const fullStarsCount = Math.floor(props.value);
  const hasHalfStar = props.value % 1 !== 0;

  let ratingString = fullStar.repeat(fullStarsCount);

  if (hasHalfStar) {
    ratingString += halfStar;
  }

  const emptyStarsCount = 5 - Math.ceil(props.value);
  ratingString += emptyStar.repeat(emptyStarsCount);

  return (
    <div className="flex">
      <p className="text-sm text-white font-bold w-8 h-8 py-1 py-auto text-center bg-yellow-400 rounded-full ">
        {props.value}
      </p>
      <div className="ml-2 rating rating-md">{ratingString}</div>
    </div>
  );
}

export default RatingStars;
