import React from "react";
import { useSelector } from "react-redux";
const VolanterCustom = () => {
  const data = useSelector((state) => state.volunteer.custom);
  return (
    <div>
      <div>{data.description}</div>
    </div>
  );
};

export default VolanterCustom;
