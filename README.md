This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the project:

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About

This project was built using:

- Next.js 14
- React v18.0
- TypeScript
- Tailwind CSS

### Endpoints:

- http://localhost:3000/properties: Displays all properties allowing filtering.
- http://localhost:3000/properties/5631: Display a specific property allowing saving and contact.
- http://localhost:3000/properties/9999: Unknown Id display the Not Found page.

### Structure

`app`: App Router - Where all the pages are placed;<br/>
`assets`: Files - Where all files are placed;<br/>
`components`: Custom Components created for this project. Example: <Button/>;<br/>
`lib`: Methods to simulate a backend request;<br/>
`utils`: Where all files with auxiliary functions are placed.

### Packages

`classnames`: A simple JavaScript utility for conditionally joining classNames together;<br/>
`react-hook-form`: Performant, flexible and extensible forms library for React Hooks (Combined with `yup`);<br/>
`react-slider`: Slider component for React;<br/>
`sonner`: An opinionated toast component for React;<br/>
`use-debounce`: Debounce hook for react.

## Next steps

- Add pagination on properties page;
- Add tooltip on price filter to show selected value;
