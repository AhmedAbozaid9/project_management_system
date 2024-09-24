"use client";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <InfinitySpin color="#F8EDFF" />
    </div>
  );
};

export default Loading;
