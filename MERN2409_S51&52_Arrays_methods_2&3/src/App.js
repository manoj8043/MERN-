import React from "react";
import "./App.css";

function App() {
  let marks = [87, 76, 97, 93, 85, 90];
  return (
    <div>
      <h1>Arrays Part 2 and 3</h1>
      <button
        type="Button"
        onClick={() => {
          let SRHIndian = [
            "Ishan Kishan",
            "Abhishek Sharma",
            "Nithish",
            "Shami",
            "Harshal Patel",
          ];
          console.log(SRHIndian);
          let SRHForegin = ["Cumins", "Head", "Zampa", "Klesson"];
          console.log(SRHForegin);
          let SRHTteam = SRHIndian.concat(SRHForegin);
          console.log(SRHTteam);
        }}
      >
        Concat
      </button>
      <button
        type="button"
        onClick={() => {
          let Tollywood = [
            "Mahesh Babu",
            "Prabhas",
            "Allu Arjun",
            "Ram Charan",
          ];
          console.log(Tollywood);
          delete Tollywood[2];
          console.log(Tollywood);
          Tollywood.splice(2, 1);
          console.log(Tollywood);
        }}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => {
          let movies2023 = ["RRR", "Pushpa", "Radhe Shyam", "KGF2"];
          let movies2024 = ["Pushpa2", "Kalki", "Guntur Karam", "Devara"];
          let movies2025 = ["Devara2", "OG", "Sprit", "Game Changer"];
          let Movies = [movies2023, movies2024, movies2025];

          console.log(Movies);
          console.log(Movies[2][2]);
          console.log(Movies.flat());
          console.log(Movies.flat(7));
        }}
      >
        Flat
      </button>
      <button
        type="button"
        onClick={() => {
          let IndianLanguages = [
            "Gujarati",
            "Punjabi",
            "Telugu",
            "Hindi",
            "Tamil",
            "Kannada",
            "Malayalam",
            "Bengali",
            "Marathi",
          ];
          let SouthLanguages = IndianLanguages.slice(2, 7);
          console.log(SouthLanguages);
        }}
      >
        slice
      </button>
      <button
        type="button"
        onClick={() => {
          let Fruits = [
            "Apple",
            "Banana",
            "Mango",
            "Pineapple",
            "Grapes",
            "Orange",
            "Papaya",
            "Watermelon",
            "Kiwi",
          ];
          console.log(Fruits);
          Fruits.fill("Strawberry", 2, 6);
          console.log(Fruits);
        }}
      >
        Fill
      </button>
      <button
        type="button"
        onClick={() => {
          let Name = "MANOJ KUMAR";
          console.log(Name);
          let n = Array.from(Name);
          console.log(n);
        }}
      >
        From
      </button>
      <button
        type="button"
        onClick={() => {
          let Fruits = [
            "Apple",
            "Banana",
            "Mango",
            "Pineapple",
            "Grapes",
            "Orange",
            "Papaya",
            "Watermelon",
            "Kiwi",
          ];
          let result = Fruits.includes("Banana");
          console.log(result);
        }}
      >
        Include
      </button>
      <button
        type="button"
        onClick={() => {
          let Fruits = [
            "Apple",
            "Banana",
            "Mango",
            "Pineapple",
            "Grapes",
            "Orange",
            "Papaya",
            "Watermelon",
            "Kiwi",
          ];
          let result = Fruits.indexOf("Papaya");
          console.log(result);
        }}
      >
        Index Of
      </button>
      <button
        type="button"
        onClick={() => {
          let Fruits = [
            "Apple",
            "Banana",
            "Papaya",

            "Mango",
            "Pineapple",
            "Grapes",
            "Orange",
            "Papaya",
            "Papaya",
            "Watermelon",
            "Papaya",
            "Watermelon",
            "Kiwi",
          ];
          let resultof = Fruits.indexOf("Papaya");
          console.log(resultof);
          let result = Fruits.lastIndexOf("Papaya");
          console.log(result);
        }}
      >
        Last Index Of
      </button>
      <button
        type="button"
        onClick={() => {
          let Movie = ["kalki2898AD"];
          let arr = Array.isArray(Movie);
          console.log(arr);
        }}
      >
        Is Array
      </button>
      <button
        type="button"
        onClick={() => {
          let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          console.log(Num);
          let result = Num.reverse();
          console.log(result);
        }}
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={() => {
          let Movies = [
            "RRR",
            "Pushpa",
            "Radhe Shyam",
            "KGF2",
            "Kalki",
            "Guntur Karam",
            "Devara",
            "Devara2",
            "OG",
            "Sprit",
            "Game Changer",
          ];
          console.log(Movies);
          Movies = Movies.sort();
          console.log(Movies);
          let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          console.log(Num);
          let res = Num.sort((a, b) => {
            return b - a;
          });
          console.log(res);
        }}
      >
        Sort
      </button>
      <button
        type="button"
        onClick={() => {
          let States = [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal",
          ];

          // for (let i = 0; i < States.length; i++) {
          //   console.log(`${i + 1} ${States[i]} `);
          // }
          let res = States.forEach((i, ele) => {
            console.log(`${ele} ------------> ${i}`);
          });
          console.log(res);
        }}
      >
        ForEach
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = [87, 76, 97, 93, 85, 90];
          if (
            marks[0] >= 35 &&
            marks[1] >= 35 &&
            marks[2] >= 35 &&
            marks[3] >= 35 &&
            marks[4] >= 35 &&
            marks[5] >= 35
          ) {
            console.log("Passed");
          } else {
            console.log("Failed");
          }
          let res = marks.every((ele, i) => {
            return ele >= 35;
          });
          if (res === true) {
            console.log("Passed");
          } else {
            console.log("failed");
          }
        }}
      >
        Every
      </button>
      <button
        type="button"
        onClick={() => {
          let marks = [87, 76, 97, 93, 85, 90];
          let res = marks.some((ele) => {
            return ele < 35;
          });
          if (res === true) {
            console.log("Failed");
          } else {
            console.log("Passed");
          }
        }}
      >
        Some
      </button>
      <button
        type="button"
        onClick={() => {
          let num = [
            3, 5, 33, 5, 5, 3, 6, 3, 5, 54, 545, 3, 43, 34, 6, 4, 3, 5, 6, 75,
            64, 3, 2,
          ];
          console.log(num);
          let even = num.filter((ele, i) => {
            return ele % 2 === 0;
          });
          console.log(even);
          let odd = num.filter((ele) => {
            return ele % 2 !== 0;
          });
          console.log(odd);
        }}
      >
        Filter
      </button>
      <button
        type="button"
        onClick={() => {
          let arr = [
            23, 43, 54, 54, 34, 2, 3, 43, 6, 57, 8, 6, 44, 86, 45, 44, 22,
          ];
          let res = arr.find((ele) => {
            return ele > 34;
          });
          console.log(res);

          let last = arr.findLastIndex((ele) => {
            return ele > 34;
          });
          console.log(last);
        }}
      >
        Find/ Find Index
      </button>
      <button
        type="button"
        onClick={() => {
          let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          let res = arr.reduceRight((acc, ele) => {
            return (acc += ele);
          });
          console.log(res);
        }}
      >
        Reduce ? Reduce Right
      </button>
      <button
        type="button"
        onClick={() => {
          let Countries = [
            "India",
            "USA",
            "UK",
            "UAE",
            "Australia",
            "Srillanka",
            "China",
            "Japan",
            "Russia",
          ];
          let res = Countries.map((ele, i) => {
            return `${i + 1}.${ele}`;
          });
          console.log(res);
          let res1 = marks.map((ele, i, a) => {
            if (ele >= 35) {
              a = ele;
            } else {
              a = ele + 5;
            }
            return a;
          });
          console.log(res1);
        }}
      >
        Map
      </button>
      <hr></hr>
      <h2>Marks</h2>
      {marks.map((ele, i) => {
        return <h5 key={i}>{ele}</h5>;
      })}
    </div>
  );
}

export default App;
