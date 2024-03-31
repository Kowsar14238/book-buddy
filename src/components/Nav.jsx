import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navbar bg-base-100 lg:flex lg:flex-row px-4 py-1 shadow-lg fixed z-10">
        <div className="flex-1">
          <Link to='/' className=" text-xl gap-0 font-bold">
            Book<span className="text-blue-700">Buddy</span>
          </Link>
        </div>
        <div className="flex-none lg:basis-2/4 ">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink to='/' className={({isActive}) => isActive ? 'font-bold text-lime-700 border-2 border-lime-500 px-2' : 'font-bold' }>
              Home
            </NavLink>
            <NavLink to='/ListedBooks' className={({isActive}) => isActive ? 'font-bold text-lime-700 border-2 border-lime-500 px-2' : 'font-bold' }>
            Listed Books
            </NavLink>
            <NavLink to='/PagesRead' className={({isActive}) => isActive ? 'font-bold text-lime-700 border-2 border-lime-500 px-2' : 'font-bold' }>
            Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-3">
          <button className="btn btn-success text-white">Sign In</button>
          <button className="btn btn-info text-white">Sign Up</button>
        </div>
      </div>
    );
};

export default Nav;