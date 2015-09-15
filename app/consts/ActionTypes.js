import keyMirror from 'keymirror'

export default {
  User: keyMirror({
    getCurrentUser: null,
  }),

  Users: keyMirror({
    listUsers: null,
  }),
}
