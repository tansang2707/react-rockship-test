import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { createNewAlbum } from "../../store/reducers/album"
import { get } from "lodash"
import "./view.scss"

const ModalCreateAlbum = (props) => {

    const dispatch = useDispatch()

    const album = useSelector(state => state.album)

    const { isShow, handleClose } = props

    const [photo, setPhoto] = useState(null)

    const [title, setTitle] = useState("")
    const id = get(album, "length")

    const handleCreateNewAlbum = () => {
        dispatch(createNewAlbum({
            image: [{ src: photo, id: 0 }],
            name: title,
            id: id
        }))
        handleClose()
    }

    const onChangePhoto = (e) => {
        const { files } = e.target
        const file = URL.createObjectURL(files[0])
        setPhoto(file)
    }

    const onChangeTitle = (e) => {
        const { value } = e.target
        setTitle(value)
    }

    return (
        <div className={`modal my-modal-create-album ${isShow ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="container my-container">
                    <div className="field my-title">
                        <h4 className="title is-4">Create New Album</h4>
                    </div>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" required value={title} onChange={onChangeTitle} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Cover Image</label>
                        <div className="control">
                            <input className="input" type="file" accept=".png" placeholder="Text input" required onChange={onChangePhoto} />
                        </div>
                    </div>
                    <div className="field my-button">
                        <button className="button" onClick={handleCreateNewAlbum}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
    )
}

export default ModalCreateAlbum