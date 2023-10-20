import { useEffect } from "react";
import Header from "../partials/Header";

function Contacto() {

    useEffect(() => {
    	fetch("/contacto").then(
      		res => res.json()
    	)
  	})

    return (
        <>
        <Header/>
            <div>
                <h1>Contacto</h1>
            </div>
        </>
    );
}

export default Contacto;

