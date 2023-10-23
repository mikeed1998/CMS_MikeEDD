import React, { useState, useEffect } from "react";
import Header from "../partials/Header";

function Aboutus() {
    const [data, setData] = useState([{}])

    useEffect(() => {
      	fetch("/aboutus").then(
            res => res.json()
      	).then(
            data => {
              	setData(data)
              	console.log(data)
            }
      	)
    })

    return (
        <div>
            <Header/>
            {(typeof data.acerca === 'undefined') ? (
                <p>Loading...</p>
            ): (
                data.acerca.map((member, i) => (
                    <p key={i}>{member}</p>
                ))
            )}
            {(typeof data.acerca === 'undefined') ? (
                <p>Loading...</p>
            ): (
              	data.basedatos.map((item, i) => (
                	<div key={i}>
                    	<h2>{item.title}</h2>
                    	<p>{item.content}</p>
						<small>{item.date_posted}</small>
                	</div>
            	))
            )}  
      </div>
    );
}

export default Aboutus;

