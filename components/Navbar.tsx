import Link from "next/link";
import Butoon from "./Butoon";

const Navbar = () => {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 bg-light border-b border-dark-10 z-[100] ">
      <div className="wrapper w-full h-full flex justify-between items-center">
        {/* NAV LEFT */}
        <nav>
          <Link href="/" className="text-xl font-semibold link-item">
            Dazzle Mart
          </Link>
        </nav>
        {/* NAV mid */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link className="link-item" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-item" href="/">
                Products
              </Link>
            </li>
            <li>
              <Link className="link-item" href="/">
                About
              </Link>
            </li>
            <li>
              <Link className="link-item" href="/">
                Contract
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV Right */}
        <nav>
          <Butoon herf="/login" placeholder="login" color="green" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
