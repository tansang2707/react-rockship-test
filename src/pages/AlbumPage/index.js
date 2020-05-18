import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { map, get } from "lodash"

import { toggleFavorite } from "../../store/reducers/album"
import AlbumItem from "../../components/AlbumItem"
import AlbumItemCreate from "../../components/AlbumItemCreate"
import "./view.scss"

const AlbumPage = () => {
    const album = useSelector(state => state.album)
    const dispatch = useDispatch()

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    const renderAlbumList = () => {
        return map(album, item => {
            return (
                <div className="column is-one-quarter" key={get(item, "id")}>
                    <AlbumItem data={item} key={get(item, "id")} handleToggleFavorite={() => handleToggleFavorite(get(item, "id"))} />
                </div>
            )
        })
    }

    return (
        <div className="container my-album-page">
            <div className="columns my-columns">
                <div className="column is-one-quarter">
                    <AlbumItemCreate />
                </div>
                {renderAlbumList()}
            </div>
        </div>
    )
}

export default AlbumPage