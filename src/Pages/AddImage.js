import React, { useEffect, useState } from "react";
import axios from 'axios';
import { access_key } from "../Utils/Key";
import Anim from "../Components/Anim";
import Utils from "../Utils/Actions";
import styled from "styled-components";

const StyledBtn = styled.button`
  border: 0;
  padding: 0.7rem 2rem;
  font-size: 14px;
  border-radius: 4px;
  letter-spacing: 3px;
  width: 49%;
  font-weight: 400;
  cursor: pointer;
  &.skip_btn{
    background-color: #ea4c89;
    color: #ffffff;
    margin-right: 1%;
  }
  &.add_btn{
    background-color: #663ff4;
    color: #ffffff;
    margin-left: 1%;
  }
`;

const StyledImageDisplay = styled.div`
  text-align: center;
  padding: 1rem;
  height: 50vh;
  display: flex;
  align-items: center;
  img{
    max-height: 100%;
    margin: 0 auto;
    border-radius: 4px;
    max-width: 100%;
  }
  .img_btn_{
    text-align: center;
    padding-bottom: 1rem;
  }
`;

function AddImage(props) {
  const [images, setImages] = useState();
  let [imgPos, setImgPos] = useState(1);
  const [approved, setApproved] = useState([]);
  const [showAnim, setShowAnim] = useState(false);

  const stateUpdates = {
    setImages,
    setImgPos,
    setApproved,
    setShowAnim
  };

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`)
      .then((resp) => {
        setImages(resp.data)
      })
    let approvedBefore = localStorage.getItem("approvedImages");
    approvedBefore = JSON.parse(approvedBefore)
    if (approvedBefore) {
      setApproved(approvedBefore);
    }
    setTimeout(() => {
      setShowAnim(false)
    }, 1500)
  }, []);

  const parameters = {
    stateUpdates,
    images,
    imgPos,
    approved,
    showAnim,
    setCount: props.setCount
  };


  return (
    <div className="main_wrapper">
      <div className="img_box_">
        <h2 className="second_header">Add Image</h2>
        <StyledImageDisplay>
          {
            images &&
            <img src={images[imgPos].urls.small} alt="some" />
          }
        </StyledImageDisplay>
        <div className="img_btn_">
          <StyledBtn className="skip_btn" onClick={() => Utils.rejectScen(parameters)}>Skip</StyledBtn>
          <StyledBtn className="add_btn" onClick={() => Utils.approvalScen(parameters)}>+ Add</StyledBtn>
        </div>
      </div>
      {
        showAnim &&
        <Anim status={"Added"} />
      }
    </div>
  );
}

export default AddImage;
