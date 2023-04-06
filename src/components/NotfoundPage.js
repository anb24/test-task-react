import { Link } from "react-router-dom";

function NotfoundPage() {
    return (
        <div>
            <p className="error">404</p>
            <Link to="/">домой</Link>
        </div>
    )
}

export default NotfoundPage;
