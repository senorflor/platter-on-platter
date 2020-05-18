import React from 'react'
import styled from 'styled-components'


const InstructionsDiv = styled.div`
  margin: auto; 
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const InstructionDiv = styled.div`
    margin: 1rem;
    min-width: 180px;
    max-width: 300px;
    flex: 1 1 auto;

`

const InstructionCard = styled.p`
  background-color: white;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 5px 5px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 1px 5px 9px;
  }

  &:after {
    box-shadow: rgba(0, 0, 0, 1) 10px 20px 2px;
    opacity: 0;
    transition : opacity 0.2s;
  }
`

const Instruction = (props) => <InstructionDiv>
  <h3>{props.title} <span role="img" aria-label={props.emojiLabel}>{props.emoji}</span></h3>
  {props.children}
</InstructionDiv>


const Instructions = () => <InstructionsDiv>
  <Instruction title="create" emoji="🚀" emojiLabel="rocket">
    <InstructionCard><strong>Click once</strong>: Platter creates your codebase for you in GitHub and deploys it in seconds. Our CLI spins it up for local development. Best-in-class templates, no local setup.<br/><br/>User customizable templates coming soon: turn any shipped product into a template for others, database and all!</InstructionCard>
  </Instruction>

  <Instruction title="deploy" emoji="🔄" emojiLabel="joystick">
    <InstructionCard><strong>Push code</strong>: each time new code hits the <code>master</code> branch in GitHub, Platter figures out which components have changed, then builds and deploys your product. No need to set up actions or separate CI/CD tools: update your code, share with your users, now.<br /><br />Pull request deploys coming soon!</InstructionCard>
  </Instruction>

  <Instruction title="scale" emoji="📈" emojiLabel="chart with increasing metric">
    <InstructionCard><strong>Grow and learn</strong>: Platter is for prod, not just for prototyping–your product starts with deploy monitoring/auto-rollbacks, API logging, and customizable domains out of the box. Skip the risky rebuild if your product gains traction: every component of a Platter product is built to autoscale as your project or business grows.</InstructionCard>
  </Instruction>
</InstructionsDiv>

export default Instructions
