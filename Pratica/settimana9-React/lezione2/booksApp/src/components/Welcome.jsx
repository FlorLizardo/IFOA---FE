import { Button } from 'react-bootstrap';


const Welcome = () => {
  const customStyle = {
    backgroundColor: '#F5D2B3'
  }

	return (
		<>
			<div style={customStyle} className='text-center py-4 my-5'>
				<h1 className='text-dark'>Benvenuto a MondoBooks!</h1>
        <h2 className='h5 text-secondary pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum in perspiciatis molestiae</h2>
        <Button className='mt-4'>Scopri di più</Button>
			</div>
		</>
	);
};

export default Welcome;
