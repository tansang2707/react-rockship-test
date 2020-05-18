import React from 'react';
import { AiOutlineHeart, AiOutlineStar, AiFillStar, AiFillHeart } from "react-icons/ai"
import { useHistory } from "react-router-dom"
import { get, filter } from "lodash";

import "./view.scss"

const AlbumItem = (props) => {
    const { data, handleToggleFavorite } = props
    const image = get(data, "image", [])
    const history = useHistory()
    const heart = filter(image, item => item.isLove === true)

    const onClickAlbum = () => {
        history.push(`/${get(data, "id")}`)
    }

    return (

        <div className="card my-card" >
            <div className="card-image">
                <figure className="image is-4by3" onClick={onClickAlbum}>
                    <img src={get(image[0], "src")} alt="rock-ship-test" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content" onClick={onClickAlbum}>
                        <p className="title is-4">{get(data, "name")}</p>
                    </div>
                </div>
                <div className="content">
                    <p>{get(data, "image.length")} photos, {get(data, "video.length", 0)} videos</p>
                </div>
            </div>
            <footer className="card-footer">
                {
                    heart && heart.length > 0 ?
                        (<div>
                            <AiFillHeart className="icon icon-fill-heart" /> {get(heart, "length")}
                        </div>) :
                        (<div>
                            <AiOutlineHeart className="icon" /> 0
                            </div>)
                }
                <div>
                    {
                        get(data, "isFavorite") ? (
                            <AiFillStar className="icon icon-fill-star" onClick={handleToggleFavorite} />
                        ) : (<AiOutlineStar className="icon" onClick={handleToggleFavorite} />)
                    }
                </div>
            </footer>
        </div>
    )
}

export default AlbumItem