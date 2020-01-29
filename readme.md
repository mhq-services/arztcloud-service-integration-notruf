![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# arztcloud service integration 'Notruf'

This package offers a way to integrate the [arztcloud emergency call service](https://arztcloud.com/services/notruf) on your own website.
With this package the [emergency call service](https://arztcloud.com/services/notruf) will be opened in an iframe placed in a modal.
See <https://arztcloud.com> for a live preview (click on the phone button to open the modal).
This package contains the button as well as the modal with the iframe.

**To be able to use this feature on your website you require a charged token from arztcloud! Otherwise the site won't be shown in the iframe.**

## Using this component

### Integration

#### Script tag

-   Put a script tag similar to this `<script src='https://unpkg.com/@mhq-services/arztcloud-service-integration-notruf@1.0/dist/arztcloud-service-integration-notruf/arztcloud-service-integration-notruf.js'></script>` in the head of your index.html
-   Then you can use the element anywhere in your template, JSX, html etc

#### Node Modules

-   Run `npm install @mhq-services/arztcloud-service-integration-notruf --save`
-   Put a script tag similar to this `<script src='node_modules/mhq-services/arztcloud-service-integration-notruf/dist/arztcloud-service-integration-notruf/arztcloud-service-integration-notruf.js'></script>` in the head of your index.html
-   Then you can use the element anywhere in your template, JSX, html etc

### Components

Place the button with

```html
<ac-notruf-button></ac-notruf-button>
```

and the modal with

```html
<ac-notruf-modal src="#your-personal-arztcloud-service-integration-notruf-link"></ac-notruf-modal>
```

### Customization

#### Button

Set the stroke width of the default icon with `stroke-width` (values 0 to 1 correspond 0% to 100% of the default stroke).

Set the buttons attribute `default` to `false` to be able to replace the image/content of the button (see example index.html below).

Finally you can simply style the button to e.g. change the (hover) color of the button to match with your websites colour scheme.

```css
button.ac-notruf-button {
  font-size: 2.5em;
  color: red;
}
button.ac-notruf-button:hover {
  color: green;
}
button.ac-notruf-button:focus {
  outline: none;
}
```

# Development

## Getting Started

To install dependencies, run:

```bash
npm install
```

To start a test create an index.html in the src folder (example below) and run:

```bash
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

## Example index.html

To test some variations you can copy this snippet to src/index.html.

Since the ac-notruf-modal requires a custom link for the provided service (see attribute src),
we decided to ignore the index.html file to avoid negligent exposure of user data by commits.

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <title>arztcloud Notruf Service Integration</title>

  <script type="module" src="/build/arztcloud-service-integration-notruf.esm.js"></script>
  <script nomodule src="/build/arztcloud-service-integration-notruf.js"></script>

</head>
  <body style="font-size: 2em;">
    <ac-notruf-button></ac-notruf-button>

    <ac-notruf-button stroke-width="0.5"></ac-notruf-button>

    <ac-notruf-button default="false" hint="Inserting svg manually">
      <svg xmlns="http://www.w3.org/2000/svg"
          width="122.88pt"
          height="122.88pt"
          viewBox="0 0 122.88 122.88">
      <defs/>
        <path id="shape021" transform="matrix(0.68350198157 -0.62877483791 -0.62877483791 -0.68350198157 45.136263922 108.17101304)" fill="currentColor" stroke="currentColor" stroke-width="2.4000089552" stroke-linecap="round" stroke-linejoin="round" d="M24.6533 18.2009C26.479 16.1757 34.1312 12.8904 47.3855 12.1331C60.5442 11.5515 65.2533 14.7014 68.0898 16.5219C68.8841 21.4509 68.1822 22.2766 68.2946 25.7011C75.5726 32.9718 90.2492 38.462 92.2291 35.4802C94.7714 30.9937 94.7024 20.6676 87.5061 13.1733C85.3832 11.5376 76.0758 -0.250268 50.1344 0.00405487C24.1935 0.258378 11.1431 7.67136 3.39545 18.6513C-2.28511 26.5889 0.456893 35.5261 2.36729 37.6029C6.07042 39.3539 16.9834 35.8481 24.0991 28.0571C23.8566 25.66 23.5016 20.7207 24.6533 18.2009Z"/>
      </svg>
    </ac-notruf-button>

    <ac-notruf-button icon-url="http://localhost:3333/build/assets/circle-phone_icon.svg" default="false">
    </ac-notruf-button>

    <ac-notruf-modal src="#your-personal-arztcloud-service-integration-notruf-link"></ac-notruf-modal>
  </body>
</html>
```

## Publish

[Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
