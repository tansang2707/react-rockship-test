import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineStar } from "react-icons/ai"
import Lightbox from "react-image-lightbox"
import { useSelector } from "react-redux"
import { get } from "lodash"

import "./view.scss"
import "react-image-lightbox/style.css"

const AlbumDetailItem = (props) => {

    const { data, handleToggleLove } = props
    const albumDetail = useSelector(state => state.albumDetail)
    const images = get(albumDetail, "image")
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(data.id)

    return (
        <>
            <div className="card my-card-detail">
                <div className="card-image">
                    <figure className="image is-4by3" onClick={() => setIsOpen(true)} >
                        <img src={data.src} alt="my-alt" />
                    </figure>
                    <footer className="card-footer my-footer">
                        <div>
                            {data.isLove ? <AiFillHeart className="icon icon-fill-heart" onClick={handleToggleLove} /> : <AiOutlineHeart className="icon " onClick={handleToggleLove} />}
                        </div>
                        <div>
                            <AiOutlineStar className="icon " />
                        </div>
                    </footer>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex].src}
                    nextSrc={images[(photoIndex + 1) % images.length].src}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                    onCloseRequest={() => setIsOpen(!isOpen)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex(
                            (photoIndex + 1) % images.length)
                    }
                />
            )}
        </>
    )
}

export default AlbumDetailItem