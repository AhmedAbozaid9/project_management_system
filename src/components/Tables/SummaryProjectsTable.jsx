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
import Loading from "../general/Loading";

const SummaryProjectsTable = ({ projects }) => {
  console.log(projects);
  return (
    <>
      {projects.length ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SummaryProjectsTable;
