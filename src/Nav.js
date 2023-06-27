import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {

    // const navigate = useNavigate()

    // const mmd = () => {
    //     navigate(`/mmd`)
    // }

    // const app = () => {
    //     navigate('/item')
    // }

    // const viking = () => {
    //     navigate('/viking')
    // }

    // const replaceShow = (i) => {
    //     navigate(`/about`,{replace:true})
    // }
    return (
        <div>
            <ul>
                <Link to={'/mmd'}>MMD 人物</Link>
                <Link to={'/mmd'}>MMD 人物</Link>
                <Link to={'/mmd'}>MMD 人物</Link>
            </ul>
        </div>
    )
}
