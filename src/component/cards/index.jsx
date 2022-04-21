import React from "react";
import mainImg from "../../images/Ogogo.png";
import bookMark from "../../images/Bookmark.png";
import styled from "./cards.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Шаблон для карточек курсов
export default function Cards(props) {

  const dispatch = useDispatch()
  dispatch()
  return (
    <div className={styled.container}>
      <Link to="/course">
        <div className={styled.cards}>
          <img className={styled.mainImg} src={props.img} width="157px" alt="" />
          <img className={styled.bookMark} src={bookMark} alt="" width="30px" />
          <p className={styled.title}>{props.title}</p>
          <p className={styled.category}>{props.category}</p>
          <div className={styled.stat}>
            <div>
              <box-icon
                name="star"
                type="solid"
                flip="horizontal"
                color="#ffff00"
              ></box-icon>
              <span>{props.rate}</span>
            </div>
            <div>
              <box-icon
                name="message-rounded-dots"
                flip="horizontal"
                color="#8b8b8b"
              ></box-icon>
              <span>{props.comment}</span>
            </div>
          </div>
          {props.cost ?
            <p className={styled.costs}>{props.cost}</p>
            :
            <></>
          }
        </div>
      </Link>
    </div>
  );
}
