export default function GreetingHeaderTitle(props: { text: string, name: string }) {

  return (
    
    <h1 className="text-4xl text-blue-500 mb-2">
      <span className="font-extralight">{props.text}</span>
        {' '}
      <span className="font-normal">{props.name}</span>
    </h1>
  
  )
}