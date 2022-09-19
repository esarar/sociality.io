import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChartSimple,
  faPenToSquare,
  faComments,
  faEarListen,
  faChartLine,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ open, selectedBrand, onChange, isOpen, isSelected }) {
  const [selected, setSelected] = React.useState(null);

  const data = [
    { title: "NOTIFICATIONS" },
    {
      title: "SUMMARY",
      child: "Statistics",
    },
    {
      title: "PUBLISH",
      child: "Compose",
      child2: "Feed",
    },
    { title: "ENGAGE", child: "Comment", child2: "Poke" },
    {
      title: "LISTEN",
      child: "Inbox",
      child2: "Your List",
    },
    {
      title: "REPORT",
      child: "Graphic",
    },
  ];

  function handleClick(i) {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <div className={open ? "sidebar-container closed" : "sidebar-container"}>
      {open ? (
        <div>
          <div className="sidebar-closed">
            <img
              className="sidebar-image"
              src={"https://sociality.io/images/pages/legal/og-image.png"}
              alt="logo"
            />
          </div>
          <div className="brand-container">
            <ul className="brand-list">
              <li>
                <img
                  id="1"
                  onClick={onChange}
                  className={
                    selectedBrand === "1"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/fb0d90eab35f628ee041b5e99d28671bcb98fd10.png")}
                  alt="img1"
                ></img>
              </li>
              <li>
                <img
                  id="2"
                  onClick={onChange}
                  className={
                    selectedBrand === "2"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/a346de8d0b5fc6fbdb8d7d7c8332eca6559894ac.png")}
                  alt="img2"
                ></img>
              </li>
              <li>
                <img
                  id="3"
                  onClick={onChange}
                  className={
                    selectedBrand === "3"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/cdfe73ae3be5f8239dc639ece0c3d756df5f8d3e.png")}
                  alt="img3"
                ></img>
              </li>
              <li>
                <img
                  id="4"
                  onClick={onChange}
                  className={
                    selectedBrand === "4"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/9e0db8c9d09c11a5bd470239c23da19244aaf8d3.png")}
                  alt="img4"
                ></img>
              </li>
              <li>
                <img
                  id="5"
                  onClick={onChange}
                  className={
                    selectedBrand === "5"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/6748d6d908e9423ee0f75fdd4aa9c203681f4312.png")}
                  alt="img5"
                ></img>
              </li>
              <li>
                <img
                  id="6"
                  onClick={onChange}
                  className={
                    selectedBrand === "6"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/ac740536a9e6c4af007d1a14f32e3312a4548e22.png")}
                  alt="img6"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="sidebar-container">
          <div className="sidebar-header">
            <img
              className="sidebar-logo"
              src={require("../assets/images/61f27b31e11844f0b31a86fccb673451b4ab493c.png")}
              alt="logo"
            />
            <img
              src={require("../assets/images/arrow.png")}
              className="close-sidebar"
              onClick={isOpen}
              alt="closebar"
            />
          </div>
          <div className="brand-container">
            <ul className="brand-list">
              <li>
                <img
                  id="1"
                  onClick={onChange}
                  className={
                    selectedBrand === "1"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/fb0d90eab35f628ee041b5e99d28671bcb98fd10.png")}
                  alt="img1"
                ></img>
              </li>
              <li>
                <img
                  id="2"
                  onClick={onChange}
                  className={
                    selectedBrand === "2"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/a346de8d0b5fc6fbdb8d7d7c8332eca6559894ac.png")}
                  alt="img2"
                ></img>
              </li>
              <li>
                <img
                  id="3"
                  onClick={onChange}
                  className={
                    selectedBrand === "3"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/cdfe73ae3be5f8239dc639ece0c3d756df5f8d3e.png")}
                  alt="img3"
                ></img>
              </li>
              <li>
                <img
                  id="4"
                  onClick={onChange}
                  className={
                    selectedBrand === "4"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/9e0db8c9d09c11a5bd470239c23da19244aaf8d3.png")}
                  alt="img4"
                ></img>
              </li>
              <li>
                <img
                  id="5"
                  onClick={onChange}
                  className={
                    selectedBrand === "5"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/6748d6d908e9423ee0f75fdd4aa9c203681f4312.png")}
                  alt="img5"
                ></img>
              </li>
              <li>
                <img
                  id="6"
                  onClick={onChange}
                  className={
                    selectedBrand === "6"
                      ? "brand-image selected"
                      : "brand-image"
                  }
                  src={require("../assets/images/ac740536a9e6c4af007d1a14f32e3312a4548e22.png")}
                  alt="img6"
                ></img>
              </li>
            </ul>
          </div>
          <div className="accordion">
            {data.map((item, i) => (
              <div key={i}>
                <ul className="accordion-list">
                  <li
                    className={
                      item.title === "NOTIFICATIONS"
                        ? "notifications"
                        : "accordion-item"
                    }
                    onClick={() => handleClick(i)}
                  >
                    <i className="awesome">
                      <FontAwesomeIcon
                        icon={
                          (item.title === "NOTIFICATIONS" && faBell) ||
                          (item.title === "SUMMARY" && faChartSimple) ||
                          (item.title === "PUBLISH" && faPenToSquare) ||
                          (item.title === "ENGAGE" && faComments) ||
                          (item.title === "LISTEN" && faEarListen) ||
                          (item.title === "REPORT" && faChartLine)
                        }
                      />
                    </i>
                    {item.title}
                    {item.title !== "NOTIFICATIONS" && (
                      <i className="plus">
                        {selected === i ? (
                          <FontAwesomeIcon icon={faMinus} />
                        ) : (
                          <FontAwesomeIcon icon={faPlus} />
                        )}
                      </i>
                    )}
                    {item.title === "NOTIFICATIONS" && (
                      <p className="notification-stats">29</p>
                    )}
                  </li>
                </ul>
                {item.child && (
                  <div className="child-list">
                    <li
                      className={selected === i ? "content show" : "content"}
                      value={item.child}
                      onClick={(event) => isSelected(event, i)}
                    >
                      {item.child}
                    </li>
                  </div>
                )}
                {item.child2 && (
                  <div className="child-list2">
                    <li
                      className={selected === i ? "content show" : "content"}
                      value={item.child2}
                      onClick={(event) => isSelected(event, i)}
                    >
                      {item.child2}
                    </li>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
