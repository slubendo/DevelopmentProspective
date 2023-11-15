export default function TabButton(props: {tab: string, focus: boolean}) {

  let color;
  let roundedStyles;

  if(props.focus) {
      color = "text-white bg-blue-500 border shadow-lg p-4 md:hover:bg-blue-800";
  } else {
      color = "text-blue-500 bg-white border shadow-lg p-4 md:hover:bg-gray-200";
  }

  if (props.tab === "Saved") {
      roundedStyles = "rounded-l-lg"; // Round left
  } else if (props.tab === "Applied") {
      roundedStyles = "rounded-r-lg"; // Round right
  }

  return (
      <div className="text-2xl">
          <p className={`${color} ${roundedStyles}`}>{props.tab}</p>
      </div>
  )
}
