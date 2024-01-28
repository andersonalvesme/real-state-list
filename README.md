This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the project:

```bash
npm install
-
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About

This project was built using:

- NextJS 14 (App Router)
- React 18 (Function Components/Hooks)
- TypeScript
- Tailwindcss

There are two endpoints:
- http://localhost:3000/properties

This endpoint show all the properties in four columns and two lines, that are filtered using the header filter.

- http://localhost:3000/properties/5631

This endpoint show a specific property that you can save in a list and/or submit a contact form.

PS: If you enter in a URL using an invalid Id, a NotFound page will be shown.

### Structure

- app: Where all the layout files are placed according to the Next pattern;
- assets: Where is placed the mocked data of properties and images of them;
- components: Custom components created for this project, just to show;
- lib: It's having a file to simulate and endpoint call;
- utils: Folder that you can put all the assistant functions.

### Components/Packages

- DoubleRangeSlider: Made this component from zero, checking some examples on the internet and adjusting for this project;
- use-debounce: Used this package to apply a debounce on filter;
- Form validation: Used react-hook-form and yup to validate the Contact Form;
- sonner: Used this package to show the toast with the success message and a modal showing the saved properties;
- localStorage: To show the saved Properties I used the localStorage.

## Result

In these videos below I am showing the final result.

### Properties

![properties.gif](properties.gif)

### Property view

![property_view.gif](property_view.gif)

## Comments

There are some points that I think can be better, for example:
- Adding a pagination on properties screen;
- Adding a tooltip on price filter to show the value if the filter range;
