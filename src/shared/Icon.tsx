import React from "react";

const IconNamesMap = {
  search: "fa fa-search",
  leftArrow: "fa fa-angle-left",
  rightArrow: "fa fa-angle-right",
  gg: "fa fa-gg",
  thinCircle: "fa fa-circle-thin",
  emptyStar: "fa fa-star-o",
  elipsis: "fa fa-ellipsis-h",
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
