import { useDispatch, useSelector } from "react-redux";
import { setAnimatedSection, setPath, toggleNav } from "./Slice";
import { useCallback, useEffect } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const navlinkdata = useSelector((state) => state.app.navlinkdata);
  const homeabouttourdata = useSelector((state) => state.app.homeabouttourdata);
  const homesliderdata = useSelector((state) => state.app.homesliderdata);
  const isActive = useSelector((state) => state.app.isActive);
  const animatedSections = useSelector((state) => state.app.animatedSections);
  const mediamaindata = useSelector((state) => state.app.mediamaindata);
  const medipicsdata = useSelector((state) => state.app.medipicsdata);
  const mediavideodata = useSelector((state) => state.app.mediavideodata);

  // Content Main API
  const festivalmaindata = useSelector((state) => state.app.festivalmaindata);

  const handleOnClick = useCallback(
    (path) => (e) => {
      e.preventDefault();
      dispatch(setPath(path));
      window.location.pathname = path;
    },
    [dispatch]
  );

  const toggleNavbar = useCallback(() => {
    dispatch(toggleNav());
  }, [dispatch]);

  // Sticky Navbar Logic
  const useStickyNavbar = () => {
    useEffect(() => {
      const sectionHero = document.querySelector(".section-main");

      const observerCallback = (entries) => {
        const ent = entries[0];
        !ent.isIntersecting
          ? document.body.classList.add("sticky")
          : document.body.classList.remove("sticky");
      };

      const options = {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
      };

      const observer = new IntersectionObserver(observerCallback, options);

      if (sectionHero) {
        observer.observe(sectionHero);
      }

      return () => {
        observer.disconnect();
      };
    }, []);
  };

  const useScrollAnimation = (sectionRef, sectionName, delay = 1000) => {
    useEffect(() => {
      const onScroll = () => {
        const sectionTop = sectionRef.current?.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionTop < screenPosition && !animatedSections[sectionName]) {
          setTimeout(() => {
            dispatch(
              setAnimatedSection({ section: sectionName, isAnimated: true })
            );
          }, delay);
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [sectionRef, sectionName, animatedSections, dispatch, delay]);
  };

  return {
    handleOnClick,
    navlinkdata,
    homeabouttourdata,
    homesliderdata,
    mediamaindata,
    medipicsdata,
    mediavideodata,

    // Content Main API
    festivalmaindata,

    toggleNavbar,
    useStickyNavbar,
    isActive,
    useScrollAnimation,
    animatedSections,
  };
};

export default Handlers;
