"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const submitForm = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    submitForm();
  }, []);
    
/*   .then((res) => {console.log(res.data)})
      .catch((err) => {console.log(err)}); */

  return (
    <>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.address ? user.address.zipcode : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    
    </>
  );
}
