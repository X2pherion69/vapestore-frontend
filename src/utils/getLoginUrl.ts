import { config } from './../configs/index';
export const getLoginUrl = () => `http://${config.KC_HOST}/realms/${config.KC_REALM}/protocol/openid-connect/auth?response_type=${config.KC_RES_TYPE}&client_id=${config.KC_CLIENT_ID}`
