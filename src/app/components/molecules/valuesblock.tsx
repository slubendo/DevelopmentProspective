import BlockHeader4 from "../atoms/block/block-header-4"
import BlockContentValue from "../atoms/block/block-content-value"

export default function ValuesBlock(props: {header: string, value: string}) {
    return (
        <div className="flex flex-col items-center">
            <BlockHeader4 header={props.header} />
            <BlockContentValue value={props.value} />
        </div>
    )
}