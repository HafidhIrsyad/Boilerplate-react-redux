import { reduxForm } from 'redux-form';
import AddProduct from './AddProduct';
import validate from './validate';

export default reduxForm({
  initialValues: {
    sellerId:'',
    nama:'',
    satuan:'',
    hargaSatuan:'',
    deskripsi:'',
  },
  form: 'addProduct',
  validate,
})(AddProduct);
