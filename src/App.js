import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
	const [theme, setTheme] = useState('dark');
	const [input, setInput] = useState('0');

	function updateInput(val) {
		setInput(prevInput => prevInput === '0' ? val : prevInput + val);
	}

	function delChar() {
		const newInput = input.substring(0, input.length - 1);
		setInput(newInput);
	}

	function resetInput() {
		setInput('0');
	}

	function calculateResult() {
		const ans = eval(input).toString();
		setInput(ans);
	}

	function handleChange(event) {
		setTheme(event.target.value);
	}

	return (
		<div className={theme}>
			<main>
				<section className='head'>
					<h3 className='title'>calc</h3>
					<span className='theme-text'>THEME</span>
					<div className='theme-container'>
						<input id='dark' type="radio" name="theme" value="dark" onChange={handleChange} checked={theme === 'dark'} />
						<label htmlFor='dark'></label>

						<input id='light' type="radio" name="theme" value="light" onChange={handleChange} checked={theme === 'light'} />
						<label htmlFor='light'></label>

						<input id='neon' type="radio" name="theme" value="neon" onChange={handleChange} checked={theme === 'neon'} />
						<label htmlFor='neon'></label>
					</div>
				</section>

				<section className='calculator'>
					<input value={input} type="text" disabled />

					<div className='keypad'>
						<Button handleClick={() => updateInput('7')} val={'7'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('8')} val={'8'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('9')} val={'9'} class={'btn-basic'} />
						<Button handleClick={delChar} val={'DEL'} class={'btn-clr'} />
						<Button handleClick={() => updateInput('4')} val={'4'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('5')} val={'5'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('6')} val={'6'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('+')} val={'+'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('1')} val={'1'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('2')} val={'2'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('3')} val={'3'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('-')} val={'-'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('.')} val={'.'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('0')} val={'0'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('/')} val={'/'} class={'btn-basic'} />
						<Button handleClick={() => updateInput('*')} val={'x'} class={'btn-basic'} />
						<Button handleClick={resetInput} val={'RESET'} class={'btn-clr btn-reset'} />
						<Button handleClick={calculateResult} val={'='} class={'btn-equals'} />
					</div>
				</section>
			</main>

			<footer className='footer'>
				<p>
					Designed and developed by <a href="https://github.com/himanshuat" rel="noreferrer" target="_blank">Himanshu Tegyalwar</a>
				</p>
				<div className="social">
					<a href="https://www.facebook.com/himanshu.tegyalwar" rel="noreferrer" target="_blank">
						<i className="fab fa-facebook"></i>
					</a>
					<a href="https://www.instagram.com/himaanshu.at" rel="noreferrer" target="_blank">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="https://twitter.com/himanshuat_" rel="noreferrer" target="_blank">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://www.linkedin.com/in/himanshu-tegyalwar" rel="noreferrer" target="_blank">
						<i className="fab fa-linkedin"></i>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
