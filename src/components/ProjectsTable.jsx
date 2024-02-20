import React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const ProjectsTable = () => {
  const rows = [
    {
      key: "1",
      name: "Devvio",
      tech: "react",
      type: "website",
      year: "2023",
      github: "https://github.com",
      status: "in done",
      edit: "edit",
    },
    {
      key: "2",
      name: "Lorem_box",
      tech: "next",
      type: "small app",
      year: "2022",
      github: "https://github.com",
      status: "in progress",
      edit: "edit",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "tech",
      label: "Tech",
    },
    {
      key: "type",
      label: "Type",
    },
    {
      key: "year",
      label: "Year",
    },
    {
      key: "github",
      label: "Github",
    },
    {
      key: "status",
      label: "Status",
    },
    {
      key: "edit",
      label: "Edit",
    },
  ];

  return (
    <div className="pt-5 w-full">
      <Table
        aria-label="Projects"
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
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsTable;
