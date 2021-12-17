import React from "react";
import { Table } from "../Table";

function Orders({ fetchAllOrders }) {
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    fetchAllOrders("orders").then((res) => {
      console.log("before", res);
      if (res.status !== 200) {
        logout();
        navigate("/login");
      }
      setOrders(res.res || []);
    });
  }, []);

  const data = React.useMemo(() => [...orders], [orders]);
  const columns = React.useMemo(
    () =>
      orders[0]
        ? Object.keys(orders[0])
            .filter(
              (key) => key !== "shipping_info" && key !== "user_information"
            )
            .map((key) => {
              return { Header: key, accessor: key };
            })
        : [],
    [orders]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <button
            className="btn btn-primary"
            onClick={() => {
              alert("Editing: " + row.values.order_id);
            }}
          >
            Edit
          </button>
        ),
      },
    ]);
  };

  return (
    <>
      {orders[0] ? (
        <Table columns={columns} data={data} tableHooks={tableHooks}></Table>
      ) : (
        <div className="container text-center mt-5 fs-2">
          Orders comming ...
        </div>
      )}
    </>
  );
}

export { Orders };