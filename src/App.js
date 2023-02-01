import "./App.css";
import data from "./data/data";
import { useEffect, useState } from "react";
import BasicFlow from "./components/BasicFlow";

const filterData = () => {
  const filteredData = data.apiComponentList.map(({ name, apiConfigDefinition: { apiConfigReference: { url, verb, serviceName }}}) => {
      return {
        name,
        verb,
        url,
        serviceName,
      };
    }
  );
  console.log(filteredData);
  return filteredData;
};

function App() {
  const [data,setData]=useState([]);

  useEffect(() => {
    const filteredData = filterData();
    setData(filteredData);
  }, []);

  return (
    <div className="App">
      <BasicFlow data={data}/>
    </div>
  );
}

export default App;
