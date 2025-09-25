import type { CSSProperties } from "react";
import MyCoolApp from "./components/MyCoolApp"

function App() {

  let isActive = false;
  const someStylos:CSSProperties = {
    backgroundColor: 'red',
    color: 'green',
    marginTop:30,
  }

  return (
    <>

      <h1>Test App Component</h1>
      <div>This is a Test App to create stuff and learn</div>
      {isActive ? <MyCoolApp /> : <span>not cool App</span>}

      <p style={{
        color: 'red',
        backgroundColor: '#fafafa',
        borderRadius: isActive ? 10 : 0,
      }}>
        this is awful to format style
      </p>
      <p style={someStylos}>
        other aberration to see but a little less awful
      </p>


    </>
  )
}

export default App
