import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { useState } from "react";

export default function AddMemoryFormModal({ show, setShow }) {
  const [image, setImage] = useState("");

  const handleClose = () => {
    setImage("");
    setShow(false);
  };

  function changeImage(event) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new memory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form encType="multipart/form-data">
            {image && (
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="mb-2"
              >
                <div
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Image src={image} alt="Unsuported File" fill sizes="cover" />
                </div>
              </Form.Group>
            )}
            <Form.Group controlId="formFile" className="mb-2">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={changeImage} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Tag</Form.Label>
              <Form.Control type="tag" placeholder="Tag..." />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
