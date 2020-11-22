import React from 'react';
import Editor from "./editor/Editor";
import {Layout, Content, Navigation, SideBar} from "./ui/Layout";


function App() {
    return (
        <Layout>
            <Navigation>
                nav
            </Navigation>
            <SideBar>
                hihi side nave
            </SideBar>
            <Content>
                여긴 콘텐츠 에리어
                <Editor/>
            </Content>
        </Layout>
    );
}

export default App;
