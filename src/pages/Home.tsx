import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
        <div>
            <h1>Home</h1>
        </div>

        <Button>
            <Link to="/store">Go to Store</Link>
        </Button>


        </>





    )
}