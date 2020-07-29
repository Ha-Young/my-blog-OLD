import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import React from "react"

const propTypes = {
  countOfStars: PropTypes.number.isRequired,
}

const Stars = ({ countOfStars }) => {
  const styles = {
    star: { color: "#ddd69b" },
    starTranslucent: { opacity: "0.3" },
  }

  if (countOfStars < 1 || countOfStars > 5) {
    return null
  }

  const stars = [] // 1 means nomal star, null means translucent star

  for (let i = 0; i < countOfStars; i += 1) {
    stars.push(1)
  }
  for (let i = 3; i > countOfStars; i -= 1) {
    stars.push(null)
  }

  return (
    <span css={styles.star}>
      {stars.map((star, index) => {
        if (star) {
          return <FontAwesomeIcon icon={faStar} key={index} /> // eslint-disable-line
        }

        return (
          <FontAwesomeIcon
            icon={faStar}
            style={styles.starTranslucent}
            key={index} // eslint-disable-line`
          />
        )
      })}
    </span>
  )
}

Stars.propTypes = propTypes

export default Stars
