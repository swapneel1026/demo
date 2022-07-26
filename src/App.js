import "./App.css";
import MainContainer from "./components/MainContainer";
import YourMobileContents from "./subcomponents/YourMobileContents";
import businessman from "./assets/businessman.svg";
import profgirl from "./assets/profgirl.svg";
import businessmanBlue from "./assets/businessmanBlue.svg";
import blacktag from "./assets/blacktag.svg";
import businesswomanLaptop from "./assets/businesswomanLaptop.svg";
import EnterCode from "./subcomponents/EnterCode";
import WhatshouldCall from "./subcomponents/WhatshouldCall";

function App() {
  return (
    <div className="App">
      {/* <MainContainer
        midComponent={<YourMobileContents />}
        downimg={businessman}
      /> */}
      {/* <MainContainer midComponent={<EnterCode />} downimg={profgirl} /> */}
      <MainContainer
        midComponent={<WhatshouldCall />}
        downimg={businessmanBlue}
      />
      {/* <MainContainer midComponent downimg={blacktag} />
      <MainContainer midComponent downimg={businesswomanLaptop} /> */}
    </div>
  );
}

export default App;
