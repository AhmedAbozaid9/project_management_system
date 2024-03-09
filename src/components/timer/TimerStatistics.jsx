import React from "react";

const TimerStatistics = () => {
  return (
    <div className="flex-1 flex flex-col gap-5 ">
      <div className="flex gap-5 justify-center">
        <div className="p-5 flex-1 bg-main-dark-bg rounded-md">
          <p className="text-secondary-text text-sm">Total focus time</p>
          <p className="text-large font-medium py-2">15 Hrs</p>
        </div>
        <div className="p-5 flex-1 bg-main-dark-bg rounded-md">
          <p className="text-secondary-text text-sm">Total focus time</p>
          <p className="text-large font-medium py-2">15 Hrs</p>
        </div>
      </div>
      <p className="font-medium">Recent sessions</p>
      <div className=" flex flex-col justify-center">
        <div className="flex justify-between items-center rounded-md bg-main-dark-bg p-4">
          <div className="flex flex-col justify-between">
            <p className="font-medium">Project Name</p>
            <p className="py-1 text-secondary-text text-xs">11 / 11 / 2011</p>
          </div>
          <span>30 Mins</span>
        </div>
      </div>
    </div>
  );
};

export default TimerStatistics;
