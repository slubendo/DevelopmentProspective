import BlockContentList from "../atoms/block/block-content-list";
import BlockHeader4 from "../atoms/block/block-header-4";

export default function ListBlock (props: {description: string, list: string[]}) {
    return (
        <div>
            <BlockHeader4 header={props.description} />
            <BlockContentList list={props.list} />
        </div>
    )
}