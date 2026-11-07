export const defaultProps = {
  ease: "cubic-bezier(0.5, 0, 0, 1)",
  duration: 700,
  delay: 300,
  reset: false,
};

export const targetElements = [
  {
    element: ".hero-title",
    animation: {
      origin: "top",
      duration: 1000,
      delay: 500,
    },
  },
  {
    element: ".hero-cta",
    animation: {
      origin: "top",
      duration: 1000,
      delay: 1000,
    },
  },
  {
    element: ".section-title",
    animation: {
      origin: "left",
      duration: 800,
      delay: 100,
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      origin: "left",
      duration: 800,
      delay: 200,
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      origin: "right",
      duration: 800,
      delay: 200,
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      origin: "left",
      duration: 800,
      delay: 200,
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      origin: "right",
      duration: 800,
      delay: 200,
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      origin: "bottom",
      duration: 800,
      delay: 200,
    },
  },
];
