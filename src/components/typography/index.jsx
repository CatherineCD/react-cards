import React from "react";
import cn from "classnames";

import "./typography.scss";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

export const Typography = props => {
  const { variant, color, children } = props;
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
