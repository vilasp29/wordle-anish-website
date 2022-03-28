import { useState, useEffect } from 'react';
const Word = ( {user, setUser, next, solution, solved, darkmode, button} ) => {
	const normalempty = {backgroundColor: '#ffffff'};
	const normalabsent = {backgroundColor: '#787c7e'};
	const darkempty = {backgroundColor: '#121213'}
	const darkabsent = {backgroundColor: '#3a3a3c'};
	const normalgreen = {backgroundColor: '#6aaa64'};
	const darkgreen = {backgroundColor: '#538d4e'};
	const yellow = {backgroundColor: '#c9b458'};
	const darkyellow = {backgroundColor: '#b59f3b'};
	
	const red = {backgroundColor: 'red'};	
	
	const [c1, setC1] = useState(darkmode === 'dark' ? darkempty : normalempty); 
	const [c2, setC2] = useState(darkmode === 'dark' ? darkempty : normalempty); 
	const [c3, setC3] = useState(darkmode === 'dark' ? darkempty : normalempty); 
	const [c4, setC4] = useState(darkmode === 'dark' ? darkempty : normalempty); 
	const [c5, setC5] = useState(darkmode === 'dark' ? darkempty : normalempty); 
	
	const [l1, setL1] = useState('');
	const [l2, setL2] = useState('');
	const [l3, setL3] = useState('');
	const [l4, setL4] = useState('');
	const [l5, setL5] = useState('');
	
	const submit = () => {
		setColour(l1.toLowerCase(), setC1, 1)
		setColour(l2.toLowerCase(), setC2, 2)
		setColour(l3.toLowerCase(), setC3, 3)
		setColour(l4.toLowerCase(), setC4, 4)
		setColour(l5.toLowerCase(), setC5, 5)
		
		setUser(false);
		if ((l1 + l2 + l3 + l4 + l5).toLowerCase() === solution) {
			solved(true);
		} else {
			next(true);
		}
	}
	
	const setColour = (variable, assign, num) => {
		if (solution.charAt(num-1) === variable) {
			assign(darkmode === 'dark' ? darkgreen : normalgreen);
		}
		if (solution.includes(variable) && !(solution.charAt(num-1) === variable)) {
			assign(darkmode === 'dark' ? darkyellow : yellow);
		}
		if (!solution.includes(variable)) {
			assign(darkmode === 'dark' ? darkabsent : normalabsent);
		}
	}
	
	useEffect(() => {
		const calcOtherColours = (obj1) => {
			if (obj1.backgroundColor === darkyellow.backgroundColor) {
				return yellow;
			}
			if (obj1.backgroundColor === darkgreen.backgroundColor) {
				return normalgreen;
			}
			if (obj1.backgroundColor === darkabsent.backgroundColor) {
				return normalabsent;
			}
			if (obj1.backgroundColor === normalabsent.backgroundColor) {
				return darkabsent;
			}
			if (obj1.backgroundColor === yellow.backgroundColor) {
				return darkyellow;
			}
			if (obj1.backgroundColor === normalgreen.backgroundColor) {
				return darkgreen;
			}
			else {
				return normalempty;
			}
		}
		
		const calcColor = (obj) => {
			return darkmode === 'dark' ? (obj.backgroundColor === normalempty.backgroundColor ? darkempty : calcOtherColours(obj)) : (obj.backgroundColor === darkempty.backgroundColor ? normalempty : calcOtherColours(obj));
		}
		
		setC1(calcColor(c1));
		setC2(calcColor(c2));
		setC3(calcColor(c3));
		setC4(calcColor(c4));
		setC5(calcColor(c5));
	}, [darkmode]);
	
	return (
		<>
			<tr>
				<td>
					{user && <input type='text' maxLength='1' className={darkmode} style={c1} autoFocus onChange={(e) => {
						if ((e.target.value < 'A' || e.target.value > 'Z') && (e.target.value < 'a' || e.target.value > 'z')) {
							e.target.value = '';
						}
						setL1(e.target.value);
					}}/>}
					{!user && <input type='text' value={l1} className={darkmode} style={c1} readOnly />}
				</td>
				<td>
					{user && <input type='text' maxLength='1' className={darkmode} style={c2} onChange={(e) => {
						if ((e.target.value < 'A' || e.target.value > 'Z') && (e.target.value < 'a' || e.target.value > 'z')) {
							e.target.value = '';
						}
						setL2(e.target.value);
					}}/>}
					{!user && <input type='text' value={l2} className={darkmode} style={c2} readOnly />}
				</td>
				<td>
					{user && <input type='text' maxLength='1' className={darkmode} style={c3} onChange={(e) => {
						if ((e.target.value < 'A' || e.target.value > 'Z') && (e.target.value < 'a' || e.target.value > 'z')) {
							e.target.value = '';
						}
						setL3(e.target.value);
					}}/>}
					{!user && <input type='text' value={l3} className={darkmode} style={c3} readOnly />}
				</td>
				<td>
					{user && <input type='text' maxLength='1' className={darkmode} style={c4} onChange={(e) => {
						if ((e.target.value < 'A' || e.target.value > 'Z') && (e.target.value < 'a' || e.target.value > 'z')) {
							e.target.value = '';
						}
						setL4(e.target.value);
					}}/>}
					{!user && <input type='text' value={l4} className={darkmode} style={c4} readOnly />}
				</td>
				<td>
					{user && <input type='text' maxLength='1' className={darkmode} style={c5} onChange={(e) => {
						if ((e.target.value < 'A' || e.target.value > 'Z') && (e.target.value < 'a' || e.target.value > 'z')) {
							e.target.value = '';
						}
						setL5(e.target.value);
					}}/>}
					{!user && <input type='text' value={l5} className={darkmode} style={c5} readOnly />}
				</td>
				{user && 
					<>
					{l1 !== '' && l2 !== '' && l3 !== '' && l4 !== '' && l5 !== '' && 
						<button className={button} onClick={submit} >Enter</button>
					}
					{(l1 === '' || l2 === '' || l3 === '' || l4 === '' || l5 === '') && 
						<button className={button} onClick={submit} disabled>Enter</button>
					}
					</>
				}
			</tr>
		</>
	)
}

export default Word;