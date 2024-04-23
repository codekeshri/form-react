import React, {useState} from "react";
import "./Card.css";

const Card = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [err, setErr] = useState(false);

  const nameHandler = (e) =>{
    setName(e.target.value);
  }

  const ageHandler = (e) =>{
    setAge(e.target.value);
  }

  const clickHandler = (e) =>{
    e.preventDefault();
    setErr(!name && !age);
    if(!name || !age) {
      console.log("missing fields");
      return;
    }
    const user = {name: name, age: age};
    console.log(user);
    setName('');
    setAge('');
  }
  return (
    <div className="card">
      <input className="input" placeholder="name" type="text" onChange={nameHandler}></input>
      <input className="input" placeholder="age" type="number" onChange={ageHandler}></input>
      <button className="input button" onClick={clickHandler}>submit</button>
    </div>
  );
};

export default Card;
