let multichain = require("multichain-node")({
    port: 8002,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "this-is-insecure-change-it"
});

multichain.create({
    type: "stream",
    name: "stream1",
    open: true
}).then(() => {
    multichain.listStreams();
})
