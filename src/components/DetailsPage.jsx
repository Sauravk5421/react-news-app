import { useLocation } from "react-router-dom";

function DetailsPage(){

    const location = useLocation();
    const data = location?.state || false;
    console.log(data);
  
    
    return (
        <>
            <div style={{margin:"10px"}}>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.sourceName}</p>
                </div>
                <div>
                    <img src={data.imageURL}/>
                </div>
                <div >
                {/* <p dangerouslySetInnerHTML={{__html:data.content}}></p> */}
                    <p>{data.content}</p>
                </div>

            </div>
        </>
        
    )
}

export default DetailsPage;