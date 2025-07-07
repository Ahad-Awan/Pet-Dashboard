"use client";

import React from "react";
import Image from "next/image";
import { FaBirthdayCake } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { CiGift } from "react-icons/ci";
import { MdOutlinePets } from "react-icons/md";
import { LuBrain, LuStethoscope, LuSmile, LuZap } from "react-icons/lu";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const breedData = [65, 25, 10];
const breedLabels = ["Golden Retriever", "Poodle", "Labrador"];
const breedColors = ["#23444B", "#1CC6DD", "#FFC166"];

const chartData = {
  labels: breedLabels,
  datasets: [
    {
      data: breedData,
      backgroundColor: breedColors,
      borderWidth: 0,
      cutout: "70%",
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  cutout: "70%",
  responsive: true,
  maintainAspectRatio: false,
};

const score = 75;
const maxScore = 100;
const data = {
  datasets: [
    {
      data: [score, maxScore - score, 10],
      backgroundColor: ["#23444B", "#FFC166", "#F5F6F7"],
      borderWidth: 0,
      cutout: "70%",
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  cutout: "70%",
  responsive: true,
  maintainAspectRatio: false,
};

export default function Home() {
  return (
    <div className="grid gap-6 p-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Tommy</h2>
              <p className="text-sm text-gray-500">Cat, Persian</p>
            </div>
            <FiEdit2 className="text-gray-500 cursor-pointer" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="relative w-24 h-24 rounded-full border-4 border-amber-300 flex items-center justify-center">
              <div className="w-21 h-21 rounded-full overflow-hidden">
                <Image
                  src="/cat1.jpeg"
                  alt="Pet Image"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                <FiEdit2 className="text-blue-500" />
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong className="w-20 inline-block">Gender:</strong> Female
              </p>
              <p>
                <strong className="w-20 inline-block">Size:</strong> Medium
              </p>
              <p>
                <strong className="w-20 inline-block">Weight:</strong> 22.2 kg
              </p>
            </div>
          </div>

          <div className="bg-amber-300 mt-6 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-2 text-black font-medium">
              <FaBirthdayCake />
              <span>3 November 2019</span>
            </div>
            <span className="text-sm text-black">6 years old</span>
          </div>
        </div>

        <div className="bg-[#20465c] text-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <span className="bg-amber-300 text-black rounded-full p-2 inline-block mb-4">
              <CiGift className="text-3xl" />
            </span>
            <div className="text-2xl mb-4 font-semibold">
              Start your pet’s wellness journey.
            </div>
            <p className="text-sm text-white/80">
              Get the PetDNA+ Kit to unlock breed insights, health risks, and a
              personalized care plan designed just for your dog or cat.
            </p>
          </div>
          <button className="mt-6 bg-amber-300 text-black font-semibold py-2 px-4 rounded hover:bg-amber-400 w-fit">
            Get the Kit for $129
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Breed Summary
          </h3>
          <div className="relative w-36 h-36 sm:w-44 sm:h-45 mb-4">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <MdOutlinePets className="text-gray-300 text-4xl sm:text-5xl rotate-45" />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            {breedLabels.map((label, i) => (
              <div
                key={label}
                className="flex items-center justify-between text-sm sm:text-base"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ background: breedColors[i] }}
                  ></span>
                  <span className="text-slate-800 font-medium">{label}</span>
                </div>
                <span className="ml-2 font-bold text-slate-800">
                  {breedData[i]}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Health Score
          </h3>
          <div className="relative w-36 h-36 sm:w-44 sm:h-59 mb-4">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-5xl font-extrabold text-slate-800">
                {score}
              </span>
              <span className="text-base sm:text-lg text-slate-400 font-semibold">
                / {maxScore}
              </span>
            </div>
          </div>
          <button className="w-full bg-amber-300 text-black text-sm sm:text-base font-bold py-2 rounded-lg mt-auto hover:bg-amber-400 transition">
            View Care Center
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col min-h-[500px]">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Tips</h3>
          <div className="space-y-5">
            <div className="flex items-start space-x-3">
              <span className="text-2xl text-teal-500 mt-1 bg-gray-200 p-2 rounded-full">
                <LuBrain />
              </span>
              <div>
                <h2 className="text-black font-semibold">Boost Brain Health</h2>
                <p className="text-[#23444B] text-sm">
                  Add omega-3 to meals to support her joints and cognitive
                  function.
                </p>
                <p className="text-teal-500 text-sm mt-1">Learn More</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl text-teal-500 mt-1 bg-gray-200 p-2 rounded-full">
                <LuZap />
              </span>
              <div>
                <h2 className="text-black font-semibold">
                  Balance Energy Levels
                </h2>
                <p className="text-[#23444B] text-sm">
                  Try a 30-minute walk daily to keep her energy levels balanced
                  and healthy.
                </p>
                <p className="text-teal-500 text-sm mt-1">Learn More</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl text-teal-500 mt-1 bg-gray-200 p-2 rounded-full">
                <LuStethoscope />
              </span>
              <div>
                <h2 className="text-black font-semibold">Prepare for Travel</h2>
                <p className="text-[#23444B] text-sm">
                  Schedule a vet check-up before summer travel to ensure she is
                  fit for the trip.
                </p>
                <p className="text-teal-500 text-sm mt-1">Learn More</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl text-teal-500 mt-1 bg-gray-200 p-2 rounded-full">
                <LuSmile />
              </span>
              <div>
                <h2 className="text-black font-semibold">
                  Improve Dental Hygiene
                </h2>
                <p className="text-[#23444B] text-sm">
                  Introduce daily teeth brushing or dental chews to promote oral
                  health.
                </p>
                <p className="text-teal-500 text-sm mt-1">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
