import React from 'react';
import Editor from "./editor/Editor";

const AppContainer : React.FC = ({children}) => {
    return <div>
        {children}
    </div>
}

function App() {
    return (
        <AppContainer>
            <Editor/>
        </AppContainer>
    );
}

export default App;
