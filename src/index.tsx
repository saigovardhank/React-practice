// tsx is a typescript extension which contains jsx
// react-dom takes the React application and render it to DOM

// createRoot is a function used to creater container for react to mount itself on the front-end
import { createRoot } from "react-dom";
const App = () => {
    /* The below code is not html but jsx
    It is actually -> React.createElement(div, null, "Hello React");
    */
    return <div>Hello React</div>;
    
}