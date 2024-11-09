import { createSlice } from "@reduxjs/toolkit";
import { NavLinkData } from "../APIs/NavAPI";
import { HomeAboutTourData, HomeSliderData } from "../APIs/HomeAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLinkData,
  homeabouttourdata: HomeAboutTourData,
  homesliderdata: HomeSliderData,
  animatedSections: {},
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
    toggleNav(state) {
      state.isActive = !state.isActive;
    },
    setAPIData(state, action) {
      state.navlinkdata = action.payload;
      state.homeabouttourdata = action.payload;
      state.homesliderdata = action.payload;
    },
    setAnimatedSection(state, action) {
      const { section, isAnimated } = action.payload;
      state.animatedSections[section] = isAnimated;
    },
  },
});

export const { setPath, toggleNav, setAPIData, setAnimatedSection } =
  Slice.actions;
export default Slice.reducer;
