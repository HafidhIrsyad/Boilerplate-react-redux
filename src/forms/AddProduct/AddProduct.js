import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { fetchCreateProduct } from '../../store/actions';
import './styles.scss';

export default function AddForm() {
  const dispatch = useDispatch();
  const history = useHistory()
  const { dataProduct } = useSelector(s => s.alami);
  const [sellerId, setSellerId] = useState();
  const [nama, setNama] = useState('');
  const [satuan, setSatuan] = useState('');
  const [hargaSatuan, setHargaSatuan] = useState();
  const [deskripsi, setdeskripsi] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { sellerId, nama, satuan, hargaSatuan, deskripsi }
    if(dataProduct.status === 'Success') {
      history.push('/');
      dispatch(fetchCreateProduct(product));
      swal('Berhasil Menambah Produk', '', 'success');
    } else if(dataProduct.status === 'Error') {
      history.push('/addProduct');
      swal(dataProduct.message, '', 'error')
    }
  }

  return (
    <>
      <p className="title">Form Create Product</p>
      <form onSubmit={handleSubmit}>
        <label>Seller Id</label>
        <input 
          type="number" 
          name="sellerId"
          placeholder="Add Seller Id"
          onChange={(e) => setSellerId(e.target.value)} 
          value={sellerId}
        />
        <label>Nama</label>
        <input 
          type="text"
          name="nama"
          placeholder="Add nama"
          onChange={(e) => setNama(e.target.value)} 
          value={nama}
        />
        <label>Satuan</label>
        <input 
          type="text" 
          name="satuan"
          placeholder="Add Satuan"
          onChange={(e) => setSatuan(e.target.value)} 
          value={satuan}
        />
        <label>Harga Satuan</label>
        <input 
          type="number" 
          name="hargaSatuan"
          placeholder="Add Harga Satuan"
          onChange={(e) => setHargaSatuan(e.target.value)} 
          value={hargaSatuan}
        />
        <label>Deskripsi</label>
        <input 
          type="text" 
          name="deskripsi"
          placeholder="Add Deskripsi"
          onChange={(e) => setdeskripsi(e.target.value)} 
          value={deskripsi}
        />
        <input type="submit" value="Submit"/>
      </form>
    
    </>
  );
}
