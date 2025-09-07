(async function() {
  const data = [
    { year: 2014, count: 1.02 },
    { year: 2015, count: 1.22 },
    { year: 2016, count: 1.4 },
    { year: 2017, count: 1.58 },
    { year: 2018, count: 1.84 },
    { year: 2019, count: 2.16 },
    { year: 2020, count: 2.58 },
    { year: 2021, count: 2.95 },
    { year: 2022, count: 3.39 },
    { year: 2023, count: 3.77 },
    { year: 2024, count: 4.25 },
    { year: 2025, count: 4.69 },
    { year: 2026, count: 5.12 },
    { year: 2027, count: 5.49 },
    { year: 2028, count: 5.83 },
  ];

Chart.defaults.backgroundColor = '#3a6ea5';
Chart.defaults.borderColor = '#c0c0c0';
Chart.defaults.color = '#000';

  new Chart(
    document.getElementById('mobilephones-over-time'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Miles de millones de usuarios mundiales de teléfonos móviles por año',
            data: data.map(row => row.count)
          }
        ]
      },
    }
  );
})();
