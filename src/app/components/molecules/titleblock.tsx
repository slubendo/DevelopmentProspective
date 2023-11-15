import BlockHeader2 from "../atoms/block/block-header-2";
import BlockContentPara from "../atoms/block/block-content-para";

export default function TitleBlock(props: { header: string; content?: string }) {
    
  return (
        <div>
            <BlockHeader2 header={props.header} />
            {props.content && <BlockContentPara content={props.content} />}
        </div>
    );
}
