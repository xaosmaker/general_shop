import { envExists } from "./utils/envExist";

const DB_URL = envExists("DB_URL");

export { DB_URL };
