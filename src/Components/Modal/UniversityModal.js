import universityStore from "../../Store/UniversityStore";
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const UniversityModal = (props) => {
  const [university, setUniversity] = useState({
    name: "",
    Country: "",
  });

  const handleChange = (event) => {
    setUniversity({ ...university, [event.target.name]: event.target.value });
    console.log(university);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    universityStore.createUniversity(university);
    props.closeModal();
  };
  const CreateButtonStyled = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;
    &:hover {
      color: #fff;
      background: #e31837;
      transition: 0.2s ease-out;
      cursor: pointer;
    }
  `;

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              onChange={handleChange}
            />
          </div>
        </div>
        <CreateButtonStyled>Create</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default UniversityModal;
