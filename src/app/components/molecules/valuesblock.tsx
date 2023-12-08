import BlockContentValue from "../atoms/block/block-content-value";

export default function ValuesBlock(props: { header: string, value: string }) {
  return (
    <div className="flex flex-col justify-start items-start">
      <h4 className="text-soft-black mb-1">{props.header}</h4>
      <BlockContentValue value={props.value} />
    </div>
  );
}