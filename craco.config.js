module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/_extends.scss";
        `,
      },
    },
  },
};