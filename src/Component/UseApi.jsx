import { useEffect, useState } from "react";
import axios from "axios";

export default function UseApi() {
const [apidata, setapidata] = useState([]);
  useEffect(() => {
    async function handleData() {
      try {
     const response = await axios.get("https://dummyjson.com/products")
     setapidata(response)
// better
      } catch (error) {
        console.log(error);
        setapidata([])

      }
    }

    handleData();
  }, []);

  return apidata;
}
