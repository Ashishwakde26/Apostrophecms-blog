module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Default Page'
  },
  fields: {
    add: {
      projectSlug: {
        label: 'Enter a unique identifier for the project',
        type: 'slug'
      },
      contactInfo: {
        label: 'Address',
        type: 'object',
        fields: {
          add: {
            street: {
              type: 'string',
              label: 'Street'
            },
            city: {
              type: 'string',
              label: 'City'
            },
            state: {
              type: 'string',
              label: 'State'
            }
          }
        }
      },
      rating: {
        label: 'Rate the movie from 1-5',
        type: 'integer',
        min: 1,
        max: 5
      },
      workEmail: {
        label: 'Work email address',
        type: 'email'
      },
      birthday: {
        label: 'What is your birthday?',
        type: 'date'
      },
      backgroundColor: {
        type: 'color',
        label: 'Background color',
        options: {
          format: 'rgb'
        }
      },
      themeColor: {
        type: 'color',
        label: 'Theme color'
      },
      genres: {
        label: 'Select the genres that apply to this book',
        type: 'checkboxes',
        choices: [
          {
            label: 'Romance 🥰',
            value: 'romance'
          },
          {
            label: 'Comedy 🤣',
            value: 'comedy'
          },
          {
            label: 'Crime 😰',
            value: 'crime'
          }
        ]
      },
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
                test: {},
                testing: {},

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
