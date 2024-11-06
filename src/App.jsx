import { useState } from "react";
import "./App.css";

function App() {
  const [otp, setOtp] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: "",
  });
  const handleChange = () => {};
  const inputRender = (key) => {
    return (
      <input
        className="w-16 h-12 rounded-md mr-3 text-center text-xl bg-slate-600"
        name={key}
        type="text"
      />
    );
  };
  return (
    <form action="">
      <h1 className="text-3xl mb-8">Please fill in the otp</h1>
      <div>{Object.keys(otp).map((key, index) => inputRender(key))}</div>
      <button className="mt-4 w-32 bg-[#3b3b3b] rounded hover:bg-[#252525] text-white hover:border-[#3b3b3b]">
        Submit
      </button>
    </form>
  );
}

export default App;
