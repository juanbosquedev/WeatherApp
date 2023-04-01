import { useRef, useState } from "react";
import Style from "./Search.module.css";

export default function Search({ setState }) {
  let refs = useRef();
  const [inputs, setInputs] = useState("");
  let handleChange = () => {
    setInputs(refs.current.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault(e);
    setState(inputs);
    setInputs("");
  };
  return (
    <div>
      <form className={Style.body} type="submit" onSubmit={handleSubmit}>
        <input
          className={Style.input}
          type="text"
          ref={refs}
          value={inputs}
          placeholder="City..."
          onChange={handleChange}
        ></input>
        <button className={Style.button}>🔍</button>
      </form>
    </div>
  );
}
