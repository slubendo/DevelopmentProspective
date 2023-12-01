export default function GreetingHeaderTitle(props: { text: string, name: string }) {

  return (
    
    <h1 className="text-4xl text-azure-blue mb-2">
      <span className="font-light">{props.text}</span>
        {' '}
      <span className="font-regular">{props.name}</span>
    </h1>
  
  )
}