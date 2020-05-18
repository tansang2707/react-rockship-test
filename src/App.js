import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import './App.css';
import AlbumPage from './pages/AlbumPage';
import AlbumDetailPage from "./pages/AlbumDetailPage"
import faker from "faker"
import { setAlbum } from "./store/reducers/album"
import { get } from "lodash"

const fakeData = Array(7).fill(0).map((item, index) => {
  return {
    name: faker.name.findName(),
    image: Array(20).fill(0).map((item, index) => {
      return {
        src: faker.image.image() + `?x=${index}`,
        isLove: (Math.random() >= 0.5),
        id: index
      }
    }),
    date: new Date(),
    description: faker.lorem.paragraph(),
    isLove: false,
    isFavorite: (Math.random() >= 0.5),
    id: index
  }

})

function App() {
  const dispatch = useDispatch()

  const [albumIsActive, setAlbumIsActive] = useState(true)
  const [mediaIsActive, setMediaIsActive] = useState(false)

  const album = useSelector(state => state.album)

  const onClickAlbum = () => {
    setAlbumIsActive(!albumIsActive)
    setMediaIsActive(!mediaIsActive)
  }

  const onClickMedia = () => {
    setMediaIsActive(!mediaIsActive)
    setAlbumIsActive(!albumIsActive)
  }

  useEffect(() => {
    dispatch(setAlbum(fakeData))
  }, [])

  return (
    <main>

      <div className="tabs is-centered">
        <ul>
          <li className={albumIsActive ? "is-active" : ""}><Link onClick={onClickAlbum} to="/">Album ({get(album, "length")})</Link></li>
          <li className={mediaIsActive ? "is-active" : ""}><Link onClick={onClickMedia} to="/media">Media</Link></li>
        </ul>
      </div>

      <Switch>
        <Route path="/" component={AlbumPage} exact />
        <Route path="/:id" component={AlbumDetailPage} exact />
      </Switch>
    </main>
  );
}

export default App;
