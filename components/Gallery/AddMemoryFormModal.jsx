import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { useState } from "react";
import styles from "../Auth/Styles/LoginForm.module.css";
import { toast } from "react-toastify";
import Router from "next/router";
import { clearUserData, getUserData, getUserToken } from "../../helper/auth";

export default function AddMemoryFormModal({ show, setShow }) {
  const [imageUrl, setImageUrl] = useState("");
  const [fileInput, setFileInput] = useState(null);
  const [progress, setProgress] = useState(false);

  function resetImage() {
    setImageUrl("");
    setFileInput(null);
  }

  function handleClose() {
    resetImage();
    setShow(false);
  }

  function changeImage(event) {
    setFileInput(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  }

  async function addMemory(event) {
    event.preventDefault();
    setProgress(true);
    const target = event.target;

    const formData = new FormData();
    formData.append("tag", target.tag.value);
    formData.append("description", target.description.value);
    formData.append("file", fileInput);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/memories`, {
        method: "POST",
        headers: {
          "User-ID": getUserData()?.userID,
          Token: getUserToken(),
        },
        body: formData,
      });

      const status = res.status;
      const resJson = await res.json();

      if (status == 200) {
        toast.success(resJson.message);
      } else if (status == 403) {
        toast.error("Invalid User Credentials! ⛔");
        toast.info("Relogin required ⚠️");
        clearUserData();
        Router.replace("/login");
      } else {
        toast.error(`Something went wrong 🤯!`);
      }
    } catch (err) {
      toast.error(`Something went wrong 🤯!`);
    } finally {
      handleClose();
      event.target.reset();
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
          <Form id="add-memo-form" onSubmit={addMemory}>
            {imageUrl && (
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
                  <Image
                    src={imageUrl}
                    alt="Unsuported File"
                    fill
                    style={{ objectFit: "contain", background: "#d4d4d4" }}
                  />
                </div>
              </Form.Group>
            )}
            <Form.Group controlId="formFile" className="mb-2">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={changeImage} name="file" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Tag</Form.Label>
              <Form.Control type="tag" placeholder="Tag..." name="tag" />
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="add-memo-form">
            Add
          </Button>
        </Modal.Footer>
        {progress && <div className={styles.overlay}></div>}
      </Modal>
    </>
  );
}
