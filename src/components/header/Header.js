import "./header.css";

const Header = () => {
  return (
    <div>
      <span onClick={() => window.scroll(0, 0)} className="header">
        BeeFilm📽️
      </span>
    </div>
  );
};

export default Header;
