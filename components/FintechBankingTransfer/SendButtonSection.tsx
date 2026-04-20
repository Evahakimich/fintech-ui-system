import React from "react";
import { Link } from "react-router-dom";

const SendButtonSection = () => (
  <>
    <Link
      to="/fintech-banking-transfer"
      className="w-full h-14 rounded-2xl bg-btn-gradient btn-glow text-white font-medium text-base mt-8 transition-transform active:scale-95 flex items-center justify-center"
      id="send-btn"
    >
      Send Money
    </Link>
  </>
);

export default SendButtonSection;
