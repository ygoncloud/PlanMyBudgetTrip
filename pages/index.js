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
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center">
        <h1 className="text-6xl mb-12 font-extrabold text-white drop-shadow-lg">WanderWorth</h1>
        <form onSubmit={handleSubmit} className="w-full flex items-center justify-center">
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full max-w-2xl p-6 rounded-full text-center text-xl focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-lg backdrop-blur-md bg-white/80"
            placeholder="Enter your budget..."
            autoFocus
          />
        </form>
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
