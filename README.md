# Registration form

A registration form, obviously.

The form fires POST requests to `http://localhost:8080/api/user`.

You can change the url at the top of the `src/App.jsx`.

## Getting started

You are expected to have
[Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm),
and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install) installed already.

- Clone this repo

```bash
$ git clone https://github.com/Jonxslays/registration-form.git
$ cd registration-form
```

- Install dependencies

```bash
$ yarn
```

- If you are running the python testing backend

```bash
$ python -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
$ python backend.py
```

- Start the development app

```bash
$ yarn start
```

## Building for production

- Build the production app

```bash
$ yarn build
```

Place the resulting files from the build directory onto your server.

## License

This registration form is licensed under the
[MIT License](https://github.com/Jonxslays/registration-form/blob/master/LICENSE).
