# Karmen.tech website

[![Netlify Status](https://api.netlify.com/api/v1/badges/47d7d170-5d7e-437e-850d-46df0b2fe539/deploy-status)](https://app.netlify.com/sites/infallible-bhaskara-3b37d5/deploys)

## Table of contents

- [Karmen.tech website](#karmentech-website)
  - [Table of contents](#table-of-contents)
- [Development](#development)
  - [Installation](#installation)
  - [Launching for development](#launching-for-development)
  - [Bundling for production](#bundling-for-production)
  - [Using Docker](#using-docker)

# Development

This project requires NodeJS.

## Installation

```
git clone https://github.com/fragaria/karmen-web.git karmen.tech
cd karmen.tech
npm i
```

## Launching for development

Start the application using:

```
npm start
```

Testing site will be available at `http://localhost:8000/`.

## Translations

We use `react-intl` for translations, so english version is auto-extracted from `defaultMessage` attribute of `FormattedMessage` component.

**To add or update texts:**

1. Use `defaultMessage` for english version update
2. run `npm translate`
3. Edit `src/i18n/translations/cs.json`
4. run `npm run manage-translations`

## Bundling for production

Create production bundle using:

```
npm run build
```

## E-mail templates

If you need to update texts of e-mails we send, e-mail templates are located in `functions` directory:

`functions/send-contact-form-message`
`functions/send-order-confirmation`
`functions/send-order-notification`

In case you need to add new variables, you need to update one of renderers `functions/render-template-contact-form.js` of `functions/render-template.js`



## Using Docker

This theme has built-in Docker support. For many users, it's the easiest option
to get things up and running. Note this will only build the site once and run
it in Nginx. If you need development support, go with full npm installation instead.

First, make sure you have Docker along with `docker-comopose` installed. To do
so, please follow a guide according to you OS of choice:

- [Windows](https://docs.docker.com/docker-for-windows/install/)
- [macOS](https://docs.docker.com/docker-for-mac/install/)
- [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)

`docker-compose` can be installed by following
[official resources](https://docs.docker.com/compose/install/).

**Note for Fedora**: It's better to run docker-compose without `sudo`. Please
follow [this guide](https://bluntinstrumentsoftesting.com/2016/12/03/run-docker-without-sudo-in-fedora-25/)
to allow running without it.

Once you have Docker deamon running, just navigate to a cloned repository and
run:

```
docker-compose up
```

First boot might take some time, but you should be presented with a running
app on `http://localhost:8000` after a while.
