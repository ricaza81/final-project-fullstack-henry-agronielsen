import React from 'react';

function Header() {
	return (
    <div className="page-loader">
        <div id="preloader">
            <span>Cargando...</span>
        </div>

         <div className="row text-center" style={{padding:"4px",margin:"auto",color:"#fff"}}>
	         <span>
	            Consultar Demo >
	         </span>
	       	 <span>
	    		Consultar
	    	 </span>
	    </div>
    </div>
    	);
	}

export default Header;

    