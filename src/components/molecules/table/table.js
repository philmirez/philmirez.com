import React from 'react';
import { Table } from 'molecules/table/style';
import Grid from '@material-ui/core/Grid';

const _renderCell = (key, content) => {
  if (!content) {
    return <Grid container key={key} />;
  }

  switch (true) {
    case key === 'row_0_cell_0':
      return (
        <Grid container key={key}>
          <h2>{content}</h2>
        </Grid>
      );
    case key.endsWith(0):
      return (
        <Grid container key={key}>
          <h3 key={key}>{content}</h3>
        </Grid>
      );
    case key.endsWith(1):
      return (
        <Grid container key={key}>
          <i>{content}</i>
        </Grid>
      );
    default:
      return (
        <Grid container key={key}>
          {content}
        </Grid>
      );
  }
};

const _renderRow = (row, rowIndex) => {
  const keys = Object.keys(row);
  const rowCellArray = keys.map((key, cellIndex) =>
    _renderCell(`row_${rowIndex}_cell_${cellIndex}`, row[key]),
  );

  return (
    <Grid item xs={12} sm={4} key={`row_${rowIndex}`}>
      {rowCellArray}
    </Grid>
  );
};

const _renderRows = json =>
  json.edges.map((edge, rowIndex) => _renderRow(edge.node, rowIndex));

export default class extends React.Component {
  render() {
    const { json } = this.props;

    return (
      <Table>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {_renderRows(json)}
        </Grid>
      </Table>
    );
  }
}

/**
 * Adapted from https://engineering.shopify.com/blogs/engineering/building-data-table-component-react
 */
