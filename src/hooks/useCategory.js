import { useEffect, useState, useCallback } from "react"
import qs from "query-string"
// import { useLocation } from "@reach/router"
import { CATEGORY_TYPE } from "../constants"
import * as ScrollManager from "../utils/scroll"

const DEST_POS = 100

export function useCategory() {
  const [category, setCategory] = useState(CATEGORY_TYPE.ALL)
  const adjustScroll = () => {
    if (window.scrollY > DEST_POS) {
      ScrollManager.go(DEST_POS)
    }
  }
  const selectCategory = useCallback((category) => {
    setCategory(category)
    adjustScroll()
    console.log("setCategory, pushState", category)
    console.log(window.history)
    window.history.pushState(
      { category },
      "",
      `${window.location.pathname}?${qs.stringify({ category })}`
    )
    changeCategory()
  }, [])

  const changeCategory = useCallback((withScroll = true) => {
    // const location = useLocation()
    const { category } = qs.parse(window.location.search)
    const target = category == null ? CATEGORY_TYPE.ALL : category
    console.log("category target", target)
    setCategory(target)
    if (withScroll) {
      adjustScroll()
    }
  }, [])

  useEffect(() => {
    console.log("ScrollManager init")
    ScrollManager.init()
    return () => {
      ScrollManager.destroy()
    }
  }, [])

  useEffect(() => {
    console.log("set event listener popstate", changeCategory)
    console.log(window)
    window.addEventListener("onpopstate", changeCategory)

    return () => {
      console.log("remove popstate")
      window.removeEventListener("onpopstate", changeCategory)
    }
  }, [])

  useEffect(() => {
    changeCategory(false)
  }, [])

  return [category, selectCategory]
}
