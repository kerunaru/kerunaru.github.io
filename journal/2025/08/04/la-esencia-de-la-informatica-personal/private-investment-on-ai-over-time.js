(async function() {
  const data = [
    { year: 2013, count: 6.01 },
    { year: 2014, count: 10.94 },
    { year: 2015, count: 15.26 },
    { year: 2016, count: 19.34 },
    { year: 2017, count: 28.43 },
    { year: 2018, count: 46.51 },
    { year: 2019, count: 61.66 },
    { year: 2020, count: 77.26 },
    { year: 2021, count: 145.40 },
    { year: 2022, count: 104.64 },
    { year: 2023, count: 92.79 },
    { year: 2024, count: 130.26 },
  ];

Chart.defaults.backgroundColor = '#3a6ea5';
Chart.defaults.borderColor = '#c0c0c0';
Chart.defaults.color = '#000';

  new Chart(
    document.getElementById('private-investment-on-ai-by-time'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Miles de millones de dólares invertidos en IA proveniente de fondos privados a nivel global por año',
            data: data.map(row => row.count)
          }
        ]
      },
    }
  );
})();
