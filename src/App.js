import "./App.css";

const App = () => {
  const googlelogin = () => {
    console.log("google");
  };
  const fblogin = () => {
    console.log("fb");
  };
  return (
    <div className="App">
      <div className="container">
        <h1
          onClick={() => {
            googlelogin();
          }}
        >
          google
        </h1>
        <h1
          onClick={() => {
            fblogin();
          }}
        >
          Facebook
        </h1>
      </div>
    </div>
  );
};

export default App;
