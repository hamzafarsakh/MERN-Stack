import React from 'react'
import { useParams } from "react-router-dom";
// className="btn"

const Numb = () => {
    const {num} = useParams();
    const {color1} = useParams();
    const {color2} = useParams();

       
// const h1Style = {

//     fontFamily: 'Arial, sans-serif',
//     fontWeight: 'bold',
//     background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
//     color: '#fff',
//     border: 'none',
    
// };
// style="background-color: black; border: 2px solid black;"



    if(color1 && color2){
        let  h1Style = {
            margin:' 30px auto',
            width: '800px',
            backgroundColor: color1,  
            borderStyle: 'solid',
            borderWidth: '5px', 
            borderColor: color2, 
        };
            if (isNaN(+num)){
                return (
                    <>
                        <h1 style={h1Style}>The World is: {num}</h1>
                    </>
                  )
            }else{
                return (
                    <>
                        <h1 style={h1Style}>The Number is: {num}</h1>
                    </>
            )
        }
        
    }



    if (isNaN(+num)){
        return (
            <>
                <h1>The World is: {num}</h1>
            </>
          )
    }else{
        return (
            <>
                <h1>The Number is: {num}</h1>
            </>
    )
}
}

export default Numb
