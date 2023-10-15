// Snippet 4:
import React, { useState } from 'react';

function Apdrpq() {
  const [szl, ybszl] = useState(0);

  return (
    <div>
      <button onClick={() => ybszl(szl + 1)}>Increment</button>
      <p>{szl}</p>
    </div>
  );
}

export default Apdrpq;

// Snippet 5:
import React from 'react';

function Ftyx({ vrb }) {
  return <p>{vrb}</p>;
}

function Qwet({ zyx }) {
  return <Ftyx vrb={zyx} />;
}

export default function Ertu() {
  return <Qwet zyx="Hello, World!" />;
}

// Snippet 6: Class components
import React, { Component } from 'react';

class Uywq extends Component {
  componentDidMount() {
    var sgf = document.getElementById("lmn");
    sgf.textContent = "Component Mounted";
  }

  render() {
    return <div id="lmn">Loading...</div>;
  }
}

export default Uywq;

// Snippet 7:
import React, { useState, useEffect } from 'react';

function Oyzam() {
  const [mlp, yzmlp] = useState([]);
  const [dtk, yzdtk] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => yzmlp(data));
  }, [dtk]);

  return (
    <div>
      <button onClick={() => yzdtk(Math.random())}>Refresh</button>
      <ul>
        {mlp.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default Oyzam;
