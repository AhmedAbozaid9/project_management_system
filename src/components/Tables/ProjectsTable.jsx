"use client";

import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  CircularProgress,
  getKeyValue,
} from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { columns } from "@/constants";
import Link from "next/link";

const rows = [
  {
    _id: "1",
    name: "Devvio",
    tech: "react",
    type: "website",
    year: "2023",
    github: "https://github.com",
    status: "Completed",
  },
  {
    _id: "2",
    name: "Lorem_box",
    tech: "next",
    type: "small app",
    year: "2022",
    github: "https://github.com",
    status: "In progress",
  },
];


const ProjectsTable = () => {
  const renderCell = useCallback((project, columnKey) => {
    const cellValue = project[columnKey];

    switch (columnKey) {
      case "name":
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

      case "year":
        return <p>{cellValue}</p>;
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
            <Tooltip color="danger" content="Delete user">
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

  return (
    <div className="pt-5 w-full overflow-x-hidden">
      <Table
        area-label="Projects table"
        selectionMode="single"
        classNames={{
          wrapper: ["bg-main-dark-bg", "rounded-md"],
          th: ["bg-transparent", "border-b", "border-divider"],
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsTable;
