import React,{useState} from 'react'

export default function FormPage(props) {
    const [getText,setText]=useState("");
    const handleSwapCase=()=>{
        let newText=""
        for (let index = 0; index < getText.length; index++) {
            const element = getText.charCodeAt(index)
            if(element>=65 && element<=90){
                newText+=String.fromCodePoint(element+32)
            }
            else if(element>=97 && element<=122){
                newText+=String.fromCodePoint(element-32)
            }
            else{
                newText+=getText[index];
            }
            
        }
        setText(newText);
        props.alert("Character Case Swaped","success")
    }
    const handleReverse=()=>{
        if(getText.length===0){props.alert("Failed to reverse the text","danger")}
        else{
        let newText=""
        for (let index = getText.length-1; index >=0 ; index--) {
            newText+=getText[index]
        }
        setText(newText)
        props.alert("Text Reversed","success")
    }}
    const handleReplace=()=>{
        let a=prompt("Enter Word Or Character You Want To Replace")
        if(a!=="" && getText.length!==0){
        let b=prompt("Enter New Word Or Character ")
        let c=getText
        while(c.indexOf(a)!==-1 && a!==""){
            var d=c.indexOf(a)
            c=c.replace(a,b)
            if(c.indexOf(a)===d){break}
        }
        setText(c)
        props.alert("Word or Character Replaced","success")
    }
    else{props.alert("Failed to Replace the Word","danger")}
    }
    const handleRemove=(a)=>{
        let newText=""
        let count=0
        let array=getText.split(" ")
        let index=0;
        for (index = 0; index < array.length-1; index++) {
            const element = array[index];
            if(element!==""){
                newText+=(element+" ")
                count+=1
            }
            
        }
        if(array[index]!==""){
            newText+=array[index]
            count+=1
        }
        if(a===1){
          setText(newText);
          props.alert("Extra Space Removed","success")
        }
        else{
           return count;
        }
    }
    return (
        <>
    <div className="container my-3">
        <h2 className="my-3">Write Your Text Below To Analise It</h2>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.colorMode==="dark"?"#8e8a8a":"white",color:props.colorMode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" value={getText} onChange={(event)=>setText(event.target.value)} rows="10"></textarea>
        </div>
        <div className="container my-2">
            <button disabled={getText.length===0 || getText.toUpperCase()===getText} className="btn btn-primary mx-2" onClick={()=>{setText(getText.toUpperCase());props.alert("Converted To UpperCase","success")}}>Convert To UpperCase</button>
            <button disabled={getText.length===0 || getText.toLowerCase()===getText} className="btn btn-primary mx-2" onClick={()=>{setText(getText.toLowerCase());props.alert("Converted To LowerCase","success")}}>Convert To LowerCase</button>
            <button disabled={getText.length===0} className="btn btn-primary mx-2" onClick={handleSwapCase}>Swap The Case</button>
            <button disabled={getText.length===0} className="btn btn-primary mx-2" onClick={handleReverse}>Reverse The Text</button>
            <button disabled={getText.length===0} className="btn btn-primary mx-2" onClick={handleReplace}>Replace</button>
            <button disabled={getText.length===0} className="btn btn-primary mx-2" onClick={()=>handleRemove(1)}>Remove Extra spaces</button>
            <button disabled={getText.length===0} className="btn btn-primary mx-2" onClick={()=>{setText("");props.alert("Text Clear","success")}}>Clear</button>
        </div>
    </div>
    <div className="container my-2">
        <h2>Text Analysis Here</h2>
        <b className="my-3"><i>Words <u>{handleRemove(0)}</u></i></b> 
        <b className="mx-3 my-3"><i>Character <u>{getText.length}</u></i></b>
        <b className="mx-3 my-3"><i>Time Required To Read This Text <u>{handleRemove(0)*(1/125)} Minutes</u></i></b>
        <h3 className="my-3">Text Preview Here</h3>
        <p>{getText.length?getText:"Write Text Above For Preview"}</p>
    </div>
    </>
    )
}
