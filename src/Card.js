import React, {useState} from 'react';
import CardInfo from './CardInfo';
import './CardStyle.css';

const Tabs = (tabData) => {
  const [selected, setselected] = useState([]);
  const onchange=(element)=>{
    let array=[...selected];
    if(array.includes(element))
    array.splice(array.indexOf(element),1);
    else array.push(element);
    setselected(array);
  }
    return (
      <>
        {tabData.map((tab) => {
          return (
            <div key={tab} className="tabBar">
              <button onClick={() => onchange(tab)} className={selected.includes(tab) ? "tabNameSelected" : "tabName"} >{tab}</button>
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
              <div className="profileImagesection">{data.profileImage}</div>
              <div className="textSection">
                <p>{data.date}</p>
                <p className="tag">{data.tag}</p>
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