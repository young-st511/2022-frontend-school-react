import axios from "axios";
import {React, useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ReactDocPage() {
  // docID: 1, 2, 3....
  const params = useParams();
  const [doc, setDoc] = useState([]);
  console.log(params);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.docId}`);
      console.log(res);
      const result = await res.json();

      return result;
    }
    fetchData().then((res) => {
      setDoc(res);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1 onClick={() => navigate("/")}>logo</h1>
      <h3>{doc.title}</h3>
      <div>{doc.body}</div>
    </>
  );
}
