import { useNavigate } from "react-router"
/**
 * Simple logout button component
 * Used in Main Layout component to provide a logout option in the app main layout
 * Uses react router to navigate back to the login page
 * @returns {JSX.Element}
 */
function LogoutButton() {
    const navigate = useNavigate();
    return (<button onClick={() => { navigate("/") }}>Logout</button>)
}

export default LogoutButton;