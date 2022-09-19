import React from "react";
import location from "../Assets/location_on_black_24dp.svg";
import instructionaldesigner from "../Assets/Instructional Designer.svg";
import softwareengineer from "../Assets/Instructional Designer.svg";
import softwareQualityEngineer from "../Assets/Software Quality Engineer.svg";

export default function Card(props) {
  let badgeText;
  if (props.daysleft === 5) {
    badgeText = "Expires in 5 days";
  }
  let internshipTag;
  if (props.internship === "yes") {
    internshipTag = "Internship Opportunity for MCA Students";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <h3 className="card-heading">{props.title}</h3>
      <p className="card-date-time">Date & Time:</p>
      <div className="card-datetime-and-location">
        <p className="dates">{props.dates}</p>
        <p className="line">|</p>
        <img
          className="location-logo"
          src={location}
          alt="location-image"
        ></img>
        <p className="location-name">{props.location}</p>
      </div>

      <p className="grey">Job Roles:</p>
      <div className="job-roles">
        <div className="job-icon-and-role">
          {props.role1 && (
            <img
              className="job-icon-img"
              src={instructionaldesigner}
              alt="instructional designer"
            ></img>
          )}
          <p className="role">{props.role1}</p>
        </div>
        <div className="job-icon-and-role">
          {props.role2 && (
            <img
              className="job-icon-img"
              src={softwareengineer}
              alt="software engineer"
            ></img>
          )}
          <p className="role">{props.role2}</p>
        </div>
        <div className="job-icon-and-role">
          {props.role3 && (
            <img
              className="job-icon-img"
              src={softwareQualityEngineer}
              alt="software Quality Engineer"
            ></img>
          )}
          <p className="role">{props.role3}</p>
        </div>
      </div>
      {internshipTag && <p className="internship">{internshipTag}</p>}
      <div>
        <button className="view-more-details-button">VIEW MORE DETAILS</button>
      </div>
    </div>
  );
}
