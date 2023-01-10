import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Grafico() {
  const data = {
    labels: [
      "",
      "Desempenho Produtivo",
      "Preço",
      "Redução de Custo",
      "Resistência  à Stress e Doença",
      "Passivo em ativo",
      "Benefício à natureza",
      "Imune à variação do dólar",
      "Crédito de Carbono",
    ],
    datasets: [
      {
        label: "Fonte Organomineral",
        data: [, 7.5, 4.9, 4.65, 6.5, 7.2, 7.2],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
      },
      {
        data: [, 8, 8, 8, 8, 8, 8, 8],
        backgroundColor: "transparent",
        borderColor: "#1C74E9",
      },

      {
        data: [, 7.5, 4.5, 4.5, 4.5, , ,],
        backgroundColor: "transparent",
        borderColor: "#0FAE3A",
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: true, position: "top" },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 4,
        max: 8,
        ticks: {
          stepSize: 2,
          callback: (value) =>
            value > 4 && value < 8 ? "Média" : value > 7 ? "Alta" : "Baixa",
        },
      },
    },
  };

  return (
    <div style={{ width: "980px", height: "980px", margin: "4rem 0 0 4rem" }}>
      <h1
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          fontFamily: "Source Sans Pro, sans-serif",
          fontWeight: "bold",
          fontSize: "1.3rem",
          margin: "1.5rem 0 1.5rem 3rem",
        }}
      >
        {" "}
        <span> Matriz de Avaliação de Valor</span>
      </h1>
      <Line
        data={data}
        options={options}
        style={{ marginBottom: "2rem" }}
      ></Line>
      <h2
        style={{
          fontFamily: "Source Sans Pro, sans-serif",
          marginBottom: "8px",
        }}
      >
        <span style={{ background: "#1C74E9", marginRight: "8px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        TCP
      </h2>
      <h2
        style={{
          fontFamily: "Source Sans Pro, sans-serif",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            background: "#0FAE3A",
            marginRight: "8px",
            marginBottom: "8px",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        Fonte Mineral
      </h2>
      <h2
        style={{
          fontFamily: "Source Sans Pro, sans-serif",
          marginBottom: "8px",
        }}
      >
        <span style={{ background: "#f26c6d", marginRight: "8px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        Fonte OrganoMineral
      </h2>
    </div>
  );
}
