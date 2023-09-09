import { FormField } from "./components";

export default function App() {
  return (
    <div style={{ padding: "50px" }}>
      <FormField
        type='text'
        label='Name'
        value="Shifat"
        onChange={(val) => console.log(val)}
      />
      <br />
      <FormField
        type='text'
        label='Email'
        inside
        error="Something went wrong!"
        value="John"
        onChange={(val) => console.log(val)}
      />
      <br />
      <FormField
        type='number'
        label='Price'
        value={100}
        onChange={(val) => console.log(val)}
      />
      <br />
      <FormField
        type='number'
        label='Price'
        value={100}
        onChange={(val) => console.log(val)}
        floatValue
      />
    </div>
  )
}
