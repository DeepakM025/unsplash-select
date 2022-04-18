import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Anim from "../Components/Anim";

function Home(props) {
  const [approved, setApproved] = useState([]);
  const [showAnim, setShowAnim] = useState(true)
  useEffect(() => {
    let approvedBefore = localStorage.getItem("approvedImages");
    approvedBefore = JSON.parse(approvedBefore)
    if (approvedBefore) {
      setApproved(approvedBefore);
    }
    setTimeout(() => {
      setShowAnim(false)
    }, 1500)
  }, [])
  props.setCount(approved.length)
  return (
    <React.Fragment>
      <div className="add_img_header">
        <h2>Added Images ({approved.length})</h2>
        <Link to={"/add"}>+ Add</Link>
      </div>
      {
        approved.length ?
          <React.Fragment>
            <div className="added_img_">
              {
                approved.map((img, i) => {
                  return (
                    <div className="img_wrap" key={i}>
                      <img src={img.url} alt="img" />
                    </div>
                  )
                })
              }
            </div>
          </React.Fragment>
          :
          <div className="welcome_screen">
            <h3>Welcome to Select</h3>
          </div>
      }
      {
        showAnim &&
        <Anim status={"Loader"} />
      }
    </React.Fragment>
  );
}

export default Home;
