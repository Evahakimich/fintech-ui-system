import React from "react";
import { Link } from "react-router-dom";

const PersonalInfoCard = () => (
  <>
    <div
      className="glass-panel rounded-2xl p-5 mb-6 relative overflow-hidden"
      id="section-2"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full"></div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-semibold text-white">Personal Details</h3>
        <Link
          to="/fintech-banking-profile-settings"
          className="text-xs text-purple-400 hover:text-purple-300"
        >
          Edit
        </Link>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Full Name</span>
          <span className="text-xs text-gray-200 font-medium">
            Emma Grace Johnson
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Date of Birth</span>
          <span className="text-xs text-gray-200 font-medium">
            14 Oct 1992
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Nationality</span>
          <span className="text-xs text-gray-200 font-medium">
            United States
          </span>
        </div>
      </div>
    </div>
  </>
);

export default PersonalInfoCard;
