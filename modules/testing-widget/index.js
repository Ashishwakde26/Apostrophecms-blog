module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
      label: 'Testing widget'
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
                items: {
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
                }
                    }
                }
            }
        }      
}
}