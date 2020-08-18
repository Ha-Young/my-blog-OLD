import React from "react"
import SectionContainer from "./Section/SectionContainer"
import SectionHeader from "./Section/SectionHeader"
import Skill from "./Section/Skill"
import WhiteBox from "./Section/WhiteBox"
import questionSvg from "../../icons/question.svg"
import { Modal } from "antd"
import Stars from "./Section/Stars"

const SkillSection = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 350px))",
      gridGap: "3rem",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "auto",
    },
    whiteBox: {
      padding: "2rem",
    },
    containerKihon: {
      position: "relative",
    },
    helpButton: {
      color: "#999999",
      position: "absolute",
      right: "0",
      top: "2px",
      outline: "none",
      width: "15px",
      cursor: "pointer",
      " img": { width: "1.2rem" },
    },
    otherListItem: {
      marginBottom: "1rem",
    },
    sonotaTitle: {
      color: "#262626",
      fontWeight: "bold",
    },
    sonotaContent: {
      marginTop: ".5rem",
    },
    caret: {
      marginRight: ".5rem",
      opacity: 0.8,
    },
    link: {
      color: "#262626",
      cursor: "pointer",
      textDecorationLine: "underline",
    },
    awsBadge: {
      width: "80px",
      marginRight: "0.5rem",
    },
  }

  const skills = {
    Frontend: {
      JavaScript: 3,
      CSS: 2,
      React: 2,
      Redux: 2,
      TypeScript: 2,
      "Redux-thunk": 1,
      "Redux-saga": 1,
      Gatsby: 1,
      GraphQL: 1,
    },
    Backend: {
      "Node.js": 2,
      express: 2,
      "Python / Django / DRF": 2,
      RDBMS: 2,
      Java: 1,
      Spring: 1,
      "NoSQL (MongoDB)": 1,
    },
    Others: {
      "C#": 3,
      Winform: 3,
      OpenCV: 2,
      "C++": 2,
      Git: 2,
      "Scrapping (Python)": 2,
      Tensorflow: 1,
      Tesseractor: 1,
      "Pandas (Python)": 1,
    },
  }

  const showModal = () => {
    Modal.info({
      title: "Skill Info",
      content: (
        <div>
          <div>
            <Stars countOfStars={3} />
            <p>고급 기능까지 문서없이 구현 가능</p>
          </div>
          <div>
            <Stars countOfStars={2} />
            <p>
              고급 기능은 문서를 참조해야 하고 기초기능은 문서참조를 하지않아도
              됨.
            </p>
          </div>
          <div>
            <Stars countOfStars={1} />
            <p>기초 지식과 사용은 무리가 없으나 문서참조를 자주해야 됨.</p>
          </div>
        </div>
      ),
      onOk: () => {},
    })
  }

  return (
    <>
      <SectionContainer id="skill" isTop>
        <SectionHeader text="Skills" />
        <div css={styles.grid}>
          <WhiteBox css={styles.whiteBox}>
            <div style={{ position: "relative" }}>
              <h3>Frontend</h3>
              <div
                css={styles.helpButton}
                onClick={() => showModal()}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) showModal()
                }}
                role="button"
                tabIndex={0}
              >
                <img src={questionSvg} alt="hint button" />
              </div>
              {Object.keys(skills.Frontend).map((skill) => (
                <Skill
                  skillName={skill}
                  skillLevel={skills.Frontend[skill]}
                  key={skill}
                />
              ))}
            </div>
          </WhiteBox>

          <WhiteBox css={styles.whiteBox}>
            <div>
              <h3>Backend</h3>
              {Object.keys(skills.Backend).map((skill) => (
                <Skill
                  skillName={skill}
                  skillLevel={skills.Backend[skill]}
                  key={skill}
                />
              ))}
            </div>
          </WhiteBox>

          <WhiteBox css={styles.whiteBox}>
            <div>
              <h3>Others</h3>
              {Object.keys(skills.Others).map((skill) => (
                <Skill
                  skillName={skill}
                  skillLevel={skills.Others[skill]}
                  key={skill}
                />
              ))}
            </div>
          </WhiteBox>
        </div>
      </SectionContainer>
    </>
  )
}

SkillSection.propTypes = {
  //setCurrentModal: PropTypes.func.isRequired,
}

export default SkillSection
