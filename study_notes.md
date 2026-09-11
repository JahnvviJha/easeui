quick notes on how this codebase is structured

- tech: react 18, tailwind, redux toolkit. routing is done with react router 7.
- all reusable ui components are in src/components.
- the docs/demo pages for them are in src/pages/components. 

how to add a new page (e.g. tooltip):
1. build the component inside src/components/Tooltip.
2. make the demo page in src/pages/components/TooltipPage.tsx.
3. add the route to src/router/AppRouter.tsx.
4. add the string "Tooltip" to the components array inside src/layouts/ComponentLayout.tsx so it shows up in the left sidebar.

notes on theming:
- dark mode relies on redux saving the state, and index.css has a [data-theme="dark"] selector that overrides --bg-color and --text-color.
- gotta remember not to use strict tailwind colors like text-black or bg-white in the base components, otherwise it breaks when toggling the theme. gotta use the css vars or transparent backgrounds instead.
