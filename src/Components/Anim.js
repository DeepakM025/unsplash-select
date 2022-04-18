import React from "react";
import Lottie from "lottie-react";
import Added from '../Assets/added.json';
import Loader from '../Assets/loader.json';

const style_one = {
  height: 75,
}
const style_two = {
  width: 300,
  height: 200
}

function Anim(props) {
  return (
    <div className="loader_wrap">
      {
        props.status === "Added" ?
          <Lottie animationData={Added} loop={true} style={style_one} />
          :
          <Lottie animationData={Loader} loop={true} style={style_two} />
      }
    </div>
  )
}

export default Anim;