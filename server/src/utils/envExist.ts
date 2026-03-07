export function envExists(envName: string) {
  const env = process.env[envName];
  if (env && env !== "") {
    return env;
  }
  throw new Error(`Env ${envName} dont exist`);
}
