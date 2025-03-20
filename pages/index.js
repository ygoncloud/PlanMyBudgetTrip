import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const [budget, setBudget] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget.trim() !== "") {
      router.push(`/results?budget=${budget}`);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
      <Head>
        <title>Travel Budget Planner</title>
      </Head>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/70 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl mb-4 font-bold">Enter Your Travel Budget</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-64 p-3 rounded-xl text-center focus:outline-none"
            placeholder="$1500"
            autoFocus
          />
          <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-600">
            Plan Trip
          </button>
        </form>
        <p className="mt-4 text-gray-600">Press <kbd>/</kbd> to focus</p>
      </motion.div>
      <script>
        {`
          document.addEventListener('keydown', function(e) {
            if (e.key === '/') {
              e.preventDefault();
              document.querySelector('input').focus();
            }
          });
        `}
      </script>
    </div>
  );
}
