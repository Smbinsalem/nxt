// // Styling
// const ListWrapper = styled.div`
//   align-items: center;
//   justify-content: center;
//   display: flex;
// `;
// // States
// import universityStore from "../stores/UniversityStore";
// import { observer } from "mobx-react";

// // Components
// import UniversityItem from "./UniversityItem";
// import SearchBar from "./SearchBar";
// import { useState } from "react";
// import AddButton from "./AddButton";

// const UniversityList = (props) => {
//   const [query, setQuery] = useState("");

//   const universityList = universityStore.unversities
//     .filter((university) =>
//       university.name.toLowerCase().includes(query.toLowerCase())
//     )
//     .map((university) => (
//       <UniversityItem
//         university={university}
//         key={university.id}
//         selectUniversity={props.selectUniversity}
//       />
//     ));

//   return (
//     <div>
//       <SearchBar setQuery={setQuery} />
//       <ListWrapper>{universityList}</ListWrapper>
//       <AddButton />
//     </div>
//   );
// };

// export default observer(UniversityList);
