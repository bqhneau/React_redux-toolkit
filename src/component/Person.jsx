import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from '../store/modules/counterSlice'

export default function Person() {
    const { value,list} = useSelector((state) => {
        return state.counter
    })

    const dispatch = useDispatch()

    return (
        <>
            <h1>person</h1>
            <div>读取数据</div>
            <h2>
                value:{value}
                list:{list}
            </h2>
            <button onClick={() => {
                // 相当于 dispatch({ payload: 2,type: "counter/increment"})
                dispatch(increment(2))
            }}>increment</button>
            <button onClick={() => {
                dispatch(decrement(2))
            }}>decrement</button>
        </>
    )
}