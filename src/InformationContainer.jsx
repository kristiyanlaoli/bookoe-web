/* eslint-disable react/prop-types */
const InformationContainer = (props) => {
  return (
    <>
      <div className="bg-secondary mx-4 xl:mx-24 p-10 mt-6 rounded-xl">
        <p className="font-bold text-3xl">
          <span className="text-primary">{props.value}</span> Collection
        </p>
      </div>
    </>
  );
};

export default InformationContainer;
