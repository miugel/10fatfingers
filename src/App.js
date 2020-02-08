import React, {useState} from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
	height: 90vh;
	width: 921.6px;
	margin: 0 auto;
	background: black;
`

const App = () => {
	const [] = useState();

	return (
		<AppContainer>
			<div className='word-container'>

			</div>
		</AppContainer>
	);
};

export default App;