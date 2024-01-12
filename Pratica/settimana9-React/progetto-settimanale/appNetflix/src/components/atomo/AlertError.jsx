import {Alert} from 'react-bootstrap'

const AlertError = () => {
	return (
		<Alert variant='warning' className='mx-auto'>
			Oops! Non è stato possibile caricare i film 😣
		</Alert>
	);
};

export default AlertError;
