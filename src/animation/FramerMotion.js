import { easeInOut } from "framer-motion";

//#region champion [id] page

export const letter_container_anim = {
  initial: {},
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

export const letter_name_anim = {
  initial: { y: 320 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

//#endregion

export const title_anim = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0, 0.95, 0.55, 1.15],
    },
  },
};

export const author_anim = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0, 0.95, 0.55, 1.15],
    },
  },
};

export const text_anim = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0, 0.95, 0.55, 1.15],
    },
  },
};

export const champ_name_anim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: easeInOut,
    },
  },
};

export const arrow_container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      ease: easeInOut,
    },
  },
};

export const arrow_anim = {
  animate: {
    y: [0, 50, 0],
    transition: {
      delay: 1.5,
      duration: 2,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

export const region_icon_anim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: easeInOut,
    },
  },
};

export const img_hover_transition = {
  duration: 1,
  ease: [0.25, 1, 0.5, 1],
};

export const img_scale_anim = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

export const champ_slider_title_container = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

export const text_motion_anim = {
  initial: {
    opacity: 0,
    y: 180,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
