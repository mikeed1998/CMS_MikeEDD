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
      </div>
    );
}

export default Aboutus;

