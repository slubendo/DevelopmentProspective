interface SubmitButtonProps {
  buttonMessage: string;
}

export default function SubmitButton({buttonMessage}:SubmitButtonProps) {


  return (
    <button
      type="submit"
      className="w-full text-2xl bg-indigo-500 dark:bg-indigo-700 text-white p-3 rounded-xl shadow hover:bg-indigo-700 dark:hover:bg-indigo-800"
    >
    {buttonMessage !== "Submit" ? (
            <>
              <span className="mr-2">{buttonMessage}</span>
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </>
          ) : (
            buttonMessage
          )}    </button>
  )
}