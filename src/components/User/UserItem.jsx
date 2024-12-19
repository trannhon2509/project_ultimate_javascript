import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'

function UserItem({ id, name, email }) {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);

  const handleToggleModal = () => setShowModal(!showModal);
  const handleToggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <Button variant="warning" size="sm" onClick={handleToggleModal}>Edit</Button>{' '}
          <Button variant="danger" size="sm" onClick={handleToggleDeleteModal}>Delete</Button>
        </td>
      </tr>
      <Modal show={showModal} onHide={handleToggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Edit details for {name}</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggleModal}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={handleToggleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete {name}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggleDeleteModal}>Cancel</Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserItem