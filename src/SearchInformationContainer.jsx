/* eslint-disable react/prop-types */
const SearchInformationContainer = (props) => {
  return (
    <>
      <div className="bg-secondary mx-4 xl:mx-24 mt-6 p-10 rounded-xl">
        <p className="font-bold text-3xl">
          <span className="text-primary">Search For </span> {props.value}
        </p>
      </div>
    </>
  );
};

export default SearchInformationContainer;
