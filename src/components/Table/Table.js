import PropTypes from 'prop-types';

export default function Table(props) {
  const { className, dataTable, headers, loading } = props;

  const renderBody = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan={headers.length}>
          {loading ? <h3>Loading...</h3> : (<><h3>Data tidak di temukan</h3></>)}
          </td>
        </tr>
      );
    }

    return dataTable.map((value, i) => {
      const tds = value.map((v, i) => <td  key={i}>{v}</td>);
      return (
        <tr>
          {tds}
        </tr>
        );
    });
  };

  return (
    <table className={className}>
      <thead>
        <tr>{headers.map((v, i) => <th key={i}>{v}</th>)}</tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
}

Table.defaultProps = {
  className: '',
  dataTable: [],
  headers: [],
  loading: false,
};

Table.propTypes = {
  className: PropTypes.string,
  dataTable: PropTypes.arrayOf(PropTypes.array),
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ])
  ),
  loading: PropTypes.bool,
};