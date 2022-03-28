import './App.css';
import Word from './Word.js';
import Settings from './Settings.js';
import Words from './Words.js'
import Filler from './Filler.js';
import { useState } from 'react';

const App = () => {
	const getWord = () => {
		const now = new Date();
		const start = new Date(now.getFullYear(), 0, 0);
		const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
		const oneDay = 1000 * 60 * 60 * 24;
		const day = Math.floor(diff / oneDay);
		return Words[day];
	}
	const solution = getWord().toLowerCase();
	
	const [solved, setSolved] = useState(false);
	const [className, setClassName] = useState('App');
	const [wordClassName, setWordClassName] = useState('word');

	const [u1, setU1] = useState(true);
	const [u2, setU2] = useState(false);
	const [u3, setU3] = useState(false);
	const [u4, setU4] = useState(false);
	const [u5, setU5] = useState(false);
	const [u6, setU6] = useState(false);
	
	const [failed, setFailed] = useState(false);
					
  	return (
    	<div className={className} >
			<Settings set1={setClassName} set2={setWordClassName} />
			<header>WORDLE</header>
			<table>
				<Word user={u1} setUser={setU1} next={setU2} solution={solution} solved={setSolved} darkmode={wordClassName} />
				<Word user={u2} setUser={setU2} next={setU3} solution={solution} solved={setSolved} darkmode={wordClassName} />
				<Word user={u3} setUser={setU3} next={setU4} solution={solution} solved={setSolved} darkmode={wordClassName} />
				<Word user={u4} setUser={setU4} next={setU5} solution={solution} solved={setSolved} darkmode={wordClassName} />
				<Word user={u5} setUser={setU5} next={setU6} solution={solution} solved={setSolved} darkmode={wordClassName} />
				<Word user={u6} setUser={setU6} next={setFailed} solution={solution} solved={setSolved} darkmode={wordClassName} />
			</table>
			{failed && 
				<label className='bottom'>D: You couldn't figure out the word! ({solution})</label>
			}
			{solved &&
				<label className='bottom'>Hurray! You found the word!</label>
			}
			<Filler />
	    </div>
  	);
}

export default App;
