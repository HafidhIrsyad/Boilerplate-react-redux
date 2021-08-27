import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { fetchsearchProduct } from '../../store/actions';
import './styles.scss';

export default function Product() {
  const dispatch = useDispatch();
  const { pencarian, isLoading } = useSelector(s => s.alami);
  const [search, setSearch] = useState('');
  const [confSearch, setConfSearch] = useState('');
  const [find, setFind] = useState([]);

  useEffect(() => {
    dispatch(fetchsearchProduct(confSearch))
  }, [dispatch, confSearch])

  useEffect(() => {
    if(pencarian) {
      setFind(pencarian?.data)
    }
  }, [pencarian])

  const handleSearch = (e) => {
    e.preventDefault();
    search ? setConfSearch(`${search}`) : setConfSearch('');
  };

  console.log(find);

  const headers = ['Nama', 'Satuan', 'Harga Satuan', 'Seller Id', 'Deskripsi',];

  const dataTables = find?.map((v, index) => {
    return [
      <p key={index}>{v.nama}</p>,
      v.satuan,
      v.hargaSatuan,
      v.sellerId,
      v.deskripsi,
    ]
  });

  return (
    <section className='table'>
      <div className="search">
        <Search
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={(e) => handleSearch(e)}
          placeholder="Search by nama"
          value={search} />
        <Link to={'/'}>
          <button type="button">Back to Home Page</button>
        </Link>
      </div>
      <Table
        dataTable={dataTables}
        headers={headers}
        loading={!dataTables.length && isLoading} />
    </section>
  );
}
