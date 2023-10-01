"use client";

import { Character } from "@/types/marveltypes";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const { description } = row.original;
      return (
        <div className="flex items-center">
          {description ? (
            <p>{description.slice(0, 100) + "..."}</p>
          ) : (
            <p>No description Available!</p>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
    cell: ({ row }) => {
      const { thumbnail } = row.original;
      return (
        <div className="flex items-center">
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={row.original.name}
            width={50}
            height={50}
            className="rounded-md"
          />
        </div>
      );
    },
  },
];
