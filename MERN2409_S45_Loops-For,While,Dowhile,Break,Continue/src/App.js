function App() {
  return (
    <div>
      <h1>Tables from 1-1000</h1>

      <button
        type="button"
        onClick={() => {
          for (let i = 1; i <= 1000; i++) {
            if (
              i === 756 ||
              i === 849 ||
              i === 643 ||
              i === 721 ||
              i === 135 ||
              i === 601 ||
              i === 611
            ) {
              continue;
            }
            console.log(`This is ${i} Table`);
            for (let j = 1; j <= 100; j++) {
              if (
                j === 6 ||
                j === 7 ||
                j === 8 ||
                j === 9 ||
                j === 12 ||
                j === 14 ||
                j === 15 ||
                j === 23 ||
                j === 46 ||
                j === 79 ||
                j === 86
              ) {
                continue;
              }
              console.log(`${i} X ${j} = ${i * j}`);
            }
          }
        }}
      >
        Generate Tables
      </button>
    </div>
  );
}

export default App;
