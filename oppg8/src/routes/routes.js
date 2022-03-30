import { Routes } from 'react-router-dom'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import Navigation from '../components/Navigation'
import MovieService from '../components/MovieService'

export default function Routes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="Movies" element={<Movies />} />
        <Route path="Actors">
          <Route index element={<Actors/>} />
          <Route path=":id" element={<Actors />} />
        </Route>
      </Routes>
    </>
  )
}