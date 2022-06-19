import {
  Route,
  Routes,
  Navigate,
  Outlet,
  useRoutes,

} from 'react-router-dom'
import NotFound from '../pages/NotFound'
import TopList from '../pages/discover/TopList'
import PlayList from '../pages/discover/PlayList'
import Mine from '../pages/Mine'
import { LazyLoad } from '../utils'
import routes from './routes'


export default function(){
  const element = useRoutes(routes)

  console.log(element)

  return (
    <Routes>
      <Route path='/discover' element={(
        <div>
          <h1>Home</h1>
          <Outlet />
        </div>
      )}>
        <Route index element={<TopList />}/>

        <Route path='toplist' element={<TopList />}/>
        <Route path='playlist' element={LazyLoad('discover/PlayList')}/>

      </Route>
      <Route path='/my/:kind' element={<Mine />}/>
      <Route path='/friend' element={<h1>Friend</h1>}/>
      <Route path='/' element={<Navigate to='/discover'/>}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
