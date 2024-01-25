import { useEffect, useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import notifications from "./notfications.json"
import "./main-container.scss"
import Notifications from "./Notifications";

function App() {

  const [unreaded, setUnreaded] = useState(notifications)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(unreaded.length)
  }, [unreaded])
  

  console.log(unreaded);

  return (
    <main className="main-container">
      <Container className="header">
        <div className="notif">
          <h1>Notifications</h1>
          <Badge>{count}</Badge>
        </div>
        <Button onClick={()=>setUnreaded([])}>Mark all as read</Button>
      </Container>
      <Container>
        <Notifications unreaded={unreaded} setUnreaded={setUnreaded} setCount={setCount}/>
      </Container>
    </main>
  );
}

export default App;
