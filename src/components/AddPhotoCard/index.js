import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io"

import ModalAddPhoto from "../ModalAddPhoto"
import "./view.scss"

const AddPhotoCard = () => {

    const [isShow, setIsShow] = useState(false)
    const handleShowModal = () => {
        setIsShow(!isShow)
    }

    return (
        <>
            <div className="card my-add-photo-card">
                <div className="card-image">
                    <figure className="image is-4by3" onClick={handleShowModal}>
                        <IoIosAddCircleOutline className="add-icon" />
                    </figure>
                </div>
                <footer className="card-footer">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 my-title" onClick={handleShowModal}>Add Photo</p>
                        </div>
                    </div>
                </footer>
            </div>
            <ModalAddPhoto isShow={isShow} handleClose={handleShowModal} />
        </>
    )
}

export default AddPhotoCard