import React, { useRef } from "react";

function Markssheets() {
  let inputonFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "lightgray";
  };

  let inputonBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "lightgreen";
  };
  let inputchange = (inputRef) => {
    inputRef.current.style.backgroundColor = "lightBlue";
  };
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
  const NamespanRef = useRef();
  const RollspanRef = useRef();
  const TeluguspanRef = useRef();
  const HindispanRef = useRef();
  const EnglishspanRef = useRef();
  const MathsspanRef = useRef();
  const SciencespanRef = useRef();
  const SocialspanRef = useRef();

  return (
    <div>
      <div className="formdiv">
        <form>
          <label>Name</label>
          <input
            type="text"
            ref={NameInputRef}
            onFocus={() => {
              inputonFocus(NameInputRef);
            }}
            onBlur={() => inputonBlur(NameInputRef)}
            onChange={() => {
              const Name = String(NameInputRef.current.value);
              NameLabelRef.current.innerHTML = Name;

              inputchange(NameInputRef, NamespanRef);
            }}
          />
          <span ref={NamespanRef}></span>
          <label>Roll no</label>
          <input
            type="number"
            ref={RollInputRef}
            onFocus={() => {
              inputonFocus(RollInputRef);
            }}
            onBlur={() => inputonBlur(RollInputRef)}
            onChange={() => {
              const Roll = Number(RollInputRef.current.value);
              RollLabelRef.current.innerHTML = Roll;
              inputchange(RollInputRef, RollspanRef);
            }}
          />
          <span ref={RollspanRef}></span>
          <label>Telugu</label>
          <input
            type="number"
            ref={TeluguInputRef}
            onFocus={() => {
              inputonFocus(TeluguInputRef);
            }}
            onBlur={() => inputonBlur(TeluguInputRef)}
            onChange={() => {
              const Telugumarks = Number(TeluguInputRef.current.value);
              TeluguLabelRef.current.innerHTML = Telugumarks;
              TeluguResult.current.innerHTML =
                Telugumarks >= 35 ? "Pass" : "Fail";
              TeluguPercentageRef.current.innerHTML =
                ((Telugumarks / MaxMarks) * 100).toFixed(0) + "%";

              inputchange(TeluguInputRef, TeluguspanRef);
            }}
          />
          <span ref={TeluguspanRef}></span>
          <label>Hindi</label>
          <input
            type="number"
            ref={HindiInputRef}
            onFocus={() => {
              inputonFocus(HindiInputRef);
            }}
            onBlur={() => inputonBlur(HindiInputRef)}
            onChange={() => {
              const Hindimarks = Number(HindiInputRef.current.value);
              HindiLabelRef.current.innerHTML = Hindimarks;
              HindiResult.current.innerHTML =
                Hindimarks >= 35 ? "Pass" : "Fail";
              HindiPercentageRef.current.innerHTML =
                ((Hindimarks / MaxMarks) * 100).toFixed(0) + "%";

              inputchange(HindiInputRef, HindispanRef);
            }}
          />
          <span ref={HindispanRef}></span>
          <label>English</label>
          <input
            type="number"
            ref={EnglishInputRef}
            onFocus={() => {
              inputonFocus(EnglishInputRef);
            }}
            onBlur={() => inputonBlur(EnglishInputRef)}
            onChange={() => {
              const Englishmarks = Number(EnglishInputRef.current.value);
              EnglishLabelRef.current.innerHTML = Englishmarks;
              EnglishResult.current.innerHTML =
                Englishmarks >= 35 ? "Pass" : "Fail";
              EnglishPercentageRef.current.innerHTML =
                ((Englishmarks / MaxMarks) * 100).toFixed(0) + "%";

              inputchange(EnglishInputRef, EnglishspanRef);
            }}
          />
          <span ref={EnglishspanRef}></span>
          <label>Mathematics</label>
          <input
            type="number"
            ref={MathsInputRef}
            onFocus={() => {
              inputonFocus(MathsInputRef);
            }}
            onBlur={() => inputonBlur(MathsInputRef)}
            onChange={() => {
              const Mathsmarks = Number(MathsInputRef.current.value);
              MathsLabelRef.current.innerHTML = Mathsmarks;
              MathsResult.current.innerHTML =
                Mathsmarks >= 35 ? "Pass" : "Fail";
              MathsPercentageRef.current.innerHTML =
                ((Mathsmarks / MaxMarks) * 100).toFixed(0) + "%";

              inputchange(MathsInputRef, MathsspanRef);
            }}
          />
          <span ref={MathsspanRef}></span>
          <label>Science</label>
          <input
            type="number"
            ref={ScienceInputRef}
            onFocus={() => {
              inputonFocus(ScienceInputRef);
            }}
            onBlur={() => inputonBlur(ScienceInputRef)}
            onChange={() => {
              const Sciencemarks = Number(ScienceInputRef.current.value);
              ScienceLabelRef.current.innerHTML = Sciencemarks;
              ScienceResult.current.innerHTML =
                Sciencemarks >= 35 ? "Pass" : "Fail";
              SciencePercentageRef.current.innerHTML =
                ((Sciencemarks / MaxMarks) * 100).toFixed(0) + "%";

              inputchange(ScienceInputRef, SciencespanRef);
            }}
          />
          <span ref={SciencespanRef}></span>
          <label>Social Studies</label>
          <input
            type="number"
            ref={SocialInputRef}
            onFocus={() => {
              inputonFocus(SocialInputRef);
            }}
            onBlur={() => inputonBlur(SocialInputRef)}
            onChange={() => {
              const Socialmarks = Number(SocialInputRef.current.value);
              SocialLabelRef.current.innerHTML = Socialmarks;
              SocialResult.current.innerHTML =
                Socialmarks >= 35 ? "Pass" : "Fail";
              SocialPercentageRef.current.innerHTML =
                ((Socialmarks / MaxMarks) * 100).toFixed(0) + "%";

              inputchange(SocialInputRef, SocialspanRef);
            }}
          />

          <button
            type="button"
            onClick={() => {
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

              TotalLabelRef.current.innerHTML = Totalmarks;
              TotalPercentageRef.current.innerHTML = Percentage + "%";

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
