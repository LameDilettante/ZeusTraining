import React from "react";
import map from "../../Assets/location_on_black_24dp.svg";
import instruction from "../../Assets/Instructional Designer.svg";
import expand from "../../Assets/expand_less_black_24dp.svg";
import radiocheck from "../../Assets/radio_button_checked_black_24dp.svg";
import radiouncheck from "../../Assets/radio_button_unchecked_black_24dp.svg";
import check from "../../Assets/check_box_outline_blank_black_24dp.svg";
import uncheck from "../../Assets/check_box_black_24dp.svg";
import upload from "../../Assets/upload_black_24dp.svg";

export default function Main() {
  const [isShown, setIsShown] = React.useState(false);
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      <div className="box">
        <div className="flex-div">
          <p className="box--heading">Walk in for Designer job role</p>
          <div className="button-span2">
            <button type="button" className="applybutton">
              APPLY
            </button>
          </div>
        </div>
        <div className="box--div1">
          <p className="box--date">Date & Time :</p>
          <span className="box--span1">
            <p className="box--time">10-July-2021 to 11-July-2021</p>
            <p className="divider">|</p>
            <img src={map} className="map--img" alt="map"></img>
            <p className="box--info1">Mumbai</p>
          </span>
        </div>
        <hr></hr>
        <div className="box--div2">
          <p className="box--info2">Job Roles :</p>
          <span className="box--span2">
            <img
              src={instruction}
              className="instruction"
              alt="instruction"
            ></img>
            <p className="box--role">Instructional Designer</p>
          </span>
        </div>

        <div className="pre--div">
          <p className="pre--p">Pre-requisites & Application Process</p>
          <div className="vertical"></div>
          <img
            src={expand}
            className="info--expand"
            onClick={toggleShown}
            alt="expand"
          ></img>
        </div>
        {isShown && (
          <div>
            <div className="isshown-div">
              <p className="general-ins">General Instructions :</p>
              <p className="general-info">
                - We have a two–year indemnity for permanent candidates. We will
                provide training to the selected candidates.<br></br>-
                Candidates who have appeared for any test held by Zeus Learning
                in the past 12 months will not be allowed to appear for this
                recruitment test.
              </p>
            </div>
            <hr></hr>
            <div className="isshown-div">
              <p className="general-ins">Instructions for the Exam :</p>
              <p className="general-info">
                - Candidates are requested to log in half an hour prior to the
                exam start time as they would need to capture their image using
                a web camera. By taking this test, you are permitting the
                examination system to capture your video for invigilation
                purposes.<br></br> - Candidates would not be able to appear for
                the exam if the web camera attached to their system is not
                functional.<br></br> - The web camera of your system must be
                enabled and must remain switched on throughout the examination.
                In the event of non-receipt of a webcam, your examination will
                be considered null and void.<br></br> - Candidate’s audio and
                video will be recorded during the examination and will also be
                monitored by a live proctor. The proctor may terminate your exam
                in case he/she observes any malpractice during the exam.{" "}
                <br></br>- Candidates are advised to use their own Laptop/PC
                with a stable internet connection (min 1 Mbps) during the exam.
                <br></br> - Candidates cannot use an iOS system/device for this
                exam.
              </p>
            </div>
            <hr></hr>
            <div className="isshown-div">
              <p className="general-ins">Minimum System Requirements :</p>
              <p className="general-info">
                - Personal Laptop or Desktop computer in working condition with
                good quality camera (you can use Windows 7 and above). <br></br>
                - The latest version of Google Chrome Browser only. <br></br>-
                Please note that Internet speed should be minimum 1 Mbps.{" "}
                <br></br>- Do not use a MacBook or iPad for the proctored exam.
              </p>
            </div>
            <hr></hr>
            <div className="isshown-div">
              <p className="general-ins">Process :</p>
              <p className="general-info">
                - Every round is an elimination round. Candidates need to clear
                all rounds to get selected.<br></br>
                <br></br> Round I : 4th August, 2018<br></br> Aptitude Test : 25
                Questions <br></br>
                <br></br> Round II (Interview) : 4th August, 2018.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="box">
        <p className="box2--time">Time Slots & Preferences</p>
        <div>
          <p className="general-ins2">Select a Time Slot :</p>
          <div>
            <div className="innerdiv">
              <img src={radiocheck} className="innerimg" alt="innerimg"></img>
              <p className="slotandtime">9:00 AM to 11:00 AM</p>
            </div>
            <div className="innerdiv">
              <img src={radiouncheck} className="innerimg" alt="innerimg"></img>
              <p className="slotandtime">1:00 PM to 3:00 PM</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <p className="general-ins2">Select Your Preference :</p>
          <div>
            <div className="innerdiv">
              <img src={check} className="innerimg" alt="innerimg"></img>
              <p className="slotandtime">Instructional Designer</p>
            </div>
            <div className="innerdiv">
              <img src={uncheck} className="innerimg" alt="innerimg"></img>
              <p className="slotandtime">Software Engineer</p>
            </div>
            <div className="innerdiv">
              <img src={check} className="innerimg" alt="innerimg"></img>
              <p className="slotandtime">Software Quality Engineer</p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="innerdiv2">
          <img src={upload} className="innerimg2" alt="innerimg"></img>
          <p className="upload">Upload Updated Resume</p>
        </div>
      </div>
      <div className="pre--div2">
        <p className="pre--p">Instructional Designer</p>
        <div className="vertical"></div>
        <img src={expand} className="info--expand" alt="innerimg"></img>
      </div>
      <div className="pre--div2">
        <p className="pre--p">Software Engineer</p>
        <div className="vertical"></div>
        <img src={expand} className="info--expand" alt="exapnd"></img>
      </div>
      <div className="pre--div2">
        <p className="pre--p">Software Quality Engineer</p>
        <div className="vertical"></div>
        <img src={expand} className="info--expand" alt="expand"></img>
      </div>
    </div>
  );
}
