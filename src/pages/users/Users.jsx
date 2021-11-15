import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "./users.css";

const rows = [
  {
    id: 1,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 2,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 3,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 4,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 5,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 6,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 7,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 8,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 9,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 10,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 11,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
  {
    id: 12,
    user: "Jon Snow",
    email: "Jon@gmail.com",
    status: "active",
    transaction: "$245.00",
    avatar:
      "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il",
  },
];

export default function Users() {
  const [data, setData] = useState(rows);

  const handleDeleteData = useCallback(
    (id) => () => {
      setData(data.filter((dt) => dt.id !== id));
    },
    [data]
  );

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userUser">
            <img src={params.row.avatar} alt="" className="userAvatar" />
            {params.row.user}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userDelete"
              onClick={handleDeleteData(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="users">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
