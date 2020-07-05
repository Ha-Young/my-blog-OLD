import React from "react"
import AgeCalculator from "./Section/AgeCalculator"
import Hr from "./Section/Hr"
import SectionContainer from "./Section/SectionContainer"
import SectionHeader from "./Section/SectionHeader"
import WhiteBox from "./Section/WhiteBox"
import profileJpg from "../../images/myphoto.jpg"
import { rhythm } from "../../utils/typography"

const ProfileSection = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 350px))",
      gridGap: rhythm(2),
      justifyContent: "center",
    },
    link: {
      color: "#262626",
    },
    whiteBox: {
      height: "min-content",
      padding: rhythm(1),
      paddingTop: 0,
    },
    whiteBoxKeireki: {
      gridRowStart: "span 2",
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1.5),
    },
    gaiyouPictureContainer: {
      marginBottom: rhythm(1.5),
      textAlign: "center",
    },
    gaiyouPicture: {
      width: "300px",
      borderRadius: "50%",
    },
    gaiyouListItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: rhythm(1),
    },
    gaiyouItemName: {
      flex: 2,
      textAlign: "right",
      marginRight: "1rem",
    },
    gaiyouItemContent: {
      flex: 3,
    },
    keirekiGray: {
      color: "#999999",
    },
  }

  return (
    <SectionContainer id="profile">
      <SectionHeader text="Profile" />

      <div css={styles.container}>
        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Profile</h3>
          <div css={styles.gaiyouPictureContainer}>
            <img src={profileJpg} css={styles.gaiyouPicture} alt="me" />
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Name</b>
            </div>
            <div css={styles.gaiyouItemContent}>Ha-Young Choi</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Age</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              <AgeCalculator birthday="1992-10-28T15:00+09:00" />
            </div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Residence</b>
            </div>
            <div css={styles.gaiyouItemContent}>Seoul of Korea</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Hobby</b>
            </div>
            <div css={styles.gaiyouItemContent}>Learnning</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Motto</b>
            </div>
            <div css={styles.gaiyouItemContent}>be a better</div>
          </div>
        </WhiteBox>

        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>Carrer</h3>

          <Hr />

          <p>
            <b>Machine Learnning Developer && Solution Engineer</b>
            <br />
            <span css={styles.keirekiGray}>(2020.5 - )</span>
          </p>
          <p>in Inzisoft dev 1 team (R&D Team)</p>

          <Hr />

          <p>
            <b>Windows Developer</b>
            <br />
            <span css={styles.keirekiGray}>(2017.12 - 2018.3)</span>
          </p>
          <p>in Inzisoft SI Team. using C#, Winform, JavaScript</p>

          <Hr />

          <p>
            <b>Ulsan University, Major in IT Convergence </b>
            <br />
            <span css={styles.keirekiGray}>(2015.03 - 2018.02)</span>
          </p>
          <p>Ulsan University, Major in IT Convergence</p>

          <Hr text="long long story" />
          <p>
            <b>Born to be late bloomer</b>
            <br />
            <span css={styles.keirekiGray}>(1992.10.28 - )</span>
          </p>
          <p>I'm natural developer</p>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Some</h3>
          <p>Dream about frontend developer</p>
        </WhiteBox>
      </div>
    </SectionContainer>
  )
}

export default ProfileSection
