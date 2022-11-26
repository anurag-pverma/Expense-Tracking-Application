import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: '',
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers:{
        'content-type':'application/json'
      }
    });
    const data  = await res.json();
    console.log(data);

  }

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter Trasaction amount"         
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInput}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}          
        />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;
