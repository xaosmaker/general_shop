import { app } from "./server";

import "./loadEnvs";

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
