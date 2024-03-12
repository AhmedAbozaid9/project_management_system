import React, { useCallback } from "react";
import { Chip, Tooltip, CircularProgress } from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import Link from "next/link";

import { statusColorMap } from "@/constants";

const RenderCell = ({ project, columnKey }) => {
  const renderCell = useCallback((project, columnKey) => {
    const cellValue = project[columnKey];

    switch (columnKey) {
      case "title":
        return <p>{cellValue}</p>;
      case "tech":
        return (
          <p className="text-bold text-sm capitalize text-default-400">
            {cellValue}
          </p>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[project.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );

      case "date":
        return <p>{new Date(cellValue).getFullYear()}</p>;
      case "progress":
        return (
          <div className="flex">
            <CircularProgress
              size="lg"
              value={70}
              strokeWidth={4}
              showValueLabel={true}
            />
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-3">
            <Tooltip content="View project">
              <Link href={`/projects/${project._id}`}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <FaRegEye size={20} />
                </span>
              </Link>
            </Tooltip>
            <Tooltip color="danger" content="Delete project">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <LuTrash2 size={20} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return renderCell(project, columnKey);
};

export default RenderCell;
