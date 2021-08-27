import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { fetchCreateSeller } from '../../store/actions';
import './styles.scss';

export default function AddForm() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [nama, setNama] = useState('');
  const [kota, setKota] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const seller = { nama, kota }
    dispatch(fetchCreateSeller(seller))
    swal('Berhasil Menambah Seller', '', 'success');
    history.push('/');
  }

  return (
    <>
      <p className="title">Form Create Seller</p>
      <form onSubmit={handleSubmit}>
        <label>Nama</label>
        <input 
          type="text" 
          required 
          value={nama}
          onChange={(e) => setNama(e.target.value)} />
        <label>Kota</label>
        <input 
          type="text" 
          required 
          value={kota}
          onChange={(e) => setKota(e.target.value)} />
        <input type="submit" value="Submit"/>
      </form>
    </>
  );
}