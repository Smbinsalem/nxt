// States
import universityStore from "../../Store/UniversityStore";
// Styling
import styled from "styled-components";

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: blue;
    }
  }
`;

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled
      onClick={() => universityStore.deleteUniversity(props.universityId)}
    >
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
