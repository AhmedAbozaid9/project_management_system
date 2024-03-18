"use client";

import React, { useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";

import { columns, statusOptions } from "@/constants";
import RenderCell from "./RenderCell";

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
      filteredProjects = filteredProjects.filter((project) =>
        Array.from(statusFilter).includes(project.status)
      );
    }

    return filteredProjects;
  }, [projects, filterValue, statusFilter, hasSearchFilter]);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<IoIosSearch />}
            value={filterValue}
            onClear={() => setFilterValue("")}
            onValueChange={setFilterValue}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<IoChevronDownOutline className="text-small" />}
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {projects.length} projects
          </span>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, projects.length]);

  return (
    <div className="pt-5 w-full overflow-x-hidden">
      <Table
        area-label="Projects table"
        selectionMode="single"
        topContent={topContent}
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
