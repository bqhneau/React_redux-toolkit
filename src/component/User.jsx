import { useSelector, useDispatch } from 'react-redux';
import {update} from '../store/modules/userSlice'

export default function User() {
    const { userName, userAge, userPhone } = useSelector((state) => {
        return state.user
    })
    
    const dispatch = useDispatch()
    return (
        <>
            <h1>user</h1>
            <div>用户信息</div>
            <p>用户名：{ userName}</p>
            <p>年龄：{userAge}</p>
            <p>手机号：{userPhone}</p>
            <button onClick={() => {
                dispatch(update())
            }}>更新用户信息</button>
        </>
    )
}