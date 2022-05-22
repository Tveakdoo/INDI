import {AppWrapper, Main} from "./common/commonStyle";
import {Home} from "./components/Home";
import {Advantage} from "./components/Advantage";
import {About} from "./components/About";
import {Footer} from "./components/Footer";

function App() {
    return (
        <AppWrapper>
            <Main>
                <Home/>
                <Advantage/>
                <About/>
            </Main>
            <Footer/>
        </AppWrapper>
    );
}

export default App;
