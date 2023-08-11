import React from "react";
import { AimOutlined } from "@ant-design/icons";
import { BsGlobe, BsPencil, BsBoxArrowUpRight } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import Image from "next/image";
import Logo from "../../../public/assets/translator.jpg";
const Banner = () => {
  return (
    <div className="mb-8">
      <div className="mb-8">
        <div>
          <Image src={Logo} alt="Image" />
        </div>
      </div>
      <section className="translator">
        <h1 className="text-3xl text-center font-bold text-green-500 mt-5">
          Translate your Language
        </h1>
        <p className="text-center mb-5 py-2">
          Fix grammar and punctuation mistakes, rephrase sentences, express
          nuances, and find your perfect tone of voice.
        </p>
        <div className="row-wrapper">
          <div className="translator-container input-lang">
            <div className="top-row">
              <button className=" btn-translate">Translate</button>
            </div>
            <form className="input-form">
              <textarea
                className="text-box"
                placeholder="Enter text (any language)"
              ></textarea>

              <AimOutlined className="icon-btn close-btn" />
            </form>
          </div>
          <div className="translator-container output-lang">
            <div className="top-row">
              <select
                name="languages"
                id="languages"
                className="form-select form-select-sm"
              >
                <option value="ar">Arabic</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <p className="text-box output-box">
              <span className="output-placeholder">Select a language</span>
            </p>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-4  my-10 w-1/2">
        <div className="border shadow-xl  border-rgb(17 24 39) px-5 text-center py-8 rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <div>
              <BsGlobe className="text-2xl text-blue-800"></BsGlobe>
            </div>

            <div>
              <h2 className="font-semibold text-blue-800">Translate text</h2>
              <h5>31 Language</h5>
            </div>
          </div>
        </div>

        <div className="border shadow-xl  border-color: rgb(17 24 39) px-5 text-center py-8 rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <div>
              <GrDocumentText className="text-2xl text-blue-800"></GrDocumentText>
            </div>

            <div>
              <h2 className="font-semibold text-blue-800">Translate files</h2>
              <h5>.pdf, .docx, .pptx</h5>
            </div>
          </div>
        </div>

        <div className="border shadow-xl  border-color: rgb(17 24 39) px-5 text-center py-8 rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <div>
              <BsPencil className="text-2xl text-blue-800"></BsPencil>
            </div>

            <div>
              <h2 className="font-semibold text-blue-800">
                DeepL Write <BsBoxArrowUpRight />{" "}
              </h2>
              <h5>AI-powered edits</h5>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="my-10">
        <h1 className="text-2xl font-bold text-center mt-10">
          Translate Even Faster With ONlineTranslator Apps
        </h1>
        <div className="row-wrapper gap-5 justify-center mt-8">
          <div>
            <h1 className="text-lg font-semibold">
              Online translate For Windows
            </h1>
            <button className="btn btn-success mt-10">Download For Free</button>
          </div>
          <div className="divider divider-horizontal"></div>
          <div>
            <h1 className="text-lg font-semibold">
              Online translate For Ios and Android
            </h1>
            <button className="btn btn-outline mt-10">Download For Free</button>
          </div>
          <div className="divider divider-horizontal text-black"></div>
          <div>
            <h1 className="text-lg font-semibold">
              Online translate For Chrome
            </h1>
            <button className="btn btn-outline mt-10">Download For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
