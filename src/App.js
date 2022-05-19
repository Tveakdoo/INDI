import {AppWrapper, Main} from "./common/commonStyle";
import {Home} from "./components/Home";
import {Workplace} from "./components/Workplace";

function App() {
    return (
        <AppWrapper>
            <Main>
                <Home/>
                <Workplace/>
            </Main>
            <footer>
            </footer>
        </AppWrapper>
    );
}

export default App;
