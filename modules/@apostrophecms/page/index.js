// This configures the @apostrophecms/page module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: '@apostrophecms/blog-page',
         label: 'Blog Page'
      },
      {
        name: 'article-page',
        label: 'Article Index'
      },
    ]
  }
};
