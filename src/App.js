import { decrement, increment, } from './Reducers/counter';
import{useSelector,useDispatch} from  'react-redux'


const App=()=> {
  const {count}=useSelector(state=>state)
  const dispatch=useDispatch()
  return(
    <>
    <diV>Counter:{count}</diV>
    <button onClick={()=>dispatch(increment())}>INCREMENT</button>
    <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </>
  )
}

export default App