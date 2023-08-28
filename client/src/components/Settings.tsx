import {useState} from 'react'

export const Settings = () => {

  const [difficulty, setDifficulty] = useState("medium")
  const [theme, setTheme] = useState("heroes")

  const onOptionChange = e => {
    setDifficulty(e.target.value)
  }

  return (
    <>
      <div>
        <h1>Superhero Memory Game</h1>
      </div>
      <div  id="memory_board">
        <h1>Settings</h1>
        <div>Themes ---
        <input 
          type="radio" 
          name="theme" 
          value="heroes" 
          id="heroes" 
          checked={theme === "heroes"}
          />
        <label htmlFor="heroes">Heroes</label>

        <input 
          type="radio" 
          name="theme" 
          value="abc" 
          id="abc" 
          checked={theme === "abc"}
          />
        <label htmlFor="abc">ABC</label>
        </div>
        <hr />
        <div>Difficulty ---
        <input 
          type="radio" 
          name="difficulty" 
          value="easy" 
          id="easy" 
          className="radioButton"
          checked={difficulty === "easy"}
          onChange={onOptionChange}
          />
        <label htmlFor="easy">Easy</label>
        <input 
          type="radio" 
          name="difficulty" 
          value="medium" 
          id="medium" 
          className="radioButton"
          checked={difficulty === "medium"}
          onChange={onOptionChange}
          />
        <label htmlFor="medium">Medium</label>
        <input 
            type="radio" 
            name="difficulty" 
            value="hard" 
            id="hard"
            className="radioButton"
            checked={difficulty === "hard"} 
            onChange={onOptionChange}/>
        <label htmlFor="hard">Hard</label>
        </div>
        <hr />
        <button className="btn btn-primary" type="submit">Save & play</button>
      </div>

    </>
  )
}
