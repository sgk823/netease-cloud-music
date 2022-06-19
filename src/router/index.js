import {
  Route,
  Routes,
  Navigate,
  Outlet,
  useRoutes,

} from 'react-router-dom'
import { LazyLoad } from '../utils'
import routes from './routes'


export default function(){
  const element = useRoutes(routes)

  console.log(element)

  return (
    <></>
  )
}
