import BlockContentPara from "../atoms/block/block-content-para"
import BlockHeader3 from "../atoms/block/block-header-3"

export default function ContentBlock (props: {header: string, content: string}) {
    return (

        <div>
            <BlockHeader3 header={props.header} />
            <BlockContentPara content={props.content} />
        </div>
        
    )
}