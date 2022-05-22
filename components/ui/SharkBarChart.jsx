import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  defaults,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import isNA from "../../helpers/isNA";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartDataLabels
);
defaults.font.family = "Poppins";

export const options = {
  maintainAspectRatio: false,
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: "Money Invested (in Cr.)",
      },
    },
  },
  plugins: {
    datalabels: {
      clamp: "true",
      clip: "true",
      color: "#EDF2F7",
      formatter: function (value, context) {
        let label = context.dataIndex.label || "";

        if (label) {
          label += ": ";
        }
        if (value !== null) {
          label += new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(value);
        }
        return label + " Cr.";
      },
      font: {
        weight: "bold",
      },
    },
  },
};

export function SharkbBarChart({ brands, investments }) {
  const sharkLabels = {
    ashneer: 0,
    namita: 0,
    anupam: 0,
    vineeta: 0,
    aman: 0,
    peyush: 0,
    ghazal: 0,
  };
  function getChartData(investments) {
    for (const investment of investments) {
      let count = 0;
      let dealAmount = parseFloat(investment.deal_amount) || 0;
      let dealDebt = parseFloat(investment.deal_debt) || 0;
      for (const shark of Object.keys(sharkLabels)) {
        if (!isNA(investment[shark])) {
          count++;
        }
      }
      if (count > 1) {
        dealAmount /= count;
        dealDebt /= count;
      }
      for (const shark of Object.keys(sharkLabels)) {
        if (!isNA(investment[shark])) {
          sharkLabels[shark] += dealAmount + dealDebt;
        }
      }
    }
  }
  const [labels, setLabels] = useState([]);
  const [sharkInvestmentData, setSharkInvestmentData] = useState([]);
  useEffect(() => {
    getChartData(investments);

    for (const [key, value] of Object.entries(sharkLabels).sort(
      ([, a], [, b]) => b - a
    )) {
      setLabels(prevArray => [
        ...prevArray,
        key[0].toUpperCase() + key.substring(1, key.length),
      ]);
      setSharkInvestmentData(prevArray => [...prevArray, value / 100]);
    }
  }, [brands, investments]);

  const data = {
    labels,
    datasets: [
      {
        label: "Invested",
        data: sharkInvestmentData,
        borderColor: "rgb(66, 153, 225)",
        backgroundColor: "rgba(66, 153, 225, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
