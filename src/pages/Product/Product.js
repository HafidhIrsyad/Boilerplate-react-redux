import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import { fetchDataProduct } from '../../store/actions';
import './styles.scss';

export default function Product() {
  const row = 10
  const dispatch = useDispatch();
  const { dataProduct, isLoading } = useSelector(s => s.alami);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchDataProduct(row))
  }, [dispatch])

  useEffect(() => {
    if(dataProduct) {
      setData(dataProduct?.data)
    }
  }, [dataProduct])

  const headers = ['Nama', 'Satuan', 'Harga Satuan', 'Seller Id', 'Deskripsi',];

  const dataTables = data?.map((v, index) => {
    return [
      <p key={index}>{v.nama}</p>,
      // v.nama,
      v.satuan,
      v.hargaSatuan,
      v.sellerId,
      v.deskripsi,
    ]
  });
  console.log(isLoading, dataTables)
  return (
    <section className='table'>
      <div className="search">
        <Link to={'/search'}>
          <button type="button">Search Product</button>
        </Link>
        <Link to={'/addProduct'}>
          <button type="button">Create Product</button>
        </Link>
        <Link to={'/addSeller'}>
          <button type="button">Create Seller</button>
        </Link>
      </div>
      <Table
        dataTable={dataTables}
        headers={headers}
        loading={!dataTables.length && isLoading} />
    </section>
  );
}
