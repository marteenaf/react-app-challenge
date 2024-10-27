import { useNavigate } from "react-router"
function LogoutButton() {
    const navigate = useNavigate();
    return (<button onClick={() => { navigate("/") }}>Logout</button>)
}

export default LogoutButton;