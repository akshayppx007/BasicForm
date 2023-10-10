import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white py-6" style={{ backgroundColor: "#001524" }}>
      <Link to={"/reviews"}>
        <h1 className="text-4xl font-extrabold italic text-center">
          App Review
        </h1>
      </Link>
      <p className="text-xl font-semibold text-center">
        Gather feedback and reviews for your app
      </p>
    </div>
  );
};

export default Header;
