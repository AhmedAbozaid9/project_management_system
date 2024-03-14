import React from "react";

const TimerStatistics = ({ sessions, totalTime, totalCount }) => {
  return (
    <div className="flex-1 flex flex-col gap-5 ">
      <div className="flex gap-5 justify-center">
        <div className="p-5 flex-1 bg-main-dark-bg rounded-md">
          <p className="text-secondary-text text-sm">Total focus time</p>
          <p className="text-large font-medium py-2">
            {Math.round(totalTime / 3600)} Hrs
          </p>
        </div>
        <div className="p-5 flex-1 bg-main-dark-bg rounded-md">
          <p className="text-secondary-text text-sm">Total sessions</p>
          <p className="text-large font-medium py-2">{totalCount} sessions</p>
        </div>
      </div>
      <p className="font-medium">Recent sessions</p>
      <div className=" flex flex-col justify-center gap-3">
        {sessions?.map((session) => (
          <div
            key={session._id}
            className="flex justify-between items-center rounded-md bg-main-dark-bg p-4"
          >
            <div className="flex flex-col justify-between">
              <p className="font-medium">{session.project?.title}</p>
              <p className="py-1 text-secondary-text text-xs">
                {new Date(session.date).getFullYear()}
              </p>
            </div>
            <span>{Math.round(session.time / 60)} Mins</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimerStatistics;
