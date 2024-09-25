import React, { use, useCallback } from "react";
import { Tooltip, CircularProgress } from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import Link from "next/link";
import { useContext } from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";

import { statusColorMap } from "@/constants";
import Status from "@/components/general/Status";
import axios from "axios";
import toast from "react-hot-toast";

const RenderCell = ({ project, columnKey }) => {
  const { refetch } = useContext(ProjectsContext);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/projects/${project._id}`);
      if (response.status === 200) {
        refetch();
        toast.success("Project deleted successfully");
      }
    } catch (e) {
      toast.error("Failed to delete project");
      console.log(e);
    }
  };
  const renderCell = useCallback((project, columnKey) => {
    const cellValue = project[columnKey];

    switch (columnKey) {
      case "title":
        return <p>{cellValue}</p>;

      case "status":
        return <Status status={cellValue} />;

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
              <button onClick={handleDelete}>
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <LuTrash2 size={20} />
                </span>
              </button>
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
