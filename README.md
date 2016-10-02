# wedding-website

## Install

Node.js and its package manager npm are required dependencies. The following versions were used for development:

* node -> 6.7.0
* npm -> 3.10.3

Once these dependencies are installed and the git repo cloned, execute the following to install all the node dependencies:

```bash
npm install
```

## Build


### Development Build

```bash
grunt
```

### Production Build

```bash
grunt --prod
```


## Test Server

The wedding-website repository contains a Python 2.7.x HTTP server that serves the files in the "site" directory created by the grunt build.

### Running with Grunt

If the system is a Unix environment, the server can be started via grunt like so:

```bash
# The server listens on port 8000 by default
grunt server
```

The port that the server listens on can be changed by passing the argument `--port=<port>`:

```bash
grunt server --port=8881
```

**Note:** Not all output from test_server.py is outputted when running the server with grunt. This seems to be an issue with grunt-shell.

### Running directly

Alternatively, the server can be started by being invoked directly:

```bash
# The server listens on port 8000 by default
./test/test_server.py
```

The port that the server listens on can be changed like so:

```bash
./test/test_server.py 8881
```