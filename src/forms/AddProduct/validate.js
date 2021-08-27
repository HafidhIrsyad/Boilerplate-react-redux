export default function validate(values) {
  const {
    sellerId,
    nama,
    satuan,
    hargaSatuan,
    deskripsi,
  } = values;

  return {
    sellerId: !sellerId ? 'Please enter the sellerId' : '',
    nama: !nama ? 'Please enter the nama' : '',
    satuan: !satuan ? 'Please enter satuan' : '',
    hargaSatuan: !hargaSatuan ? 'Please enter harga satuan' : '',
    deskripsi: !deskripsi ? 'Please enter deskripsi' : '',
  };
}
