import React from 'react';
import CardInfo from './CardInfo';
import './CardStyle.css';

const Tabs = (tabData) => {
    return (
      <>
        {tabData.map((tab) => {
          return (
            <div key={tab} className="tabBar">
              <button className="tabName">{tab}</button>
            </div>
          );
        })}
      </>
    );
  };

const Card = () => {
    return (
        <>
      {CardInfo.map((data) => {
        return (
          <div key={data.date} className="card">
            <div className="tabs">{Tabs(data.tabs)}</div>
            <div className="profileSection">
              <div className="profileImage">{data.profileImage}</div>
              <div className="textSection">
                <p>{data.date}</p>
                <p>{data.tag}</p>
                <p>{data.clinic}</p>
              </div>
            </div>
            <div className="bottomTabs">{Tabs(data.bottomtTabs)}
            </div>
          </div>
        );
      })}
    </>
    )
}

export default Card;