import React, { useRef } from "react";

function Markssheets() {
  let MaxMarks = 100;
  const NameInputRef = useRef();
  const RollInputRef = useRef();
  const TeluguInputRef = useRef();
  const HindiInputRef = useRef();
  const EnglishInputRef = useRef();
  const MathsInputRef = useRef();
  const ScienceInputRef = useRef();
  const SocialInputRef = useRef();
  let TeluguResult = useRef();
  let HindiResult = useRef();
  let EnglishResult = useRef();
  let MathsResult = useRef();
  let ScienceResult = useRef();
  let SocialResult = useRef();
  let result = useRef();

  const NameLabelRef = useRef();
  const RollLabelRef = useRef();
  const TeluguLabelRef = useRef();
  const HindiLabelRef = useRef();
  const EnglishLabelRef = useRef();
  const MathsLabelRef = useRef();
  const ScienceLabelRef = useRef();
  const SocialLabelRef = useRef();
  const TotalLabelRef = useRef();
  const TotalPercentageRef = useRef();

  const TeluguPercentageRef = useRef();
  const HindiPercentageRef = useRef();
  const EnglishPercentageRef = useRef();
  const MathsPercentageRef = useRef();
  const SciencePercentageRef = useRef();
  const SocialPercentageRef = useRef();

  let telresultRef = useRef();
  let HindiResultRef = useRef();
  let EnglishResultRef = useRef();
  let MathsResultRef = useRef();
  let ScienceResultRef = useRef();
  let SocialResultRef = useRef();

  return (
    <div>
      <div className="formdiv">
        <form>
          <label>Name</label>
          <input
            type="text"
            ref={NameInputRef}
            onFocus={() =>
              (NameInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              const Name = String(NameInputRef.current.value);
              NameLabelRef.current.innerHTML = Name;
              NameInputRef.current.style.backgroundColor = "White";
            }}
            onBlur={() => {
              NameInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <label>Roll no</label>
          <input
            type="number"
            ref={RollInputRef}
            onFocus={() =>
              (RollInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              const Roll = String(RollInputRef.current.value);
              RollLabelRef.current.innerHTML = Roll;
              RollInputRef.current.style.backgroundColor = "White";
            }}
            onBlur={() => {
              RollInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <label>Telugu</label>
          <input
            type="number"
            ref={TeluguInputRef}
            onFocus={() =>
              (TeluguInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              let tel = Number(TeluguInputRef.current.value);
              TeluguLabelRef.current.innerHTML = tel;
              TeluguInputRef.current.style.backgroundColor = "White";
              let teluguMarks = Number(TeluguInputRef.current.value);
              telresultRef.current.innerHTML = teluguMarks >= 35 ? "✅" : "❌";
              telresultRef.current.style.backgroundColor =
                teluguMarks >= 35 ? "Green" : "red";
            }}
            onBlur={() => {
              TeluguInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <span ref={telresultRef}></span>
          <label>Hindi</label>
          <input
            type="number"
            ref={HindiInputRef}
            onFocus={() =>
              (HindiInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              let Hindi = Number(HindiInputRef.current.value);
              HindiLabelRef.current.innerHTML = Hindi;
              HindiInputRef.current.style.backgroundColor = "White";
              let Hindimarks = Number(HindiInputRef.current.value);
              HindiResultRef.current.innerHTML = Hindimarks >= 35 ? "✅" : "❌";
              HindiResultRef.current.style.backgroundColor =
                Hindimarks >= 35 ? "Green" : "red";
            }}
            onBlur={() => {
              HindiInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <span ref={HindiResultRef}></span>

          <label>English</label>
          <input
            type="number"
            ref={EnglishInputRef}
            onFocus={() =>
              (EnglishInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              let eng = Number(EnglishInputRef.current.value);
              EnglishLabelRef.current.innerHTML = eng;

              EnglishInputRef.current.style.backgroundColor = "White";
              let Englishmarks = Number(EnglishInputRef.current.value);
              EnglishResultRef.current.innerHTML =
                Englishmarks >= 35 ? "✅" : "❌";
              EnglishResultRef.current.style.backgroundColor =
                Englishmarks >= 35 ? "Green" : "red";
            }}
            onBlur={() => {
              EnglishInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <span ref={EnglishResultRef}></span>
          <label>Mathematics</label>
          <input
            type="number"
            ref={MathsInputRef}
            onFocus={() =>
              (MathsInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              let maths = Number(MathsInputRef.current.value);
              MathsLabelRef.current.innerHTML = maths;
              MathsInputRef.current.style.backgroundColor = "White";
              let Mathsmarks = Number(MathsInputRef.current.value);
              MathsResultRef.current.innerHTML = Mathsmarks >= 35 ? "✅" : "❌";
              MathsResultRef.current.style.backgroundColor =
                Mathsmarks >= 35 ? "Green" : "red";
            }}
            onBlur={() => {
              MathsInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <span ref={MathsResultRef}></span>

          <label>Science</label>
          <input
            type="number"
            ref={ScienceInputRef}
            onFocus={() =>
              (ScienceInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              let sci = Number(ScienceInputRef.current.value);
              ScienceLabelRef.current.innerHTML = sci;
              ScienceInputRef.current.style.backgroundColor = "White";

              let Sciencemarks = Number(ScienceInputRef.current.value);
              ScienceResultRef.current.innerHTML =
                Sciencemarks >= 35 ? "✅" : "❌";
              ScienceResultRef.current.style.backgroundColor =
                Sciencemarks >= 35 ? "Green" : "red";
            }}
            onBlur={() => {
              ScienceInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <span ref={ScienceResultRef}></span>
          <label>Social Studies</label>
          <input
            type="number"
            ref={SocialInputRef}
            onFocus={() =>
              (SocialInputRef.current.style.backgroundColor = "lightblue")
            }
            onChange={() => {
              let soc = Number(SocialInputRef.current.value);
              SocialLabelRef.current.innerHTML = soc;
              SocialInputRef.current.style.backgroundColor = "White";

              let Socialmarks = Number(SocialInputRef.current.value);
              SocialResultRef.current.innerHTML =
                Socialmarks >= 35 ? "✅" : "❌";
              SocialResultRef.current.style.backgroundColor =
                Socialmarks >= 35 ? "Green" : "red";
            }}
            onBlur={() => {
              SocialInputRef.current.style.backgroundColor = "lightGreen";
            }}
          />
          <span ref={SocialResultRef}></span>

          <button
            type="button"
            onClick={() => {
              const Name = String(NameInputRef.current.value);
              const Roll = Number(RollInputRef.current.value);
              const Telugumarks = Number(TeluguInputRef.current.value);
              const Hindimarks = Number(HindiInputRef.current.value);
              const Englishmarks = Number(EnglishInputRef.current.value);
              const Mathsmarks = Number(MathsInputRef.current.value);
              const Sciencemarks = Number(ScienceInputRef.current.value);
              const Socialmarks = Number(SocialInputRef.current.value);

              const Totalmarks =
                Telugumarks +
                Hindimarks +
                Englishmarks +
                Mathsmarks +
                Sciencemarks +
                Socialmarks;
              const Percentage = ((Totalmarks / 600) * 100).toFixed(1);

              NameLabelRef.current.innerHTML = Name;
              RollLabelRef.current.innerHTML = Roll;
              TeluguLabelRef.current.innerHTML = Telugumarks;
              HindiLabelRef.current.innerHTML = Hindimarks;
              EnglishLabelRef.current.innerHTML = Englishmarks;
              MathsLabelRef.current.innerHTML = Mathsmarks;
              ScienceLabelRef.current.innerHTML = Sciencemarks;
              SocialLabelRef.current.innerHTML = Socialmarks;
              TotalLabelRef.current.innerHTML = Totalmarks;
              TotalPercentageRef.current.innerHTML = Percentage + "%";

              TeluguPercentageRef.current.innerHTML =
                ((Telugumarks / MaxMarks) * 100).toFixed(0) + "%";
              HindiPercentageRef.current.innerHTML =
                ((Hindimarks / MaxMarks) * 100).toFixed(0) + "%";
              EnglishPercentageRef.current.innerHTML =
                ((Englishmarks / MaxMarks) * 100).toFixed(0) + "%";
              MathsPercentageRef.current.innerHTML =
                ((Mathsmarks / MaxMarks) * 100).toFixed(0) + "%";
              SciencePercentageRef.current.innerHTML =
                ((Sciencemarks / MaxMarks) * 100).toFixed(0) + "%";
              SocialPercentageRef.current.innerHTML =
                ((Socialmarks / MaxMarks) * 100).toFixed(0) + "%";

              TeluguResult.current.innerHTML =
                Telugumarks >= 35 ? "Pass" : "Fail";
              EnglishResult.current.innerHTML =
                Hindimarks >= 35 ? "Pass" : "Fail";
              HindiResult.current.innerHTML =
                Hindimarks >= 35 ? "Pass" : "Fail";
              MathsResult.current.innerHTML =
                Mathsmarks >= 35 ? "Pass" : "Fail";
              ScienceResult.current.innerHTML =
                Sciencemarks >= 35 ? "Pass" : "Fail";
              SocialResult.current.innerHTML =
                Socialmarks >= 35 ? "Pass" : "Fail";

              result.current.innerHTML =
                Telugumarks >= 35 &&
                Hindimarks >= 35 &&
                Englishmarks >= 35 &&
                Mathsmarks >= 35 &&
                Sciencemarks >= 35 &&
                Socialmarks >= 35
                  ? "Pass"
                  : "Fail";
            }}
          >
            Get Result
          </button>
        </form>
      </div>
      <div className="labeldiv">
        <label ref={NameLabelRef}></label>
        <label ref={RollLabelRef}></label>
      </div>
      <div className="tablediv">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Max.Marks</th>
              <th>Marks Obtained</th>
              <th>Percentage</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Telugu</td>
              <td>{MaxMarks}</td>
              <td ref={TeluguLabelRef}></td>

              <td ref={TeluguPercentageRef}></td>
              <td ref={TeluguResult}></td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>{MaxMarks}</td>
              <td ref={HindiLabelRef}></td>

              <td ref={HindiPercentageRef}></td>
              <td ref={HindiResult}></td>
            </tr>
            <tr>
              <td>English</td>
              <td>{MaxMarks}</td>
              <td ref={EnglishLabelRef}></td>
              <td ref={EnglishPercentageRef}></td>
              <td ref={EnglishResult}></td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>{MaxMarks}</td>
              <td ref={MathsLabelRef}></td>
              <td ref={MathsPercentageRef}></td>
              <td ref={MathsResult}></td>
            </tr>
            <tr>
              <td>Science</td>
              <td>{MaxMarks}</td>
              <td ref={ScienceLabelRef}></td>
              <td ref={SciencePercentageRef}></td>
              <td ref={ScienceResult}></td>
            </tr>
            <tr>
              <td>Social Studies</td>
              <td>{MaxMarks}</td>
              <td ref={SocialLabelRef}></td>
              <td ref={SocialPercentageRef}></td>
              <td ref={SocialResult}></td>
            </tr>
            <tr>
              <td>Overall Total</td>
              <td>{MaxMarks * 6}</td>
              <td ref={TotalLabelRef}></td>
              <td ref={TotalPercentageRef}></td>
              <td ref={result}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Markssheets;
