function LikedPage(){

    var retrievedData1 = localStorage.getItem("LocalStorage");
    var mainData1 = JSON.parse(retrievedData1);
    console.log(mainData1)
    return(
        <>
        <h1 className="m-5">
          Favorites
        </h1>
        <div className="card-container mb-4">

          {!mainData1 && <h1> No Favorites News Added</h1>}
        
            {mainData1 && mainData1.map((item) => {
                console.log(item)
            return (
                <div className="card" id = "card-cont" >
                <div className="p-1">
                  <img src={item.img} className="" alt="..." />
                  <h5 className="card-title">{item.title}</h5>
                  <p className="">- {item.source}</p>
                  <p className="card-desc">{item.desc}</p>
                  <a href={item.readMore}
                                target="_blank"
                                className="btn btn-primary btn-sm">
                                Read More...
                            </a>
        
                  {/* <button className="me-4" onClick={handleClick}>
                    Read More
                  </button> */}
                  {/* <button onClick={likeButton}>{image}</button> */}
                  
                  
                </div>
              </div>
            );
          })}

          
        </div>
        </>
    )
}
export default LikedPage;