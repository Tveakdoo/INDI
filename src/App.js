import {AppWrapper, Main} from "./common/commonStyle";
import {Home} from "./components/Home";
import {Advantage} from "./components/Advantage";
import {About} from "./components/About";

function App() {
    return (
        <AppWrapper>
            <Main>
                <Home/>
            </Main>
            <Advantage/>
            <About/>
            <footer>
                123
            </footer>
        </AppWrapper>
    );
}

export default App;
