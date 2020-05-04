import React from 'react'


const Instruction = (props) => <div className="instruction">
  <h3>{props.title} <span role="img" aria-label={props.emojiLabel}>{props.emoji}</span></h3>
  {props.children}
</div>


const Instructions = () => <div id="instructions">
  <Instruction title="ship" emoji="🚀" emojiLabel="rocket">
    <p>Start with a one-click template or pick your target platforms. Platter creates a <span className="keyword">continuously deployed monorepo</span> for you. Our CLI spins it all up for local development.</p>
  </Instruction>

  <Instruction title="operate" emoji="🕹 " emojiLabel="joystick">
    <p>Watch the dashboard to know what’s going on in production: your product starts with <span className="keyword">monitoring and observability tools</span> in a unified dashboard from day one.</p>
  </Instruction>

  <Instruction title="scale" emoji="📈" emojiLabel="chart with increasing metric">
    <p>Your product autoscales to millions of users. As your business grows, enable <span className="keyword">cross-platform add-ons</span> with the full power of Platter’s product control plane.</p>
  </Instruction>
</div>

export default Instructions
