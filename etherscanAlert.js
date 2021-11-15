const axios = require("axios");
const CronJob = require("cron").CronJob;
const job = new CronJob("*/10 * * * * *", async () => {
  console.log("You will see this message every 10 seconds");
  const result = await axios.get(
    `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=DU1W9IM4I88Q1YMJ4PRT2CI6F1B5ZH1QCE`
  );

  const msg = result.data.result.SafeGasPrice + " GWEI";
  console.log(msg);
});
job.start();
