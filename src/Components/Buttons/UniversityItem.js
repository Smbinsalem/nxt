// Components
import { observer } from "mobx-react";
import DeleteButton from "../Buttons/Deletebutton";
// Styling
import { ProductWrapper } from "./Buttons";

import { Link } from "react-router-dom";

// Listing Items
const UniversityItem = (props) => {
  const university = props.university;

  return (
    <ProductWrapper>
      <Link to={`/universities/${university.id}`}></Link>
      <p>{university.name}</p>
      <p>{university.country}</p>
      <DeleteButton universityId={university.id} />
    </ProductWrapper>
  );
};

export default observer(UniversityItem);
