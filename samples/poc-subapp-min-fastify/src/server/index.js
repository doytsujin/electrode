"use strict";

const electrodeConfippet = require("electrode-confippet");
const support = require("@xarc/app/support");
const fastifyServer = require("@xarc/fastify-server");

module.exports = async () => {
  await support.load();
  const config = electrodeConfippet.config;
  return await fastifyServer(config);
};

if (require.main === module) {
  module.exports();
}
