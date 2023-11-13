import { useState } from "react";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [data, setData] = useState({
    totaltask: 7,
    completed: 0,
  });
  return (
    <div>
      <ProgressBar data={data} />
      <button
        onClick={() => setData({ ...data, completed: data.completed + 1 })}
      >
        add
      </button>
    </div>
  );
}

export default App;
