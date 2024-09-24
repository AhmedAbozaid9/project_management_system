"use client";

import React, { useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { columns, statusOptions } from "@/constants";
import RenderCell from "./RenderCell";
import TopContent from "./TopContent";

const ProjectsTable = ({ projects }) => {
  const [filterValue, setFilterValue] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredProjects = [...projects];

    if (hasSearchFilter) {
      filteredProjects = filteredProjects.filter((project) =>
        project.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      console.log(statusFilter);
      filteredProjects = filteredProjects.filter((project) =>
        Array.from(statusFilter).includes(project.status)
      );
    }

    return filteredProjects;
  }, [projects, filterValue, statusFilter, hasSearchFilter]);

  return (
    <div className="pt-5 w-full overflow-x-hidden">
      <Table
        area-label="Projects table"
        selectionMode="single"
        topContent={
          <TopContent
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            setStatusFilter={setStatusFilter}
            statusFilter={statusFilter}
            length={projects.length}
          />
        }
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
        <TableBody items={filteredItems}>
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

export default ProjectsTable;
