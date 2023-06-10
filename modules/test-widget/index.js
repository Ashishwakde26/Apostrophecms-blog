module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
      label: 'Test widget'
    },
    fields: {
      add: {
        items: {
            label: 'Items',
            type: 'array',
            fields: {
              add: {
                title: {
                  type: 'string',
                  label: 'Title'
                },
                email: {
                  type: 'array',
                  label: 'Email address',
                  fields: {
                     add: {
                        gmails: {
                            type: 'string',
                            label: 'Gmail address'
                        }
                    }
                  }
                },
                main: {
                    type: 'area',
                    options: {
                    widgets: {
                            '@apostrophecms/rich-text': {},
                            '@apostrophecms/image': {},
                            '@apostrophecms/video': {},
                          }
                        }
                      }       
                    }
                }
            }
        }      
}
}