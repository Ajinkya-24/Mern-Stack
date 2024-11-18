let fibonacciSeries = [0, 1];
let n = 10; // number of terms

for (let i = 2; i < n; i++) {
  fibonacciSeries.push(fibonacciSeries[i-1] + fibonacciSeries[i-2]);
}

document.getElementById("fibonacci-series").innerHTML = "Fibonacci Series: " + fibonacciSeries.join(", ");