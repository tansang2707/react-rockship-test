import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import { useParams, useHistory } from "react-router-dom"
import moment from "moment"
import { get, map } from "lodash"

import { setAlbumDetail, toggleLove } from "../../store/reducers/albumDetail"
import AlbumDetailItem from "../../components/AlbumDetailItem"
import AddPhotoCard from '../../components/AddPhotoCard';
import "./view.scss"

const AlbumDetailPage = () => {

    const album = useSelector(state => get(state, "album"))
    const albumDetail = useSelector(state => get(state, "albumDetail"))
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleToggleLove = (id) => {
        dispatch(toggleLove(id))
    }

    useEffect(() => {
        dispatch(setAlbumDetail(album[params.id]))
    }, [])

    const renderListPhoto = () => {
        return map(get(albumDetail, "image"), (item, index) => {
            return (
                <div className="column is-one-quarter" key={index}>
                    <AlbumDetailItem data={item} key={index} handleToggleLove={() => handleToggleLove(item.id)} />
                </div>
            )
        })
    }
    return (
        <>
            {albumDetail && (
                < div className="container my-album-detail">
                    <div className="container">
                        <div className="columns my-title" style={{ backgroundColor: "#FFF" }}>
                            <div className="column">
                                <div className="column-item">
                                    <h4 className="title is-4">{get(albumDetail, "name")}</h4>
                                    {moment(get(albumDetail, "date")).format("DD-MM-YY hh:mm:ss")}
                                </div>
                                <div className="column-item">
                                    {get(albumDetail, "description")}
                                </div>
                            </div>
                            <div className="column">
                                <div className="column-item my-favorite">
                                    {get(albumDetail, "isFavorite")
                                        ? <AiFillStar className="icon icon-fill-star" />
                                        : <AiOutlineStar className="icon" />
                                    }
                                    <div>Favorite</div>
                                </div>
                                <div className="column-item column-quality-photo">{get(albumDetail, "image.length")} photos</div>
                            </div>
                            <div className="icon-menu" onClick={() => history.push('/')}>
                                <BsThreeDotsVertical className="icon-3dots" />
                            </div>
                        </div>
                    </div>
                    <div className="columns my-columns">
                        <div className="column is-one-quarter">
                            <AddPhotoCard />
                        </div>
                        {renderListPhoto()}
                    </div>
                </div >)
            }
        </>
    )
}

export default AlbumDetailPage