import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="p-5">
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-[5%]">
          <img
            src="https://i.ibb.co/dtcPR7B/Selected-Prayers-Prophet-Mohammad.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex flex-col justify-center gap-5 ">
            <h1 className="text-5xl font-bold">Find Your Favourite Books</h1>
            <Link to='/ListedBooks' className="btn btn-success w-[30%] text-white">View The List</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
