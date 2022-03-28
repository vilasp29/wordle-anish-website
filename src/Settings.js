const Settings = ( {set1, set2, set3} ) => {
	return (
		<div className='settings'>
			<label>Settings: </label>
			<br/>
			<label>Dark Mode: </label>
			<input type='checkbox' className='darkModeCheckbox' onChange={(e) => {
				if (e.target.checked) {
					set1('dark');
					set2('dark');
					set3('dark');
				} else {
					set1('App');
					set2('word');
					set3('button');
				}
			}} />
		</div>
	)
}

export default Settings;