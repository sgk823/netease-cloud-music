import { useEffect, lazy, Suspense } from "react";
import {
  useNavigate,
  useLocation,
  useParams,
  useMatch,
  
} from 'react-router-dom'


export function Redirect({to}){
  const navigate = useNavigate()

  useEffect(()=>{
    navigate(to, {replace:true})
  }, [])

  return null
}


export function withRouter(Child){
  return (props)=>{
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()

    const router = {
      push(to){
        navigate(to, {replace:false})
      },
      replace(to){
        navigate(to, {replace:true})
      },
      go(n){
        navigate(n)
      }
    }


    return <Child {...props} history={router} 
      location={location} match={{params}}/>
  }
}

export function LazyLoad(path){
  const Comp = lazy(()=>import(`../pages/${path}`))

  return (
    <Suspense fallback={<h1>loading ... </h1>}>
      <Comp />
    </Suspense>
  )
}

