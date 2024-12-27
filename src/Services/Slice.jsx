import { createSlice } from "@reduxjs/toolkit";
import { NavLinkData } from "../APIs/NavAPI";
import { HomeAboutTourData, HomeSliderData } from "../APIs/HomeAPI";
import { FestivalMainData } from "../APIs/ContentMainAPI";
import { MediaMainData, MediaPicsData, MediaVideoData } from "../APIs/MediaAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLinkData,
  homeabouttourdata: HomeAboutTourData,
  homesliderdata: HomeSliderData,
  mediamaindata: MediaMainData,
  medipicsdata: MediaPicsData,
  mediavideodata: MediaVideoData,

  // Content Main API
  festivalmaindata: FestivalMainData,

  animatedSections: {},
  language: "Hindi",
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
      state.mediamaindata = action.payload;
      state.medipicsdata = action.payload;
      state.mediavideodata = action.payload;

      // Content Main API
      state.festivalmaindata = action.payload;
    },
    setAnimatedSection(state, action) {
      const { section, isAnimated } = action.payload;
      state.animatedSections[section] = isAnimated;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const {
  setPath,
  toggleNav,
  setAPIData,
  setAnimatedSection,
  setLanguage,
} = Slice.actions;
export default Slice.reducer;
