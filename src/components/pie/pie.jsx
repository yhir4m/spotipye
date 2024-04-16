import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getTopGenres } from '../../utils/callToken';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./pie.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartPie(){

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        backgroundColor: [
          '#000',
          '#111',
          '#222',
          '#333',
          '#444',
          '#555',
          '#666',
          '#777',
          '#888',
          '#999',
          '#aaa',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const topGenres = await getTopGenres();
      const genresString = topGenres.map(item => item[0]);
      
      const genreVal = topGenres.map(item => item[1]);
      const totalGenreVal =genreVal.reduce((acc,current)=> acc+current)
      const genrePercent = genreVal.map(item => Math.round(item *100/ totalGenreVal));
      let pieData = {
        labels: genresString,
        datasets: [
          {
            label: '# of Votes',
            data: genrePercent,
            backgroundColor: data.datasets[0].backgroundColor,
            borderColor: data.datasets[0].borderColor,
            borderWidth: data.datasets[0].borderWidth,
          },
        ],
      };

      setData(pieData);
    };

    fetchData();
  }, []);

  

  const options = {
    plugins: {
      legend: {
        position: 'none',
        labels: {
          boxWidth: 20, // Ancho de la caja de la leyenda
          font: {
            size: 12, // Tamaño de la fuente de la leyenda
          },
        },
      },
    },
  };

  return(
    <>
      <Pie data={data } options={options}></Pie>
    </>
  );
}

