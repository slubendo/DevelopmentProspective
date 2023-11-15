export default function BlockContentList(props: { list: string[] }) {

  return (
    <ul className="list-disc list-inside">
      {props.list.map(item => <li className="mx-2 px-4 py-2" key={item}>{item}</li>)}
    </ul>
  )
}