/* eslint-disable */
import feathersClient, { makeServicePlugin,BaseModel } from '../feathers-client'

class User extends BaseModel {
    constructor(data, options) {
      super(data, options)
    }
    static modelName = 'User'
    static instanceDefaults() {
        return {
            username: '',
            displayName: '',
            password: '',
            imageUrl: '',
        }
    }
  }

export default makeServicePlugin({
    Model :User,
    service: feathersClient.service('User'),
  })