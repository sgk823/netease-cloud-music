import {
  useSearchParams,
  useParams,
  useLocation,

} from 'react-router-dom'


export default function(props){
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(params)
  console.log(searchParams.get('id'))

  return (
    <div>
      aaa
    </div>
  )
}
