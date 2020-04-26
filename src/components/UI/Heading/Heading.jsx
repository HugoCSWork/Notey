import React from "react";
import * as heading from "./Heading.styled";

/**
 * Styled components for all headings.
 * @param {*} color - Color of the text
 * @param {boolean} noMargin - Removes the margin
 * @param {boolean} bold - sets the font to bold
 * @param {string} size - input desides what type of header to use
 * @todo - Turn it into a switch and add a default
 */
const Heading = ({ children, color, noMargin, bold, size }) => {
  if (size === "h1")
    return (
      <heading.H1 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </heading.H1>
    );
  if (size === "h2")
    return (
      <heading.H2 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </heading.H2>
    );
  if (size === "h3")
    return (
      <heading.H3 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </heading.H3>
    );
  if (size === "h4")
    return (
      <heading.H4 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </heading.H4>
    );
};

export default Heading;
