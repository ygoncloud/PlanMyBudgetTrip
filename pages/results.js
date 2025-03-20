import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Results() {
  const router = useRouter();
  const { budget } = router.query;
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (budget) {
      fetch(`/api/plan-trip?budget=${budget}`)
        .then((res) => res.json())
        .then((data) => setTrip(data));
    }
  }, [budget]);

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,destination')" }}>
      <Head>
        <title>Trip Plan Results</title>
      </Head>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/90 p-10 rounded-xl shadow-xl max-w-xl text-center backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Trip Plan for ${budget}</h1>
        {!trip ? (
          <p className="text-gray-600">Loading your perfect trip...</p>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg text-purple-600">Flight</h2>
              <p className="text-gray-700">{trip.flight}</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-purple-600">Hotel</h2>
              <p className="text-gray-700">{trip.hotel}</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-purple-600">Extras</h2>
              <p className="text-gray-700">{trip.extras}</p>
            </div>
            <p className="mt-4 text-gray-500">Remaining Budget: ${trip.remaining}</p>
            <button onClick={() => router.push("/")} className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-600 transition-all">
              Plan Another Trip
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

