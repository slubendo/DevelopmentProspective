import BlockHeader3 from "../atoms/block/block-header-3";
import BlockHeader4 from "../atoms/block/block-header-4";
import BlockContentList from "../atoms/block/block-content-list";
import ContainerCardList from "../atoms/container/container-card-list";

export default function ScholarshipCardRequirements(props: {content: string, list: string[]}) {
    //will definitely need a custom class for this, in order to get multiple types of eligibilities working.

    return (
        <ContainerCardList>
            <BlockHeader3 header="Eligibility Requirements" />
            <BlockHeader4 header={props.content} />
            <BlockContentList list={props.list}/>
        </ContainerCardList>
        
    )
}