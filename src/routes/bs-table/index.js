import React from "react";
import styled from "styled-components";
import Title from "../../Components/title";
import { data } from "./data";

const BsTable = () => {
  return (
    <>
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
                <td>
                  <span className="status">{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>
      <ButtonWrapper>
        <button>Select All</button>
        <button>Clear Selected</button>
        <button>Select All</button>
        <button>Unselect 3rd row</button>
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 32%;
  padding: 20px;

  button {
    background-color: white;
    border: 1px solid rgba(137, 43, 226, 0.795);
    color: blueviolet;
    padding: 12px 10px;
    border-radius: 5px;
    font-weight: 500;
  }
  button:hover {
    background-color: rgba(231, 231, 240, 0.404);
  }
`;

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

  .status {
    background-color: blue;
    padding: 7px;
    color: white;
    border-radius: 50px;
    font-weight: bold;
  }
`;

export default BsTable;
