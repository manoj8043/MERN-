import React from "react";

function Markssheets() {
  return (
    <div>
      <h1> Markssheets</h1>
      <form>
        <label>States</label>
        <select
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value === "Andhra Pradesh") {
              console.log("Amaraavathi");
            } else if (e.target.value === "Arunachal Pradesh") {
              console.log("Itanagar");
            } else if (e.target.value === "Assam") {
              console.log("Dispur");
            } else if (e.target.value === "Bihar") {
              console.log("Patna");
            } else if (e.target.value === "Chhattisgarh") {
              console.log("Raipur");
            } else if (e.target.value === "Goa") {
              console.log("Panaji");
            } else if (e.target.value === "Gujarat") {
              console.log("Gandhinagar");
            } else if (e.target.value === "Haryana") {
              console.log("Chandigarh");
            } else if (e.target.value === "Himachal Pradesh") {
              console.log("Shimla");
            } else if (e.target.value === "Jammu and Kashmir") {
              console.log("Srinagar");
            } else if (e.target.value === "Jharkhand") {
              console.log("Ranchi");
            } else if (e.target.value === "Karnataka") {
              console.log("Bengaluru");
            } else if (e.target.value === "Kerala") {
              console.log("Thiruvananthapuram");
            } else if (e.target.value === "Madhya Pradesh") {
              console.log("Bhopal");
            } else if (e.target.value === "Maharashtra") {
              console.log("Mumbai");
            } else if (e.target.value === "Manipur") {
              console.log("Imphal");
            } else if (e.target.value === "Meghalaya") {
              console.log("Shillong");
            } else if (e.target.value === "Mizoram") {
              console.log("Aizawl");
            } else if (e.target.value === "Nagaland") {
              console.log("Kohima");
            } else if (e.target.value === "Odisha") {
              console.log("Bhubaneswar");
            } else if (e.target.value === "Punjab") {
              console.log("Chandigarh");
            } else if (e.target.value === "Rajasthan") {
              console.log("Jaipur");
            } else if (e.target.value === "Sikkim") {
              console.log("Gangtok");
            } else if (e.target.value === "Tamil Nadu") {
              console.log("Chennai");
            } else if (e.target.value === "Telangana") {
              console.log("Hyderabad");
            } else if (e.target.value === "Tripura") {
              console.log("Agartala");
            } else if (e.target.value === "Uttar Pradesh") {
              console.log("Lucknow");
            } else if (e.target.value === "Uttarakhand") {
              console.log("Dehradun");
            } else if (e.target.value === "West Bengal") {
              console.log("Kolkata");
            } else {
              console.log("Select a state");
            }

            switch (e.target.value) {
              case "Andhra Pradesh":
                console.log("Amaravati");
                break;
              case "Arunachal Pradesh":
                console.log("Itanagar");
                break;
              case "Assam":
                console.log("Dispur");
                break;
              case "Bihar":
                console.log("Patna");
                break;
              case "Chhattisgarh":
                console.log("Raipur");
                break;

              case "Goa":
                console.log("Panaji");
                break;
              case "Gujarat":
                console.log("Gandhinagar");
                break;
              case "Haryana":
                console.log("Chandigarh");
                break;
              case "Himachal Pradesh":
                console.log("Shimla");
                break;
              case "Jammu and Kashmir":
                console.log("Srinagar");
                break;
              case "Jharkhand":
                console.log("Ranchi");
                break;
              case "Karnataka":
                console.log("Bengaluru");
                break;
              case "Kerala":
                console.log("Thiruvananthapuram");
                break;
              case "Madhya Pradesh":
                console.log("Bhopal");
                break;
              case "Maharashtra":
                console.log("Mumbai");
                break;
              case "Manipur":
                console.log("Imphal");
                break;
              case "Meghalaya":
                console.log("Shillong");
                break;
              case "Mizoram":
                console.log("Aizwal");
                break;
              case "Nagaland":
                console.log("Kohima");
                break;
              case "Odisha":
                console.log("Bhubaneswar");
                break;
              case "Punjab":
                console.log("Chandigarh");
                break;
              case "Rajasthan":
                console.log("Jaipur");
                break;
              case "Sikkim":
                console.log("Gangtok");
                break;
              case "Tamil Nadu":
                console.log("Chennai");
                break;
              case "Telangana":
                console.log("Hyderabad");
                break;
              case "Tripura":
                console.log("Agartala");
                break;
              case "Uttarakhand":
                console.log("Dehradun");
                break;
              case "Uttar Pradesh":
                console.log("Lucknow");
                break;
              case "West Bengal":
                console.log("Kolkata");
                break;

              default:
                console.log("Select a state");
                break;
            }
          }}
        >
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chhattisgarh</option>
          <option>Goa</option>
          <option>Gujarat</option>
          <option>Haryana</option>
          <option>Himachal Pradesh</option>
          <option>Jammu and Kashmir</option>
          <option>Jharkhand</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Madhya Pradesh</option>
          <option>Maharashtra</option>
          <option>Manipur</option>
          <option>Meghalaya</option>
          <option>Mizoram</option>
          <option>Nagaland</option>
          <option>Odisha</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>Sikkim</option>
          <option>Tamil Nadu</option>
          <option>Telangana</option>
          <option>Tripura</option>
          <option>Uttarakhand</option>
          <option>Uttar Pradesh</option>
          <option>West Bengal</option>
        </select>
      </form>
    </div>
  );
}

export default Markssheets;
