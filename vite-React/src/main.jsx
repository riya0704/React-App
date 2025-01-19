
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
const reactElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
);
const anotherUser = 'Riya@verma'
const anotherReact = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
);

createRoot(document.getElementById('root')).render(

  anotherReact
 
)
