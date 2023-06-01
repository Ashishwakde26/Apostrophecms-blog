module.exports = {

    fields: {
      add: {
        birthday: {
          label: 'What is your birthday?',
          type: 'date'
        },
        subtitle: {
          type: 'string'
        },
        content: {
          type: 'area',
          options: {
            widgets: {
              // add support for the rich-text editor
              '@apostrophecms/rich-text': {},
              // add support to multimedia fields in
              // the blog post content
              '@apostrophecms/image': {},
              '@apostrophecms/video': {},
            }
          }
        }
      },
      // add the "content" fields to the
      // "Basics" fields
      group: {
        basics: {
          label: 'Basics',
          fields: [
            'subtitle',
            'birthday',
            'content'
          ]
        }
      }
    }
  };