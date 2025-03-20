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
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?city,travel')" }}>
      <Head>
        <title>WanderWorth</title>
      </Head>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/80 p-10 rounded-xl shadow-xl text-center backdrop-blur-md">
        <h1 className="text-5xl mb-6 font-extrabold text-gray-800">WanderWorth</h1>
        <form onSubmit={handleSubmit} className="w-full flex items-center justify-center">
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full max-w-md p-4 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-purple-400 text-xl"
            placeholder="Enter your budget..."
            autoFocus
          />
        </form>
        <p className="mt-6 text-gray-500">Press <kbd>/</kbd> to focus</p>
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
