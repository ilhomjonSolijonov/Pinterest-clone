import './app.css'
import LeftBar from "./component/leftBar/leftBar.jsx";
import TopBar from "./component/topBar/topBar.jsx";
import Gallery from "./component/gallery/gallery.jsx";

const App = () => {
  return (
    <div className="app">
      <LeftBar/>
      <div className="content">
        <TopBar/>
        <Gallery/>
      </div>
    </div>
  )
}

export default App