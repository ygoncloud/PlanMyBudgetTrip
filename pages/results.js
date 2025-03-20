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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <Head>
        <title>Trip Plan Results</title>
      </Head>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-2xl shadow-xl max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Trip Plan for ${budget}</h1>
        {!trip ? (
          <p>Loading your perfect trip...</p>
        ) : (
          <div className="space-y-4">
            <div>
              <h2 className="font-semibold text-lg">Flight</h2>
              <p>{trip.flight}</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Hotel</h2>
              <p>{trip.hotel}</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Extras</h2>
              <p>{trip.extras}</p>
            </div>
            <p className="mt-4 text-gray-500">Remaining Budget: ${trip.remaining}</p>
            <button onClick={() => router.push("/")} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-600">
              Plan Another Trip
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
