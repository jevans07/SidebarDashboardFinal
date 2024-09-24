import Picture from "../../components/picture";
import React from "react";
 
const Resistance = () => {
    return (
        <div className='resistance'>
          <header className='resistance-header'>
            <h1>Resistance</h1>
          </header>
          <main className='resistance-content'>
            <p>This is where we will be able to give a brief overview of what the website is about and can direct our users 
                to other links where they will be able to gain the information they are searching for.
            </p>
          </main>
          <Picture />
        </div>
      );
    }

 
export default Resistance;