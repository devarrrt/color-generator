import React, { useState } from 'react'
import Values from 'values.js'
import { SingleColor } from './SingleColor'



const App = () => {
	const [color, setColor] = useState('')
	const [list, setList] = useState(new Values('#f15025').all(10))
	const [error, setError] = useState(false)


	const handleSubmit = (e) => {
		e.preventDefault()
		try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
	}




	return (
		<>
			<section className="container">
				<h3> color generator </h3> 
				<form onSubmit={handleSubmit} >
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}  placeholder='#f15025'
						className={`${error ? 'error' : null}`}
						/>
					<button className="btn" type="submit" >
						submit
					</button>
				</form>
			</section>

			<section className="colors">
				<h4> let goes here </h4>
					{ list.map(( color, index ) => (
						<SingleColor key={ index } { ...color } index={ index }  hexColor={color.hex} />
					))}
			</section>
		</>
	)
}



export default App
