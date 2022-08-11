import React, { useEffect, useState } from "react";

import { getNews } from "../Service/getNews";
import Header from "./Header";

import "./news-outlet.css";

const NewsOutlet = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectOption, setSelectOption] = useState("");
  const getAllNews = async () => {
    let newsContent = await getNews(selectOption);
    setNewsData(newsContent.data.articles);
  };

  const selectCategory = (event) => {
    setSelectOption(event.target.value);
  };

  useEffect(() => {
    getAllNews();
  }, [selectOption]);

  console.log(newsData);

  return (
    <div className="main">
      <div className="select">
        <label htmlFor="pet-select">Votre thème:</label>

        <select
          className="select-box"
          name="category"
          id="news-select"
          onChange={selectCategory}
        >
          <option value="">Veillez Choisir Une Catégorie</option>
          <option value="General">Générale</option>
          <option value="health">Santé</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
          <option value="entertainment">Divertissement</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div className="grid-main">
        {newsData?.map((news, index) => {
          return (
            <div className="grid-child" key={index}>
              <img
                className="news-img"
                src={news?.urlToImage}
                alt={news?.title}
              />
              <p className="news-author">
                Author: {news?.author ? news?.author : "No author"}
              </p>
              <p className="news-published">{news?.publishedAt.substr(0, 4)}</p>

              <p className="news-title">{news?.title}</p>
              <p className="news-content">{news?.content}</p>

              <a
                className="news-link"
                href={news?.url}
                rel="noreferrer"
                target="_blank"
              >
                Read More...
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsOutlet;
