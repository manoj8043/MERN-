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

  return (
    <div>
      <div className="formdiv">
        <form>
          <label>Name</label>
          <input type="text" ref={NameInputRef} />
          <label>Roll no</label>
          <input type="number" ref={RollInputRef} />
          <label>Telugu</label>
          <input type="number" ref={TeluguInputRef} />
          <label>Hindi</label>
          <input type="number" ref={HindiInputRef} />
          <label>English</label>
          <input type="number" ref={EnglishInputRef} />
          <label>Mathematics</label>
          <input type="number" ref={MathsInputRef} />
          <label>Science</label>
          <input type="number" ref={ScienceInputRef} />
          <label>Social Studies</label>
          <input type="number" ref={SocialInputRef} />

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
