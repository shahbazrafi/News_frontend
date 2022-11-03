import { Link } from "react-router-dom"

export default function Header({username}) {

    return <><Link to="/"><span>Home</span></Link><span> Username: {username}</span></>
}