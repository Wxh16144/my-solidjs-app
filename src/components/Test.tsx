import type { ParentComponent } from "solid-js"

const Test: ParentComponent = (props) => (
  <div>
    {props.children}
  </div>
)

export default Test