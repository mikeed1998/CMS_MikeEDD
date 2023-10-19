import { useEffect } from "react";

function Contacto() {

    useEffect(() => {
    	fetch("/contacto").then(
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

