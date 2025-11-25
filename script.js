document.addEventListener("DOMContentLoaded", function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [{
              label: 'São Paulo',
              data: [124309, 535555, 1305003, 2170144, 2833090],
              borderColor: 'blue',
              backgroundColor: 'transparent',
          }, {
              label: 'Leme',
              data: [111, 708, 2259, 3532, 4677],
              borderColor: 'red',
              backgroundColor: 'transparent',
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
});
