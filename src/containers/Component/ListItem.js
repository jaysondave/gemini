import React from 'react';
import Avatar from '@material-ui/core/Avatar';
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
      </div>

    </div>
  );
}

export default ListItem;