import ScholarshipIcon from "../atoms/scholarship/scholarship-icon"
import ContainerScholarFrame from "../atoms/container/container-scholarframe"

export default function ScholarshipIconFrame(props: {src: string, alt: string}) {
    
  return (
        <ContainerScholarFrame>
            <ScholarshipIcon src={props.src} alt={props.alt} />
        </ContainerScholarFrame>
    )
}