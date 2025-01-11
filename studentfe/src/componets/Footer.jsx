import React from 'react'

function Footer() {
  return (
    <>
    <div className="container-fluid p-3 mt-5" style={{backgroundColor:'lightgrey'}}>
        <div className="row">
        <h2 className='text-center mb-4'>Student Portal</h2>
            <div className="col">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro eos pariatur atque qui sapiente reprehenderit corporis quam et odio? Aliquid iusto molestias nisi ut nemo totam esse, corrupti eaque?</p>
            </div>
            <div className="col d-flex flex-column">
                <h5>Links</h5>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                <a href="">Linkdin</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
