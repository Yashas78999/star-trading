// Navigation Functionality
function navigateTo(section) {
  if (section === "mining") {
    alert("Navigate to Crypto Mining page (To be implemented)");
  } else if (section === "trading") {
    alert("Navigate to Trading page (To be implemented)");
  }
}

// Chart.js Configuration
const ctx = document.getElementById('stockChart').getContext('2d');
const stockChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Stock A',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Stock B',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Major Stocks Performance',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Stock Value (in USD)',
        },
      },
    },
  },
});
