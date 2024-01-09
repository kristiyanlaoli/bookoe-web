/* eslint-disable react/prop-types */
function DateFormater(props) {
  const dateObject = new Date(props.date);

  const formattedDate = dateObject.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
}

export default DateFormater;
