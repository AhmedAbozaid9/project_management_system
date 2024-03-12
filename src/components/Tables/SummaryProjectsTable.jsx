"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { columns } from "@/constants";
import RenderCell from "./RenderCell";

const projects = [
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

const SummaryProjectsTable = () => {
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
        <TableBody items={projects}>
          {(project) => (
            <TableRow key={project._id}>
              {(columnKey) => (
                <TableCell>
                  <RenderCell project={project} columnKey={columnKey} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SummaryProjectsTable;
