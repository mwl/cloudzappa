var port = process.env.VMC_APP_PORT || process.env.C9_PORT || process.env.PORT || 5678;
require('zappa').run_file('./server.coffee', { port: [port]});
