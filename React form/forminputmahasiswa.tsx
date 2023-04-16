import { useState } from "react";
import axios from "axios";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
  });
  





export default function FormMahasiswa() {
    const [statenama, setNama] = useState("");
    const [statenim, setNim] = useState("");
    const [post, setPost] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama: ${nama} \n Nim: ${nim}`)
  }

    return (

<div>
  <form onSubmit={handleSubmit}>

      <table border={0}>
        <tbody>
        <tr>
        <td> <label> nim:</label></td>
        <td><input type="text" id="nim"  value={nim}
          onChange={(e) => setNim(e.target.value)}  /></td>
    </tr>
    <tr>
        <td>  <label> nama:</label></td>
        <td><input type="text" id="nama"  value={nama}
          onChange={(e) => setNama(e.target.value)} /></td>
    </tr>
       
    <tr>
        <td>  <label> alamat:</label></td>
        <td><textarea  id="address" style={{resize: "none"}} /></td>
    </tr>
tr>
        <td>  <label> hobby:</label></td>
        <td>   <select>
            <option value="Musik">Musik</option>
            <option value="Olahraga">Olahraga</option>
            <option value="Membaca">Membaca</option>
        </select></td>
    </tr>
    <tr>
        <td>  <label> gender:</label></td>
        <td>   <input
                type="radio" value="Pria" name="gender"/> Pria
            <input
                type="radio" value="Wanita"  name="gender"/> Wanita
            <input
                type="radio" value="Hermaprodit"  name="gender"/> Hermaprodit</td>
    </tr>
    <tr>
        <td>  <label> Foto:</label></td>
        <td>   <input
                type="file" name="foto"/>  </td>
    </tr>
        </tbody>
      </table>
      <input type="submit" />
      <audio   src="./audio/hbd.mp3" controls autoPlay/>
     
      </form>
      <table border={1}>
        <thead>
            <tr><td>Nim</td>
            <td>Nama</td></tr>
        </thead>
        <tbody>
            <tr>
                <td>{nim}</td>
                <td>{nama}</td>
            </tr>
        </tbody>
      </table>
      </div>
    )
  }
