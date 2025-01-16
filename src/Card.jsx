import profilePic from "./assets/profilepic.jpg";

function Card() {
  return (
    <div className="place-items-center">
      <div className="max-w-sm mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src={profilePic}
          alt="Profile Picture"
        ></img>
        <div className="p-5">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Karl
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            I'm learning react.js to build an attractive website.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
