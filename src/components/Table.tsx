import ReactPaginate from "react-paginate";
import { useTable } from "react-table";

export default ({ columns, data }: any) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className="w-full pt-40 ">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
              {headerGroup.headers.map((column: any) => (
                <th
                  className="text-base font-semibold text-[#5F5F5F] px-4"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="overflow-scroll">
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-[#F7F7F7]">
                {row.cells.map((cell: any) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="text-left text-tableGrey font-light py-[23px] border-b-[1px] border-[#F0F0F0] cursor-pointer text-sm px-4"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={() => {
          console.log("Page changed");
        }}
        pageRangeDisplayed={2}
        pageCount={10}
        previousLabel="<"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={3}
      />
    </>
  );
};
