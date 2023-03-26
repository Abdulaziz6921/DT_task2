import React from "react";
import "./Assets.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";
import Icons from "../Images/icons.png";
// import axios from "axios";

const Assets = (props) => {
  // console.log(props);

  return (
    <div className="container">
      {props.data.map((pr) => {
        return pr.tasks.map((task) => {
          return task.assets.map((asset) => {
            return (
              <div className="asset" key={asset.asset_id}>
                <div className="assetTitle">
                  <p>{asset.asset_title}</p>
                  <AiFillInfoCircle className="info" />
                </div>
                <div className="description">
                  <p>
                    <span style={{ fontWeight: "600" }}>Description: </span>
                    {asset.asset_description}
                  </p>
                </div>
                <hr className="hr" />

                {asset.asset_type === "display_asset" ? (
                  <div className="video">
                    <iframe
                      width="560"
                      height="315"
                      src={asset.asset_content}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  ""
                )}

                {asset.asset_type === "input_asset" &&
                asset.asset_content_type === "threadbuilder" ? (
                  <>
                    <div className="header">
                      <p>
                        <FaChevronUp />
                      </p>
                      <h3>Thread A</h3>
                    </div>
                    <div className="main">
                      <div className="inputs">
                        <div className="subThread">
                          <div className="subTitle">Sub thread 1</div>
                          <div className="input">
                            <textarea
                              className="inputSelf"
                              placeholder="Enter Text here"
                            ></textarea>
                          </div>
                        </div>

                        <div className="subThread">
                          <div className="subTitle">Sub Interpretation 1</div>
                          <div className="input">
                            <textarea
                              className="inputSelf"
                              placeholder="Enter Text here"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="selects">
                        <div className="wrapper">
                          <div className="wrap">
                            <img src={Icons} alt="Icons" />
                          </div>

                          <select>
                            <option value=" " selected disabled hidden>
                              Select Category
                            </option>
                            <option value="opt1">option1</option>
                            <option value="opt2">option2</option>
                          </select>
                          <select>
                            <option value=" " selected disabled hidden>
                              Select Process
                            </option>
                            <option value="opt1">option1</option>
                            <option value="opt2">option2</option>
                          </select>
                        </div>
                      </div>

                      <div className="summaryThread">
                        <div className="subTitle">Summary for Thread A</div>
                        <div className="input">
                          <textarea
                            className="inputSelf"
                            placeholder="Enter Text here"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}

                {asset.asset_type === "input_asset" &&
                asset.asset_content_type === "article" ? (
                  <div className="threadBuilder">
                    <div className="header"></div>
                    <div className="main">
                      <div className="inputTitle">
                        <label htmlFor="title" className="label">
                          Title
                        </label>
                        <input type="text" />
                      </div>

                      <div className="inputContent">
                        <label htmlFor="title" className="label">
                          Content
                        </label>

                        <div className="box">
                          <div className="tools"></div>
                          <textarea className="content"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          });
        });
      })}
    </div>
  );
};

export default Assets;
