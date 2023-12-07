import { useState } from "react";
import aboutApi from "../api/aboutApi";

function About() {
  let [content, setContent] = useState("");
  aboutApi.getPlatformAboutUs({}).then((res) => {
    const { success, data } = res;
    if (success) {
      content = setContent(data);
      console.log(data);
    }
  });
  return (
    <div className="about-page">
      <div className="banner">
        <h1 className="title">
          <p>关于「DOSS直聘」</p>
          <p>科技的未来，招聘的未来</p>
        </h1>
        <div className="description">
          <p className="text">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
