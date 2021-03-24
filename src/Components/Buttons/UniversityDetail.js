// States
import universityStore from "../../Store/UniversityStore";
import { observer } from "mobx-react";
import { Link, Redirect, useParams } from "react-router-dom";
import styled from "styled-components";
// Components
import DeleteButton from "./Deletebutton";
// Styling
const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

const UniversityDetail = (props) => {
  const universityId = useParams().universityId;
  const university = universityStore.universities.find(
    (university) => university.id === +universityId
  );

  if (!university) return <Redirect to="/universities" />;

  return (
    <DetailWrapper>
      <Link to="/universities">
        <p onClick={props.selectUniversity}>Back to Universitys</p>
      </Link>
      <h1>{university.name}</h1>
      <h3>{university.country}</h3>
      <DeleteButton universityId={university.id} />
    </DetailWrapper>
  );
};

export default observer(UniversityDetail);
