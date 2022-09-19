import React from "react";
import Sidebar from "./components/Sidebar.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import data from "./assets/data.json";

function App() {
  const [getcontentData, setGetContentData] = React.useState([
    data.posts_by_date,
  ]);
  const [selectedBrand, setSelectedBrand] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const [showFeed, setShowFeed] = React.useState(false);

  function chooseBrand(i) {
    setSelectedBrand(i.target.id);
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleAccordion(event) {
    if (event.target.getAttribute("value") === "Feed") {
      setShowFeed(true);
    }
  }

  const newContentData = Array.from(getcontentData).map((item, index) => {
    return (
      <Content
        key={index}
        item={item}
        isShow={showFeed}
        selectedBrand={selectedBrand}
      />
    );
  });

  return (
    <div className="container">
      <Sidebar
        open={open}
        selectedBrand={selectedBrand}
        onChange={chooseBrand}
        isOpen={handleOpen}
        isSelected={handleAccordion}
      />
      <Header isShow={showFeed} />
      {newContentData}
    </div>
  );
}

export default App;
