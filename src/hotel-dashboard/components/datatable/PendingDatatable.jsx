import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../../../api/AxiosConfig";
import LoadingSpinner from "../../../components/loading-spinner/LoadingSpinner";
import ModalBootstrap from "../../../components/modal/ModalBootstrap";

const PendingDatatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname;
  const { hotelId } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const response = await api.get(`/bookings/hotels/${hotelId}/recently`);
      // response.data = response.data.map(booking => ({
      //   ...booking,
      //   rooms: booking.rooms.map(room => room.roomNumber).join(", ")
      // }));
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const handleCloseModal = () => {
    loadData();
    setShowModal(false);
  };

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           {/* <Link to={`/business/hotels/${params.row.id}`} style={{ textDecoration: "none" }}> */}
  //           {/* <div className="viewButton">View</div> */}
  //           {/* </Link> */}

  //           <div className="acceptButton" onClick={() => handleComfirm(params.row, 'ACCEPTED')}>Accept</div>

  //           <div className="deleteButton" onClick={() => handleComfirm(params.row, 'CANCELLED')}>Cancel</div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <select
            value={params.row.bookingStatus}
            onChange={(e) => handleStatusChange(params.row, e.target.value)}
            style={{
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: "#f9f9f9",
              cursor: "pointer",
            }}
          >
            {/* <option value="PENDING">PENDING</option> */}
            <option value="CANCELLED">CANCELLED</option>
            {/* <option value="ACCEPTED">ACCEPTED</option> */}
            <option value="PAID">PAID</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="CHECKED IN">CHECKED IN</option>
          </select>
        );
      },
    }
  ];

  const handleStatusChange = async (booking, newStatus) => {
    setLoading(true);
    try {
      await api.patch(`/bookings/${booking.id}`, { status: newStatus });
      if (newStatus === "COMPLETED" || newStatus === "CANCELLED") {
        setList(list.filter((item) => item[booking.id] !== booking.id));
      }
      setModalMessage('Thay đổi trạng thái đặt phòng thành công!');
    } catch (err) {
      setModalMessage(err.response.data.detail);
    }
    setLoading(false);
    setShowModal(true);
  };

  return (
    <div className="datatable" style={{ width: "100%" }}>
      <ModalBootstrap body={modalMessage} showModal={showModal} handleCloseModal={handleCloseModal} />
      {loading && <LoadingSpinner />}
      <div className="datatableTitle">
        Danh sách đặt phòng gần đây
        <Link to={`/business/hotels/${hotelId}/bookings`} className="link">
          Xem tất cả đặt phòng
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
        getRowId={(row) => row.id}
        getRowHeight={() => 60}
      />
    </div>
  );
};

export default PendingDatatable;
