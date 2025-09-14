import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// Try to run our custom function as App is also a function in App.jsx
function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


// // Now let's try to create a custom element just like we did in our ../../customReact/customReact.js
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to Visit'
// }


// With the React create element
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  },
  'Click to Search'
) // and now when we use this custom element in our renderer it will obviously show 


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // Yup can run successfully 
    // <MyApp />
    // let's see if our custom element can run
    // reactElement // Of course not as in the customReact file we also created a custom renderer for our
                  // custom element and thus we were able to render it but in here the react has its own
                  // render() function and we need to follow its syntax and other rules.

    reactElement
  // </StrictMode>,
)
