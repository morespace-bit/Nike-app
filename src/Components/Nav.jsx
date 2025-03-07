import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constants";

const Nav = () => {
  const items = navLinks.map((item) => {
    return (
      <li key={item.label}>
        <a href="item.href">{item.label}</a>
      </li>
    );
  });
  return (
    <header className="py-5 px-8 absolute z-10 w-full ">
      <nav className="flex justify-betweencd items-center w-full gap-15">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 "
          />
        </a>
        <ul className="flex justify-between flex-1 gap-16 max-lg:hidden">
          {items}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} height={20} width={20} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
