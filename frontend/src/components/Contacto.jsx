import { useEffect } from "react";

function Contacto() {

    useEffect(() => {
    	fetch("/home").then(
      		res => res.json()
    	)
  	})

    return (
        <div>
            <h1>Contacto</h1>
        </div>
    );
}

export default Contacto;

