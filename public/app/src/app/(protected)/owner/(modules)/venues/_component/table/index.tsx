"use client"
import { Fragment, useEffect, useState } from "react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { data } from "./data";
import TableSkeleton from "../skelton/table-skeleton";

export default function VenuesTableComponent() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  if (loading) {
    return (
      <>

        <TableSkeleton limit={5} />
      </>
    )
  }


  return (
    <Fragment>
      <DataTable
        data={data}
        columns={columns}
      />
    </Fragment>
  );
}
