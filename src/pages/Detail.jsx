import { Link, useParams } from "react-router";

const cards = {
  1: {
    title: "Detail HOME - ID: 1",
    description:
      "Ini adalah halaman detail dari Card One.",
  },
  2: {
    title: "Detail HOME - ID: 2",
    description:
      "Ini adalah halaman detail dari Card Two.",
  },
  3: {
    title: "Detail HOME - ID: 3",
    description:
      "Ini adalah halaman detail dari Card Three.",
  },
};

const Detail = () => {
  const { id } = useParams();

  const card = cards[id];

  if (!card) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Data Tidak Ditemukan
        </h1>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-black-600 px-5 py-2 text-white hover:bg-black-700"
        >
          Kembali ke Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-xl border bg-white p-8 shadow-sm">
      <span className="text-sm font-medium text-black-600">
        Detail Card
      </span>

      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        {card.title}
      </h1>

      <p className="mt-4 leading-7 text-gray-600">
        {card.description}
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-gray-900 px-5 py-2 font-medium text-white hover:bg-gray-800"
      >
         Kembali
      </Link>
    </div>
  );
};

export default Detail;