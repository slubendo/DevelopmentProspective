import ScholarshipIcon from "../atoms/scholarship/scholarship-icon";
import ContainerScholarFrame from "../atoms/container/container-scholarframe";

export default function ScholarshipIconFrame(props: { src: string, alt: string }) {
  return (
    <ContainerScholarFrame>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <ScholarshipIcon src={props.src} alt={props.alt} />
      </div>
    </ContainerScholarFrame>
  );
}