import React from 'react'

export default function AboutUs(props) {
    let borderStyle={border:"2px solid",borderColor:props.colorMode==="dark"?"white":"black",backgroundColor:props.colorMode==="dark"?"black":"white",color:props.colorMode==="dark"?"white":"black"}
    return (
        <div className="container">
            <div className="accordion accordion-flush" id="accordionFlushExample" >
                <div className="accordion-item" style={borderStyle}>
                    <h2 className={`accordion-header ${props.colorMode}`} id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            About TextUtils
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">It is Text Analyser here you can analyse your text like character count , word count and swap their case also many thing you can do with text try it.</div>
                    </div>
                </div>
                <div className="accordion-item" style={borderStyle}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">It is Text Anayser it is free of cost and platform independent </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
