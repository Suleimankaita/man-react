import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import { useGetpostQuery } from "../../features/appslice";
import { Link } from "react-router-dom";

const Bills = () => {
  const { data, error, isLoading } = useGetpostQuery("", {
    pollingInterval: 1000,
    refetchOnFocus: true,
  });

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!data || !data.ids || !data.entities) return;

    const processData = async () => {
      const billsArray = data.ids
        .map((id) => data.entities[id]?.bills || []) // ✅ Avoids undefined errors
        .flat(); // ✅ Flattens arrays if needed

      setUsers(billsArray);
    };

    processData();
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  const filteredUsers = users?.filter((res) =>
    res._id?.toLowerCase().includes(search.toLowerCase().trim())
  ) || [];

  return (
    <div className="alls" style={{ width: "100%" }}>
      <div className="box-tb_inp" style={{ padding: "10px" }}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />

      <TableContainer component={Paper}>
        <Table>
          {/* <TableHead> */}
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }} align="center">
                Bill Name
              </TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }} align="center">
                Account No
              </TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }} align="center">
                Amount
              </TableCell>
              <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }} align="center">
                Time
              </TableCell>
              <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }} align="center">
                Date
              </TableCell>
            </TableRow>
          {/* </TableHead> */}

          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((res) => (
                <TableRow
                  key={res._id}
                  component={Link}
                  to={""}
                  sx={{ "&:hover": { backgroundColor: "lightgrey", cursor: "pointer" } }}
                >
                  <TableCell align="center">{res._id}</TableCell>
                  <TableCell align="center">{res.username}</TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }} align="center">
                    {res.billname}
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }} align="center">
                    {res.account_no}
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }} align="center">
                    {res.amount}
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }} align="center">
                    {res.time}
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }} align="center">
                    {res.date}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No matching records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Bills;
