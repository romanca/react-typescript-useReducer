import React from "react";

const IconNamesMap = {
  search: "fa fa-search",
  leftArrow: "fa fa-angle-left",
  gg: "fa fa-gg",
  thinCircle: "fa fa-circle-thin",
  emptyStar: "fa fa-star-o",
  elipsis: "fa fa-ellipsis-h"
  //   edit: "fa fa-pencil",
  //   remove: "fa fa-trash",
  //   plus: "fa fa-plus",
  //   dots: "fa fa-ellipsis-h",
  //   rightArrow: "fa fa-angle-right",
  //   downArrow: "fa fa-angle-down",
};

export type IconName = keyof typeof IconNamesMap;

interface IProps {
  name: IconName;
  style?: React.CSSProperties | undefined;
  color?: string;
  fontSize?: number;
}

const Icon: React.FC<IProps> = ({ name, color, style }) => {
  return (
    <div>
      <i className={IconNamesMap[name]} color={color} style={style} />
    </div>
  );
};
export default Icon;
