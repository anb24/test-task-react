import { Link } from "react-router-dom";

function NotfoundPage() {
    return (
        <div className="error-box">
            <p className="error__text">404</p>
            <Link className="error__link" to="/">домой</Link>
        </div>
    )
}

export default NotfoundPage;
