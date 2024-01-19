import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const InputMeteo = ({handleSearch}) => {
  const styles = {
    buttonSearch: {
      width: '20rem',
			marginTop: '5rem'
    }
  }
	const [search, setSearch] = useState('')

	return (
		<InputGroup  style={styles.buttonSearch} >
			<Button variant="secondary" id="button-addon1" onClick={()=> handleSearch(search)}>
      <i className="bi bi-search bg-transparent"></i>
			</Button>
			<Form.Control
				aria-label="Example text with button addon"
				aria-describedby="basic-addon1"
        placeholder="Cerca una città"
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</InputGroup>
	);
};

export default InputMeteo;
