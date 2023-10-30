import React, { Fragment } from "react";
import { expertise } from "../../../../data/data";
import ColumnListItem from "./ColumnListItem";

function InfoColumn(props) {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      {props.data.map((item, index) => {
        return (
          <Fragment key={index}>
            <ColumnListItem
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
            {index < expertise.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </div>
  );
}

export default InfoColumn;
