import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import Talk from "./routes/Talk";

function App() {
  return <Router>
          <Switch>
            <Route path="/">
                <Home />
            </Route>
           {/* url이 id라는 변수를 받을것 */}
            <Route path="/movie/:id">
               <Detail />  
            </Route>
           
            <Route path="/talk">
               <h3>talk</h3>
               <Talk /> 
            </Route>
          </Switch>
      </Router>
}





export default App;
