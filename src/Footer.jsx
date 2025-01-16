function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} My First React Website
        </p>
      </div>
    </footer>
  );
}
export default Footer;
