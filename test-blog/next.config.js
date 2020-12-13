const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
  const env = {
    SITE_NAME: "TestBlog",
    API_BLOG: (() => {
      if (isDevelopment) {
        return "https://jsonplaceholder.typicode.com";
      } else {
        return "https://api.testBlog.com";
      }
    })(),
  };
  return {
    env,
  };
};
