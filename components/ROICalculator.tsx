"use client";
import { motion } from "framer-motion";

interface ROIProps {
  metric: string;
  value: string;
  pitch: string;
}

export default function ROICalculator({ roi }: { roi: ROIProps }) {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            The ROI Math Is Simple
          </h2>
          <p className="text-gray-400 mb-10">
            One client pays for months of marketing
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-[#12121a] rounded-2xl p-8 border border-white/5 flex-1 w-full">
              <div className="text-sm text-gray-400 mb-2">{roi.metric}</div>
              <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {roi.value}
              </div>
            </div>

            <div className="text-3xl text-gray-600">=</div>

            <div className="bg-[#12121a] rounded-2xl p-8 border border-purple-500/20 flex-1 w-full">
              <div className="text-sm text-gray-400 mb-2">
                Marketing Investment
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2-6 Months
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-300 font-medium">
            {roi.pitch}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
