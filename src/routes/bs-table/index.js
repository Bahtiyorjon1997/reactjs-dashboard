import React from "react";
import styled from "styled-components";
import Title from "../../Components/title";
import { data } from "./data";

const BsTable = () => {
  return (
    <TableWrapper>
      <Title className="title">Row select support</Title>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Full name</th>
            <th>Post</th>
            <th>Email</th>
            <th>City</th>
            <th>Start Date</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>
                <img
                  src={item.img}
                  style={{ height: 45, borderRadius: "50%", width: 50 }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.post}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.start}</td>
              <td>{item.start}</td>
              <td>{item.age}</td>
              <td>{item.experience}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    font-weight: 200;
    font-family: Montserrat, Helvetica, Arial, serif;
    color: #6e6b7b;

    thead {
      background-color: #f8f8f8;
      margin: 0;
      vertical-align: middle;
      border-color: inherit;
      padding: 20px;

      tr th {
        padding: 20px;
      }
    }

    thead tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
    }

    thead > th {
      font-weight: bold;
      text-align: -internal-center;
      background-color: #f8f8f8;
      padding: 10px 0;
    }
  }

  .title {
    padding: 24px;
    font-size: 1rem;
    font-weight: 400;
    color: #6e6b7b;
  }

  tbody {
    tr td {
      padding: 20px;
    }

    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    font-size: 0.8rem;
  }
`;

export default BsTable;
