import { AppWrapper, Main } from "./common";
import { Home } from "./components/Home";
import { Workplace } from "./components/Workplace";
import { Advantage } from "./components/Advantage";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Solarium } from "./components/Solarium";

function App() {
	return (
		<AppWrapper>
			<Main>
				<Home />
				<Advantage />
				<About />
				<Workplace />
				<Solarium />
			</Main>
			<Footer />
		</AppWrapper>
	);
}

export default App;
