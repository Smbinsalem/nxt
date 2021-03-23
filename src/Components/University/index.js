import React from "react";
import {
  UniversitiesContainer,
  UniversityWrapper,
  UniversitiesHeading,
  UniversityTitle,
  UniversityCard,
  UniversityImg,
  UniversityInfo,
  UniversityDesc,
  UniversityPrice,
  UniversityButton,
} from "./UniversityStyle";

const Listing = ({ heading, data }) => {
  return (
    <UniversitiesContainer>
      <UniversitiesHeading>{heading}</UniversitiesHeading>
      <UniversityWrapper>
        {data.map((University, index) => {
          return (
            <UniversityCard key={index}>
              <UniversityImg src={University.img} alt={University.alt} />
              <UniversityInfo>
                <UniversityTitle>{University.name}</UniversityTitle>
                <UniversityDesc>{University.desc}</UniversityDesc>
                <UniversityPrice> {"Hello World"} </UniversityPrice>
                <UniversityButton>{University.button}</UniversityButton>
              </UniversityInfo>
            </UniversityCard>
          );
        })}
      </UniversityWrapper>
    </UniversitiesContainer>
  );
};

export default Listing;
