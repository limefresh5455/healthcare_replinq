import React, { useEffect, useState } from 'react'

const Datafetch = () => {

    const [resourceType, setResourceType] = useState("");
    const [id, setId] = useState("");
    const [identifier, setIdentifier] = useState([]);
    const [use, setUse] = useState("");
    const [codingSystem, setCodingSystem] = useState("");
    const [code, setCode] = useState("");
    const [display, setDisplay] = useState("");
    const [text, setText] = useState("");
    const [system, setSystem] = useState("");
    const [value, setValue] = useState("");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/show", {
            method: "Get",
            // headers: {


            //     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1cm46b2lkOmZoaXIiLCJjbGllbnRfaWQiOiJkOWYwN2JlNi0yOGNkLTQ2OWEtYjJjMS1jNjU5NWNjODE5MDEiLCJlcGljLmVjaSI6InVybjplcGljOk9wZW4uRXBpYy1jdXJyZW50IiwiZXBpYy5tZXRhZGF0YSI6InB4UFdLRzJCZWcxYm02c0RWYTJWMnl4eWxDNFIwU1VBQjJhZjlHbG9TNG82Q0I0bVFfOVlZQWV0T24xcTBZbGNrd3lJcEVnM2RCRUF6bHRKRldRU0NMNE5yM0VSSE1JZW1heVBNcXBvNkJ3TGUyTU5ZSE9iT1dHRmkwS1dKWDdsIiwiZXBpYy50b2tlbnR5cGUiOiJhY2Nlc3MiLCJleHAiOjE2NDkyMjc1MTQsImlhdCI6MTY0OTIyMzkxNCwiaXNzIjoidXJuOm9pZDpmaGlyIiwianRpIjoiYTRhY2RiMzUtNzVjNS00MGE3LWJiODMtOTE1ZDAzN2RkZjhhIiwibmJmIjoxNjQ5MjIzOTE0LCJzdWIiOiJldk5wLUtoWXdPT3FBWm4xcFoyZW51QTMifQ.SV-C6XBii22zcOv2O6gW2bFLy588f3d4siDtA0xZ7j9FusS18Kr0gfG2YK5iENV66fbvFt3hbpWEq9KKP8DQtk4Lzj2y2JrD3eRR8-4r32ZQc9KZ-D-9O3OFdGw7fZD-rHGDtp1yHi7o6nfq3VsNd_xUPDgnzUJXeBDpqBNuYGrvyJ6hhsrALBkLY-Y52UsZpJxaWTgYCCoPinl78urnoCxR6qrV25gCXuD3PGI4cNAAPh1nAIyTzSK3EgmKRX_URa8kAAO4uTpDbxYcjLphLyp4TK3nYBVyvsHrUidGDQiY49rjFvzOzjXp4NF5WfRD8yWUSfjMLVf6npE7g9ajVA',
            //     'Content-Type': ' application/json',
            //     'Accept': 'application/json+fhir',



            // },
        }).then(response => response.json())
            .then(res => {

                //console.log(res);
                setResourceType(res[0].doctor_name);




                setId(res.id)
                setIdentifier(res.identifier)

                // for(let i=0;i<identifier.length;i++)

                // {
                //     setUse(res.identifier[i].use)
                //     setText(res.identifier[i].type.text)
                //     for(let j=0;res.identifier[i].type.coding.length;j++)
                //     {
                //         setCodingSystem(res.identifier[i].type.coding[j].system)
                //         setCode(res.identifier[i].type.coding[j].code)
                //         setDisplay(res.identifier[i].type.coding[j].display)
                //     }
                // }           

                //   if (res.status === 200){
                //     console.log("accepted");
                //   }else {
                //     console.log(res.error);
                //   }

                //    console.log(res.error)
            }).catch(err => console.log(err))

    }, []);


    return (
        <>
            <h2>{resourceType}</h2>
            <h2>{id}</h2>
            <h2>{use}</h2>
            <h2>{codingSystem}</h2>
            <h2>{code}</h2>
            <h2>{display}</h2>
            <h2>{text}</h2>

        </>

    )
}

export default Datafetch


