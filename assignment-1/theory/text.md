React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.”

When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.


--------------------------

what is emmet?
Emmet is a web development tool that allows developers to write HTML and CSS code quickly and efficiently. It is a plugin for text editors and integrated development environments (IDEs) that provides shorthand syntax for writing code, speeding up the coding process.

Emmet uses abbreviations and shortcuts to expand into full HTML or CSS code snippets. For example, instead of typing out the full HTML structure manually, you can use Emmet to generate it with a simple abbreviation like html:5. Similarly, Emmet can be used for generating complex CSS selectors, attribute values, and more.

Many popular text editors and IDEs, such as Visual Studio Code, Sublime Text, Atom, and others, support Emmet as a plugin. Developers find Emmet particularly useful for boosting their productivity and streamlining the coding workflow.
-------------------------
what is the difference b/w library and framework?

“In computer programming, a software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software” 
Framework: A framework is a structure or skeleton that defines the architecture and design of your application. You write your own code to fill out the framework, but the framework is in control of the flow and calls your code when needed. For example, you can use a web framework to create a web application, or a game framework to create a game.

Library: A library is a collection of functions or classes that you can call from your own code to perform specific tasks. You are in control of the flow of your application and you decide when and where to use the library. For example, you can use a string library to manipulate strings, or a math library to perform calculations

-------------------------------------
What is CDN? Why do we use it?
CDN stands for Content Delivery Network. It is a network of servers strategically distributed around the world to deliver web content, such as images, stylesheets, scripts, and other resources, to users based on their geographical location. The primary purpose of a CDN is to improve the performancFaster Loading Times
Global Reach
Scalability
Load Balancing
Bandwidth Savings
Content Caching
Improved Security
High Availability
Mobile Optimization
Analytics and Reporting
e, reliability, and efficiency of content delivery on the internet.
-------------------------------------------
What is crossorigin in script tag?
crossorigin attribute is used to control how the browser handles cross-origin requests for the associated script file. It is particularly relevant when you are including scripts from a different domain (cross-origin).
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

------------------------------
** The JSX is a tag-based JavaScript syntax like looks familiar with HTML. 
What is diference between React and ReactDOM
React is the core library of React.js. It provides the essential functionalities for building user interfaces using a component-based architecture. React allows developers to create reusable UI components, manage component state, and handle the rendering of these components efficiently. It also includes features like virtual DOM for optimizing updates and reconciliation.

ReactDOM is a package that provides DOM-specific methods for interacting with the Document Object Model (DOM). It acts as the glue between React and the DOM, allowing React components to be rendered to the browser's DOM.

---------------------------
async and defer?
async:

When you include the async attribute in a <script> tag, it indicates that the script should be executed asynchronously. This means that the script will be fetched in the background while the HTML parsing and rendering continue. Once the script is fetched, it will be executed as soon as it is available, potentially before the HTML document has fully loaded.

defer:
When you include the defer attribute in a <script> tag, it indicates that the script should be executed after the HTML document has been fully parsed. The script will be fetched in the background, but it won't block HTML parsing. The order of multiple deferred scripts is maintained, and they are executed in the order they appear in the document.
-------------------------