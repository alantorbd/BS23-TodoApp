import { Link } from "react-router";
function FeedBack404() {
  return (
    <main className="grid min-h-full place-items-center bg-green-900 h-screen px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-green-200">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-green-300 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-gray-950 shadow-xs hover:bg-green-700 "
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default FeedBack404;
