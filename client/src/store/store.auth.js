/* eslint-disable */
import feathersClient, { makeAuthPlugin } from '../feathers-client'

export default makeAuthPlugin({ userService: 'users' })