import { Link } from "react-router";

const cards = [
  {
    id: 1,
    title: "1.",
    description: "Cara mendaftar akun.",
     description2: "Petunjuk langkah demi langkah mendaftar.",
  },
  {
    id: 2,
    title: "2.",
    description: "Metode pembayaran.",  
    description2: "Daftar metode pembayaran yang didukung.",
  },
  {
    id: 3,
    title: "3.",
    description: "Kebijakan pengembalian.",
     description2: "Syarat dan ketentuan pengembalian dana.",
  },
];

const Home = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Pertanyaan Umum
        </h1>

        <p className="mt-2 text-gray-600">
         Temukan jawaban dari pertanyaan yang sering ditanyakan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {card.title}
            </h2>
            <p className="mt-3 font-medium text-xl text-black">
              {card.description}
            </p>

             <p className="mt-3 text-gray-600">
              {card.description2}
            </p>

            <Link
              to={`/detail/${card.id}`}
              className="mt-6 inline-block rounded-lg bg-black px-4 py-2 font-medium text-white transition hover:bg-blue-950"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;