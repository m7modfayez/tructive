import { useState } from "react";
import DriverList from "./DriverList";
import AddDriverModal from "./AddDriverModal";

function DriverListWrapper() {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  return (
    <>
      {!showAddModal ? (
        <DriverList onAddClick={handleAddClick} />
      ) : (
        <AddDriverModal show={true} handleClose={handleCloseModal} />
      )}
    </>
  );
}

export default DriverListWrapper;
