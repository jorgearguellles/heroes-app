# Heroes React App - SPA

This project is a Heroes App and you can:

- Search Hero by name
- Check hero details

## Maker

- Developed by Jorge Arias Argüelles [GitHub](https://github.com/jorgearguellles) &
  [LinkedIn](https://www.linkedin.com/in/jorgeariasarguelles/)
- Based into React: De Cero a Experto course by Fernando Herrera [GitHub](https://github.com/Klerith) & [Udemy](https://www.udemy.com/course/react-cero-experto/)

## Development Technologies

Made with :green_heart: using:

- [React.js](https://es.reactjs.org)
- [Bootstrap](https://getbootstrap.com/)
- [React Router 6](https://reactrouter.com)
- [Query String](https://www.npmjs.com/package/query-string)

## Demo

[Create your first To do list!]()

## Screenshot App

![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/1.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/2.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/3.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/4.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/5.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/6.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/7.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/8.png)
![App Screenshot](https://github.com/jorgearguellles/heroes-app/blob/main/src/screenshots/9.png)

## Feedback

Open to: [@JorgeAriasArgüelles](https://www.linkedin.com/in/jorgeariasarguelles/)

<hr />

# ¿What we will see in this Project section?

- Deep SPA ( Single Page Application )
- Different themes in the same App applied in different routes
- Multiples Routers
- Push y Replace en el History
- Read arguments by URL
- QueryParams
- Apply filters by QueryStrings

# Main Concept about Router

- **URL** - The URL in the address bar. A lot of people use the term "URL" and "route" interchangeably, but this is not a route in React Router, it's just a URL.
- **Location** - This is a React Router specific object that is based on the built-in browser's window.location object. It represents "where the user is at". It's mostly an object representation of the URL but has a bit more to it than that.
- **Location State** - A value that persists with a location that isn't encoded in the URL. Much like hash or search params (data encoded in the URL), but stored invisibly in the browser's memory.
- **History Stack** - As the user navigates, the browser keeps track of each location in a stack. If you click and hold the back button in a browser you can see the browser's history stack right there.
- **Client Side Routing (CSR)** - A plain HTML document can link to other documents and the browser handles the history stack itself. Client Side Routing enables developers to manipulate the browser history stack without making a document request to the server.
- **History** - An object that allows React Router to subscribe to changes in the URL as well as providing APIs to manipulate the browser history stack programmatically.
- **History Action** - One of POP, PUSH, or REPLACE. Users can arrive at a URL for one of these three reasons. A push when a new entry is added to the history stack (typically a link click or the programmer forced a navigation). A replace is similar except it replaces the current entry on the stack instead of pushing a new one. Finally, a pop happens when the user clicks the back or forward buttons in the browser chrome.
- **Segment** - The parts of a URL or path pattern between the / characters. For example, "/users/123" has two segments.
- **Path Pattern** - These look like URLs but can have special characters for matching URLs to routes, like dynamic segments ("/users/:userId") or star segments ("/docs/\*"). They aren't URLs, they're patterns that React Router will match.
- **Dynamic Segment** - A segment of a path pattern that is dynamic, meaning it can match any values in the segment. For example the pattern /users/:userId will match URLs like /users/123
- **URL Params** - The parsed values from the URL that matched a dynamic segment.
- **Router** - Stateful, top-level component that makes all the other components and hooks work.
- **Route Config** - A tree of routes objects that will be ranked and matched (with nesting) against the current location to create a branch of route matches.
- **Route** - An object or Route Element typically with a shape of { path, element } or <Route path element>. The path is a path pattern. When the path pattern matches the current URL, the element will be rendered.
- **Route Element - Or <Route>** This element's props are read to create a route by <Routes>, but otherwise does nothing.
- **Nested Routes** - Because routes can have children and each route defines a portion of the URL through segments, a single URL can match multiple routes in a nested "branch" of the tree. This enables automatic layout nesting through outlet, relative links, and more.
- **Relative links** - Links that don't start with / will inherit the closest route in which they are rendered. This makes it easy to link to deeper URLs without having to know and build up the entire path.
- **Match** - An object that holds information when a route matches the URL, like the url params and pathname that matched.
- **Matches** - An array of routes (or branch of the route config) that matches the current location. This structure enables nested routes.
- **Parent Route** - A route with child routes.
- **Outlet** - A component that renders the next match in a set of matches.
- **Index Route** - A child route with no path that renders in the parent's outlet at the parent's URL.
- **Layout Route** - A parent route without a path, used exclusively for grouping child routes inside a specific layout.

## useMemo Hook

useMemo is for memorizing data, in this case we need to memorize the function call, and only call the function when the Publisher dependency update.

useMemo receive two args:

1. A callback with the action to do
2. A dependencies array

**Use case:**

```js
import { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
```
