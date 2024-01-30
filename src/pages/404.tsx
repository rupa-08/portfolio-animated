const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-1">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-2xl text-light-3 mb-8">Page Not Found</p>
        <p className="text-lg text-light-3 mb-8">
          Oops! It seems like you've ventured into the unknown. Let's get you
          back on track!
        </p>

        <a
          href="/"
          className=" text-blue-500 hover:underline primary-button w-max"
        >
          Return to Portfolio
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
