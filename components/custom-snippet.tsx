import React from "react";
import { Snippet } from "@nextui-org/react";
import { SnippetProps } from "@nextui-org/react";

export default function CustomSnippet({
  children,
  size,
  radius,
  symbol,
  timeout,
  codeString,
  tooltipProps,
  copyIcon,
  checkIcon,
  disableTooltip,
  disableCopy,
  hideCopyButton,
  hideSymbol,
  copyButtonProps,
  disableAnimation,
  classNames,
}: Readonly<SnippetProps>) {
  return (
    <Snippet
      children={children}
      size={size}
      radius={radius}
      symbol={symbol}
      timeout={timeout}
      codeString={codeString}
      tooltipProps={tooltipProps}
      copyIcon={copyIcon}
      checkIcon={checkIcon}
      disableTooltip={disableTooltip}
      disableCopy={disableCopy}
      hideCopyButton={hideCopyButton}
      hideSymbol={hideSymbol}
      copyButtonProps={copyButtonProps}
      disableAnimation={disableAnimation}
      classNames={{
        pre: "flex text-ellipsis overflow-hidden",
        ...classNames,
      }}
    />
  );
}

export { CustomSnippet };
