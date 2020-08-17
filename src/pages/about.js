import React, { useState } from "react"
import ProfileSection from "../components/about/profileSection"
import SkillSection from "../components/about/skillSection"
import SEO from "../components/seo"
import { Modal } from "antd"

function About() {
  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => {
    setModalVisible(true)
  }

  const modalOk = () => {
    setModalVisible(false)
  }

  return (
    <>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <Modal title="Basic Modal" visible={modalVisible} onOk={modalOk}>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <ProfileSection />
      <SkillSection showModal={showModal} />
    </>
  )
}

export default About
