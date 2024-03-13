// babel로 변환할 코드 안에 작성
<script type="text/babel"></script>
   const root = document.getElementById("root");
   let counter = 0;
    function countUp(){
        counter = counter + 1;
        render()
    }
  
    function App(){
        const data = React.useState();
        console.log(data);
        return(
            <div>
                <h3>Total clicks : {counter}</h3>
                <button onClick={countUp}>click me</button>
            </div>
        )        
        }
        ReactDOM.render(<App />,root);
    ReactDOM.render(<Container />,root);

<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>