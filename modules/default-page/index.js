module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Default Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
      expanded: true,
      groups: {
            basic: {
              label: 'Basic',
              widgets: {
                '@apostrophecms/rich-text': {},
                '@apostrophecms/image': {},
                '@apostrophecms/video': {},
                '@apostrophecms/html': {},
                button: {},
                container: {},
                Twocolumn: {},
              },
            columns: 2
            }
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['main']
      }
    }
  }
};
