import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link
            to="/"
            // to={{
            //   pathname: "/about",
            //   search: "?sort=name",
            //   hash: "#helloworld",
            // }}
          >
            Back To Home
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
