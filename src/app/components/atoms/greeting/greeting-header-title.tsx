export default function GreetingHeaderTitle(props: { text: string, name: string }) {

  return (
    <h1 className="text-4xl text-blue-500 mb-2">{props.text} {props.name}!</h1>
  )
}