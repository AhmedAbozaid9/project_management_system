import React from 'react';
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";

import Status from "@/components/general/Status";
import {Button, Tooltip} from "@nextui-org/react";

const ChangeStatus = ({currentStatus}) => {
    const allStatus = ["Not started", "In progress", "Done"].filter(status => status !== currentStatus)

    return (
        <div className="flex relative">
            <Popover placement="bottom">
                <PopoverTrigger>
               <Button className="bg-transparent p-0 "> <Status status={currentStatus}/></Button>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col w-48 items-start">
                    <h3>Change status</h3>
                    {allStatus.map(status => <Button key={status} className="bg-transparent p-0 "> <Status status={status}/></Button> )}
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default ChangeStatus;