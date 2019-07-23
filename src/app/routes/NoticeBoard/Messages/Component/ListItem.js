import React from 'react';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';

function ListItem({ styleName, data }) {
  const { image, name, designation, description } = data;
  return (
    <div className={`user-list d-flex flex-row ${styleName}`}>
      <div className="description w-100">
        <h5>{name}</h5>

        <div className="d-flex flex-column">
          <p className="text-muted">{description}</p>
          <div className="w-100">
            <span className="float-right">{'2019/07/01'}</span>
          </div>
        </div>
        <ul className="list-inline d-sm-flex flex-sm-row jr-mbtn-list">
          <li><Button color="primary"><IntlMessages id="button.modify" /></Button></li>
          <li><Button color="secondary"><IntlMessages id="button.delete" /></Button></li>
        </ul>
      </div>

    </div>
  );
}

export default ListItem;