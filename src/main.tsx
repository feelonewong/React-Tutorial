import ReactDOM from "react-dom/client";

const Person = () => <h2>黄飞龙</h2>
const Message = () => <p>Hello World</p>

function HelloReact() {
  return (
    <>
      <Person></Person>
      <Message></Message>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(<HelloReact/>)

