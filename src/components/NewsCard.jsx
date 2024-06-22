import React, { useState } from "react";
import "./News.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function NewsCard(props) {
  let { desc, title, imageURL, newsUrl, sourceName, content, index } = props;
  const [arrayNews, setArrayNews] = useState([]);
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate(`/Entertainment/${title}`, {
      state: {
        desc: desc,
        title: title,
        imageURL: imageURL,
        newsUrl: newsUrl,
        sourceName: sourceName,
        content: content,
      },
    });
  };



  const likeButton = (e) => {
	const selElm = document.getElementById(e.target.id);
	var parentDiv = document.getElementById(e.target.id)?.parentElement;  
	var elements = [...selElm.classList];
	const saveNewsObject = {
		img: parentDiv?.children[0]?.src,
		title: parentDiv?.children[1]?.textContent,
		source: parentDiv?.children[2]?.textContent,
		desc : parentDiv?.children[3]?.textContent,
		readMore: parentDiv?.children[4]?.href
	};
	
	
	if(elements.includes('liked')){
		selElm.classList.remove("liked")
	}else{
		selElm.classList.add("liked")
		var retrievedData1 = localStorage.getItem("LocalStorage");
        var mainData1 = JSON.parse(retrievedData1);
        mainData1?.push(saveNewsObject)
        localStorage.setItem('LocalStorage', JSON.stringify(mainData1));
	}
   };


  return (
    <>
      <div className="card" id = "card-cont" >
        <div className="p-1">
          <img src={imageURL} className="" alt="..." />
          <h5 className="card-title">{title}</h5>
          <p className="">- {sourceName}</p>
          <p className="card-desc">{desc}</p>
          <a href={newsUrl}
						target="_blank"
						className="btn btn-primary btn-sm">
						Read More...
					</a>

          {/* <button className="me-4" onClick={handleClick}>
            Read More
          </button> */}
		  {/* <button onClick={likeButton}>{image}</button> */}
		  <FavoriteBorderIcon className = "abc" id={`hrt-icon${index}`} onClick={(e)=>likeButton(e)}/>
          
        </div>
      </div>
    </>
  );
}

export default NewsCard;
