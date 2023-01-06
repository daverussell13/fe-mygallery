import styles from "./Styles/ButtonSection.module.css";
import AddMemoryFormModal from "./AddMemoryFormModal";
import { useState } from "react";

export default function ButtonSection() {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleNewMemoryButton = () => setShowAddModal(true);

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row gx-md-5 gy-4">
        <div className="col-md-4 px-lg-5 px-sm-5 px-md-3 d-sm-block d-flex justify-content-center">
          <div className={styles.memory_button_container}>
            <div className={styles.add_icon}>+</div>
            <button
              className={styles.memory_button}
              onClick={handleNewMemoryButton}
            >
              New Memory
            </button>
            <AddMemoryFormModal show={showAddModal} setShow={setShowAddModal} />
          </div>
        </div>
        <div className="col-md-8 px-lg-5 px-sm-5 px-md-3 d-sm-block d-flex justify-content-center">
          <div className={styles.sort_filter_button}>Sort and Filter</div>
        </div>
      </div>
    </div>
  );
}
