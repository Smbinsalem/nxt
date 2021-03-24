// import React from "react";
// import universityStore from "../../Store/UniversityStore";
// import { observer } from "mobx-react";

// const UniversityPage = () => {
//   return universityStore.universities.map((university) => {
//     return (
//       <>
//         <p>{university.name}</p>
//         <p>{university.country}</p>
//       </>
//     );
//   });
// };

// export default observer(UniversityPage);

// States
import universityStore from "../../Store/UniversityStore";
import { observer } from "mobx-react";

// Components
import UniversityItem from "../Buttons/UniversityItem";
import SearchBar from "../Buttons/Searchbar";
import { useState } from "react";
import AddButton from "../Buttons/Addbutton";
import styled from "styled-components";
// Styling
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const UniversityList = (props) => {
  const [query, setQuery] = useState("");

  const universityList = universityStore.universities
    .filter((university) =>
      university.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((university) => (
      <UniversityItem
        university={university}
        key={university.id}
        selectUniversity={props.selectUniversity}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{universityList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(UniversityList);
