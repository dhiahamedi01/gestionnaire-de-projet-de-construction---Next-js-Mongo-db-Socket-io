import React from "react";
import styles from '@/styles/Chart.module.css'
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const data = [
    { name: "decembre", users: 500 },
    { name: "Mars", users: 500 },
    { name: "Avril", users: 750  },
    { name: "Mail", users: 1000 },
    { name: "Juin", users: 795 },
    
    
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div className="App">
        <PieChart width={500} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#e09900"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={550}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 100,
            left: 50,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#e09900" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default App;
