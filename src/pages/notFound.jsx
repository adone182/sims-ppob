import { Links } from "../components/atoms/Links";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Links
          to="/"
          className="mt-6 inline-block py-2 px-6 text-red-500 hover:bg-red-600 hover:text-white hover:rounded-md"
        >
          Go Back Home
        </Links>
      </div>
    </div>
  );
};
