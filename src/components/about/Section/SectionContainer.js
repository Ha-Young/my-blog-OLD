import PropTypes from "prop-types"
import styled from "@emotion/styled"
import React from "react"

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  id: PropTypes.string,
  isTop: PropTypes.bool,
}

const defaultProps = {
  id: null,
  isTop: false,
}

const SectionContainerBlock = styled.section`
  min-height: ${(props) => (props.isTop ? "110vh" : "initial")};
  padding: "0 15px 110px";
  padding-top: ${(props) => (props.isTop ? "130px" : "120px")};
  position: "relative";
  z-index: 100;
`

const SectionContainer = ({ children, id, isTop }) => {
  return (
    <SectionContainerBlock id={id} isTop>
      {children}
    </SectionContainerBlock>
  )
}

SectionContainer.propTypes = propTypes
SectionContainer.defaultProps = defaultProps

export default SectionContainer
