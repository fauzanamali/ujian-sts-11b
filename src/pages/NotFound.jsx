import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Halaman yang kamu cari tidak ditemukan.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-blue-950"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;