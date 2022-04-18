import axios from 'axios';
import { access_key } from "./Key";

let rejected_ = localStorage.getItem("rejected");
if(rejected_){
  rejected_ = rejected_.split(",");
}else{
  rejected_ =[];
}

const rejectScen = (par) => {
  console.log("par", par);
  rejected_.push(par.images[par.imgPos].id)
  localStorage.setItem("rejected", rejected_);
  if (par.imgPos === par.images.length - 1) {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`)
      .then((resp) => {
        console.log("resp", resp);
        par.stateUpdates.setImages(resp.data)
        par.stateUpdates.setImgPos(1)
      })
  } else {
    par.stateUpdates.setImgPos(par.imgPos + 1);
  }
}
const approvalScen = (par) => {
  let approvedArray = [];
  par.stateUpdates.setShowAnim(true)
  if (par.imgPos === par.images.length - 1) {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`)
      .then((resp) => {
        console.log("resp", resp);
        par.stateUpdates.setImages(resp.data)
        par.stateUpdates.setImgPos(1)
      })
    let _img = {
      "url": par.images[1].urls.small,
      "id": par.images[1].id
    }
    if (par.approved.length) {
      approvedArray = par.approved;
      approvedArray.push(_img)
      par.stateUpdates.setApproved(approvedArray);
      setTimeout(() => {
        par.stateUpdates.setShowAnim(false)
      }, 1500)
    } else {
      approvedArray.push(_img)
      par.stateUpdates.setApproved(approvedArray);
      setTimeout(() => {
        par.stateUpdates.setShowAnim(false)
      }, 1500)
    }
    localStorage.setItem("approvedImages", JSON.stringify(approvedArray));
  } else {
    let _img = {
      "url": par.images[par.imgPos].urls.small,
      "id": par.images[par.imgPos].id
    }
    if (par.approved.length) {
      approvedArray = par.approved;
      approvedArray.push(_img)
      par.stateUpdates.setApproved(approvedArray);
      par.stateUpdates.setImgPos(par.imgPos + 1);
      setTimeout(() => {
        par.stateUpdates.setShowAnim(false)
      }, 1500)
    } else {
      approvedArray.push(_img)
      par.stateUpdates.setApproved(approvedArray);
      par.stateUpdates.setImgPos(par.imgPos + 1);
      setTimeout(() => {
        par.stateUpdates.setShowAnim(false)
      }, 1500)
    }
    localStorage.setItem("approvedImages", JSON.stringify(approvedArray));
    par.setCount(approvedArray.length)
  }

}

const Utils = {
  rejectScen,
  approvalScen
}

export default Utils