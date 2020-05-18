import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash"

import { addPhoto } from "../../store/reducers/albumDetail"
import "./view.scss"

const ModalAddPhoto = (props) => {

    const dispatch = useDispatch()

    const albumDetail = useSelector(state => state.albumDetail)

    const { isShow, handleClose } = props

    const [photo, setPhoto] = useState(null)

    const handleAddPhoto = () => {
        if (photo)
            dispatch(addPhoto({
                src: photo,
                id: get(albumDetail, "image.length"),
                isLove: false
            }))
        handleClose()
    }

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setPhoto(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const onChangePhoto = (e) => {
        const { files } = e.target
        if (files) {
            getBase64(files[0])
        }

    }

    return (
        <div className={`modal my-modal-add-photo ${isShow ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="container my-container">
                    <div className="field my-title">
                        <h4 className="title is-4">Add Photo</h4>
                    </div>
                    <div className="field">
                        <label className="label">Photo</label>
                        <div className="control">
                            <input className="input" type="file" accept=".png" placeholder="Text input" required onChange={onChangePhoto} />
                        </div>
                    </div>
                    <div className="field my-button">
                        <button className="button" onClick={handleAddPhoto}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
    )
}

export default ModalAddPhoto