import React from 'react'


const Instruction = (props) => <div className="instruction">
  <h3>{props.title} <span role="img" aria-label={props.emojiLabel}>{props.emoji}</span></h3>
  {props.children}
</div>


const Instructions = () => <div id="instructions">
  <Instruction title="create" emoji="🚀" emojiLabel="rocket">
    <p><strong>Click once</strong>: Platter creates your codebase for you in GitHub and deploys it in seconds. Our CLI spins it up for local development. Best-in-class templates, no local setup.<br/><br/>User customizable templates coming soon: turn any shipped product into a template for others, database and all!</p>
  </Instruction>

  <Instruction title="deploy" emoji="🔄" emojiLabel="joystick">
    <p><strong>Push code</strong>: each time new code hits the <code>master</code> branch in GitHub, Platter figures out which components have changed, then builds and deploys your product. No need to set up actions or separate CI/CD tools: update your code, share with your users, now.<br /><br />Pull request deploys coming soon!</p>
  </Instruction>

  <Instruction title="scale" emoji="📈" emojiLabel="chart with increasing metric">
    <p><strong>Grow and learn</strong>: Platter is for prod, not just for prototyping–your product starts with deploy monitoring/auto-rollbacks, API logging, and customizable domains out of the box. Skip the risky rebuild if your product gains traction: every component of a Platter product is built to autoscale as your project or business grows.</p>
  </Instruction>
</div>

export default Instructions
