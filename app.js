require('apostrophe')({
  shortName: 'my-apostrophe-blog',
  modules: {

    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},

    '@apostrophecms/blog': {},
    '@apostrophecms/blog-page': {},
    'button-widget': {},
    'container-widget': {},
    'Twocolumn-widget': {},
    article: {},
    'test-widget': {},
    'testing-widget': {},
    // Tease an article on any page
    'article-widget': {},
    // Paginated index of articles, and with pages for individual articles
    'article-page': {},
    topic: {}
  },

  bundles: [ '@apostrophecms/blog' ]
});
