import { BsPlusCircle } from "react-icons/bs";
import React, { useState } from "react";
import UniversityModal from "../Modal/UniversityModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <UniversityModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
