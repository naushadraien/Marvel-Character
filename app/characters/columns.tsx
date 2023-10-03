"use client";

import { Character } from "@/types/marveltypes";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const { name } = row.original;
      return (
        <div className="flex items-center">
          <Link href={`/characters/${row.original.id}`}>
            <p>{name}</p>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const { description } = row.original;
      return (
        <div className="flex items-center">
          <Link href={`/characters/${row.original.id}`}>
            {description ? (
              <p>{description.slice(0, 100) + "..."}</p>
            ) : (
              <p>No description Available!</p>
            )}
          </Link>
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
          <Link href={`/characters/${row.original.id}`}>
            <Image
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={row.original.name}
              width={50}
              height={50}
              className="rounded-md"
            />
          </Link>
        </div>
      );
    },
  },
];
