import React from "react";
import Moment from "moment";

function Content({ item, isShow }) {
  const [contentData, setContentData] = React.useState(false);

  React.useEffect(() => {
    setContentData(item);
  });

  console.log(item);

  function getImageError(e) {
    e.currentTarget.src = require("../assets/no-post-image.png");
  }
  const firstdt = Object.keys(contentData)[1];
  const seconddt = Object.keys(contentData)[0];
  const postDateFirst = Moment(firstdt).format("MMMM Do YYYY");
  const postDateSecond = Moment(seconddt).format("MMMM Do YYYY");

  const posts = (
    <div className="content-container">
      <div className="content-date">{postDateFirst}</div>
      {Array.from(item["2021-07-01"]).map((card, index) => {
        return (
          <div className="content-card">
            <div
              className={
                (card.status === 0 && "social-logo approval") ||
                (card.status === 1 && "social-logo scheduled") ||
                (card.status === 2 && "social-logo publishing") ||
                (card.status === 3 && "social-logo published") ||
                (card.status === 4 && "social-logo error")
              }
            >
              <img
                className={
                  (card.account.channel === "facebook" && "logo-content") ||
                  (card.account.channel === "instagrambusiness" &&
                    "logo-content instagram") ||
                  (card.account.channel === "twitter" && "logo-content twitter")
                }
                src={
                  (card.account.channel === "facebook" &&
                    require("../assets/images/facebook.png")) ||
                  (card.account.channel === "instagrambusiness" &&
                    require("../assets/images/instagram.png")) ||
                  (card.account.channel === "twitter" &&
                    require("../assets/images/twitter.png"))
                }
              ></img>
            </div>
            <div className="card-date">
              <span className="card-date">
                {Moment(card.published_at).format("LL - LT")}
              </span>
            </div>
            <div className="card-icons">
              <img
                className="status-icon"
                src={
                  (card.status === 1 &&
                    require("../assets/images/df066ac498fc5ce729cd4b5339814e5e61ff1b60.png")) ||
                  (card.status === 0 &&
                    require("../assets/images/9ba7e7584756b4c06e1c50454cd80887b0bc67c7.png"))
                }
              ></img>
              <img
                className="delete-icon"
                src={require("../assets/images/24af5cc7fc880a7d69d252bbf958aeabeb87d54d.png")}
              />
              <img
                className="option-icon"
                src={require("../assets/images/edcd98e3646b7ea6ace3862216380c01c6d11e16.png")}
              />
            </div>
            <div className="card-statement">
              <p className="statement-text">{card.entry.message}</p>
            </div>
            <div className="card-image">
              <img
                className="image-content"
                src={card.entry.image}
                onError={getImageError}
              />
            </div>
            <div className="card-interacts">
              <img
                className="interact-icon"
                src={require("../assets/images/5e5497aa354cdbe6f6705467c4f6309ece1a455f.png")}
              />
              <p className="interact-stats">1</p>
              <img
                className="interact-icon"
                src={require("../assets/images/d40a556ba8ad4cb368ff428206168f561e2a0e20.png")}
              />
              <p className="interact-stats">0</p>
              <img
                className="interact-icon"
                src={require("../assets/images/edd8fdc61769a76bcd1b4b61f94162a6e0ef6328.png")}
              />
              <p className="interact-stats">0</p>
              <img
                className="interact-icon"
                src={require("../assets/images/dfbe5362fdb11e04aae993323a7a916a2e908d26.png")}
              />
              <p className="interact-stats">0</p>
            </div>
          </div>
        );
      })}

      <div className="content-date">{postDateSecond}</div>
      {Array.from(item["2021-06-17"]).map((card, index) => {
        return (
          <div className="content-card">
            <div
              className={
                (card.status === 0 && "social-logo approval") ||
                (card.status === 1 && "social-logo scheduled") ||
                (card.status === 2 && "social-logo publishing") ||
                (card.status === 3 && "social-logo published") ||
                (card.status === 4 && "social-logo error")
              }
            >
              <img
                className={
                  (card.account.channel === "facebook" && "logo-content") ||
                  (card.account.channel === "instagrambusiness" &&
                    "logo-content instagram") ||
                  (card.account.channel === "twitter" && "logo-content twitter")
                }
                src={
                  (card.account.channel === "facebook" &&
                    require("../assets/images/facebook.png")) ||
                  (card.account.channel === "instagrambusiness" &&
                    require("../assets/images/instagram.png")) ||
                  (card.account.channel === "twitter" &&
                    require("../assets/images/twitter.png"))
                }
              ></img>
            </div>
            <div className="card-date">
              <span className="card-date">
                {Moment(card.published_at).format("LL - LT")}
              </span>
            </div>
            <div className="card-icons">
              <img
                className="status-icon"
                src={
                  (card.status === 1 &&
                    require("../assets/images/df066ac498fc5ce729cd4b5339814e5e61ff1b60.png")) ||
                  (card.status === 2 &&
                    require("../assets/images/9ba7e7584756b4c06e1c50454cd80887b0bc67c7.png"))
                }
              ></img>
              <img
                className="delete-icon"
                src={require("../assets/images/24af5cc7fc880a7d69d252bbf958aeabeb87d54d.png")}
              />
              <img
                className="option-icon"
                src={require("../assets/images/edcd98e3646b7ea6ace3862216380c01c6d11e16.png")}
              />
            </div>
            <div className="card-statement">
              <p className="statement-text">{card.entry.message}</p>
            </div>
            <div className="card-image">
              <img
                className="image-content"
                src={card.entry.image}
                onError={getImageError}
              />
            </div>
            <div className="card-interacts">
              <img
                className="interact-icon"
                src={require("../assets/images/5e5497aa354cdbe6f6705467c4f6309ece1a455f.png")}
              />
              <p className="interact-stats">124</p>
              <img
                className="interact-icon"
                src={require("../assets/images/d40a556ba8ad4cb368ff428206168f561e2a0e20.png")}
              />
              <p className="interact-stats">123</p>
              <img
                className="interact-icon"
                src={require("../assets/images/edd8fdc61769a76bcd1b4b61f94162a6e0ef6328.png")}
              />
              <p className="interact-stats">123</p>
              <img
                className="interact-icon"
                src={require("../assets/images/dfbe5362fdb11e04aae993323a7a916a2e908d26.png")}
              />
              <p className="interact-stats">1452</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {!isShow && (
        <div className="welcome">
          <h1 className="first delay-1">Welcome to Sociality.io</h1>
          <h2 className="second delay-2">
            To see the posts, click any brand and then click the "Feed" tab
            under the "Publish" list
          </h2>
        </div>
      )}
      {isShow && posts}
    </>
  );
}

export default Content;
