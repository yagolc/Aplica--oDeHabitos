
import './styles/global.css'

import { Habit } from "./components/Habit"
function App() {
  return (
    <div>
      <Habit completed = {1}></Habit>
      <Habit completed = {45}></Habit>
      <Habit completed = {45}></Habit>
      <Habit completed = {45}></Habit>
    </div>
    

  )
}

export default App
