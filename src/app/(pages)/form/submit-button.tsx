export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="block mx-auto p-3 bg-azure-blue text-white text-sm font-medium rounded-full transition-transform ease-in-out duration-300 transform hover:scale-105"
      style={{ width: "85%" }} // Adjust the width as needed
    >
      Submit
    </button>
  );
}