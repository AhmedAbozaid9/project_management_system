import React from 'react';
import {Chip} from "@nextui-org/react";
import {statusColorMap} from "@/constants";

const Status = ({status}) => {
    return (
        <Chip
            className="capitalize w-full"
            color={statusColorMap[status]}
            size="sm"
            variant="flat"
        >
            {status}
        </Chip>
    );
};

export default Status;