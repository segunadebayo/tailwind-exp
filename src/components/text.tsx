import * as React from "react";
import clsx from "clsx";

type TextProps = {
  className?: string;
  variant: "h1" | "h2";
  children?: React.ReactNode;
};

export function Text(props: TextProps) {
  const { variant, className, ...rest } = props;
  return (
    <p {...rest} className={clsx("Text", `variant--${variant}`, className)} />
  );
}
