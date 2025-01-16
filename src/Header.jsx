function Header() {
  return (
    <header className="rounded grid grid-cols-2 gap-2 p-6 mb-6 dark:bg-gray-800 text-gray-400">
      <h1 className="text-3xl font-bold text-white">My First React Website</h1>
      <nav>
        <ul className="grid grid-cols-3 gap-3 place-items-center">
          <li className="ease-in-out duration-100 hover:font-black text-white">
            <a href="#">Home</a>
          </li>
          <li className="ease-in-out duration-100 hover:font-black text-white">
            <a href="#">About</a>
          </li>
          <li className="ease-in-out duration-100 hover:font-black text-white">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
