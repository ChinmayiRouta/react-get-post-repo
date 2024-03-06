import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const data = "Hello";

  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  const [formData, setFromData] = useState("");

  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br />
      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>
      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFromData(e.target.value)}
        ></input>
        <input type="submit" value="Test From"></input>
      </form>
    </div>
  );
};

export default App;
