import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io"

import ModalCreateAlbum from '../ModalCreateAlbum';
import "./view.scss"

const AlbumItemCreate = () => {

    const [isShow, setIsShow] = useState(false)
    const handleShowModalAddAlbum = () => {
        setIsShow(!isShow)
    }

    return (
        <>
            <div className="card my-card-add" >
                <div className="card-image">
                    <figure className="image is-4by3" onClick={handleShowModalAddAlbum}>
                        <IoIosAddCircleOutline className="add-icon" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 my-title">Create New Album</p>
                        </div>
                    </div>
                </div>
            </div>
            <ModalCreateAlbum isShow={isShow} handleClose={handleShowModalAddAlbum} />
        </>
    )
}

export default AlbumItemCreate