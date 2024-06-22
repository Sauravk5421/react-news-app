import { React, useState, useEffect } from "react";
import NewsCard from "./NewsCard";

function NewsApi({ category , SearchText}) {

	// console.log(category, SearchText)
	const styles = {

		disabledButton: {
			backgroundColor: 'gray',
			color: 'white',
			cursor: 'not-allowed',
			margin: 10,
			padding:"5px 20px 5px 20px",
			borderRadius: "8px",
			border: "none",
			boxShadow: "0px 0px 10px 0px grey",
		},
		enabledButton: {
			backgroundColor: 'red',
			color: 'white',
			cursor: 'pointer',
			margin: 10,
			padding:"5px 20px 5px 20px",
			borderRadius: "8px",
			border: "none",
			boxShadow: "0px 0px 10px 0px grey",
		},
	};
  // let category = props.category;
  let [news, setNews] = useState([]);
  let [totalPage, setTotalPage] = useState(0);
  let [page, setPage] = useState(1);
  const [isButtonDisabledPrev, setButtonDisabledPrev] = useState(false);
  const [isButtonDisabledNext, setButtonDisabledNext] = useState(false);

  let resultNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=f719cf731ef144f49fafc6ccefa4e26e`;
    let data = await fetch(url);
    let response = await data.json();
	
	console.log(response.articles);
    setNews(response.articles);
	totalPage = Math.ceil(response.totalResults/20);
    setTotalPage(totalPage);
	// console.log(page," page",totalPage);
    
  };

  useEffect(() => {
    resultNews();
	if(page === 1){
		setButtonDisabledPrev(true);
	} else {
		setButtonDisabledPrev(false);
	}
	if(page === totalPage){
		setButtonDisabledNext(true);
	} else {
		setButtonDisabledNext(false);
	}
	
  }, [page,category]);

  

  function handleNextPage(){
	// console.log("clicked")
	setPage((prev)=>prev+1);
  }

  function handlePrevPage(){
	// console.log("clicked", page)
	setPage((prev)=>prev-1);
  }

  return (
    <>
      <div className="m-5">
        <h1 className="mb-3">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <div className="card-container">
          {news?.filter((elm)=>{
			if(elm === ''){
				return elm;
			} else {
				return (elm.title.toLowerCase().includes(SearchText));
			}
		  })?.map((item, index) => {
            return (
              <div className="" key={index}>
                <NewsCard
                  className=""
                  sourceName={item.source.name}
                  title={item.title}
                  desc={item.description}
                  imageURL={item.urlToImage}
                  newsUrl={item.url}
				  content={item.content}
				  index={index}
                />
              </div>
            );
          })}
        </div>
		<button className="btn1" style={isButtonDisabledPrev ?
                    styles.disabledButton : styles.enabledButton} onClick={handlePrevPage}>Prev</button>
		<button className="btn1" style={isButtonDisabledNext ?
                    styles.disabledButton : styles.enabledButton} onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
}

export default NewsApi;
