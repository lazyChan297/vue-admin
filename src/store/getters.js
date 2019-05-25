import { stat } from "fs";

const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  addRouters: state=> state.permission.addRouters,
  permission_routes: state=> state.permission.routes
}
export default getters
