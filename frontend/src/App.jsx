import React, {useState, useEffect} from 'react'
import Header from './components/partials/Header';
import './App.css';
import ContactoForm from './components/formularios/ContactoForm';

function App() {

  	const [data, setData] = useState([{}])

  	useEffect(() => {
    	fetch("/home").then(
      		res => res.json()
    	).then(
      		data => {
        		setData(data)
        		console.log(data)
      		}
    	)
  	}, [])

  	return (
		<>
			<Header/>
			<div>
      			{(typeof data.members === 'undefined') ? (
    	    		<p>Loading...</p>
	      		): (
        			data.members.map((member, i) => (
          				<p key={i}>{member}</p>
        			))
    	  		)}
	    	</div>
			<div>
      			{(typeof data.dinero === 'undefined') ? (
    	    		<p>Loading...</p>
	      		): (
        			data.dinero[3]
    	  		)}
	    	</div>
			<div className="container">
				<div className="row">
					<div className="col bg-dark fs-1 fw-bolder text-center text-white">
						Titulo
					</div>
				</div>
			</div>
			<ContactoForm />
		</>
    	
  	);
}

export default App;

