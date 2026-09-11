stuff i finished for the ui project:

- cloned the repo and got npm install working.
- looked at how the routing works with AppRouter and the layout wrappers. ComponentLayout is where the sidebar array is.

components i added:
- built the tooltip. added some basic variants (light, dark, info) and hooked it up to a new docs page.
- updated the navbar page since it was pretty empty before. added the prop table for it.
- built a basic login form layout (FormPage) to show how to use the input and button components together.
- added an article page to show standard text/typography layouts.
- made a cool 3d tilt card in Card/ThreeDCard.tsx using css perspective and mouse tracking. added it to the top of the card examples.

fixing the dark mode bugs:
- the dark theme was broken in a few places because of hardcoded tailwind classes (like bg-white and text-gray-900).
- i went through Input.tsx, ComponentLayout, the top Navbar, and the doc wrappers (ComponentsDemo, CodeBlock, PropsTable) and swapped the hardcoded stuff with the css variables (var(--text-color), etc) that were set up in index.css.

everything is routed properly in AppRouter now. sidebar navigation works for all the new pages.
