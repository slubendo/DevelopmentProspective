"use client"

import { useState } from "react"

import { sendJSON } from "./actions"
import SubmitButton from "./submit-button"

import BlockHeader2 from "@/app/components/atoms/block/block-header-2"
import BlockHeader3 from "@/app/components/atoms/block/block-header-3"
import { redirect } from "next/navigation"
import { useRouter } from 'next/navigation';

export type UserForm = {
  "gender": string | null,
  "ethnicity": string | null,
  "indigenous": boolean | null,
  "disability": boolean | null,
  "level of education": string | null,
  "income level": string | null,
  "sports": string | null,
  "field of study": string | null,
  "religion": string | null
}

export default function SubmitForm() {
  const router = useRouter();
  //disability, ethnicity, field of study, religion, level of education, income level, sports, gender, LGBTQ+, indigenious
  const [buttonMessage, setButtonMessage] = useState("Submit")
  const [formData, setFormData] = useState({
    "gender": "",
    "ethnicity": "",
    "indigenous": false,
    "disability": false,
    "level of education": "",
    "income level": "",
    "sports": "",
    "field of study": "",
    "religion": ""
  });

  const handleChangeForm = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });


  };

  const [formBoolData, setFormBoolData] = useState({
    indigenous: "",
    disability: "",
  })

  const handleChange = (event: any) => {
    const value = event.target.value;
    setFormBoolData({
      ...formBoolData,
      [event.target.name]: event.target.value
    })
    let bool;

    if (value == "Yes") {
      bool = true;
    } else {
      bool = false;
    }

    setFormData({
      ...formData,
      [event.target.name]: bool,
    });

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setButtonMessage("Loading")
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const reader = res.body?.getReader()

    if (!reader) {
      console.error("error getting result")
      return
    }

    try {


      const decoder = new TextDecoder("utf-8")
      let result = ""

      while (true) {
        const { done, value } = await reader.read()

        if (done) {
          break
        }

        console.log(decoder.decode(value))
      }
    } catch (e) {
      console.error(e)
    }

    console.log('maybe we\'re good')

    // redirect 
    // use router redirect 
    router.push('/scholarship');
    setButtonMessage("Loading")
  }

  return (
    <div className="pb-24 md:pt-24">
      <BlockHeader2 header="Prospective Info" />
      {/* <div className="relative h-64 bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center filter  grayscale-0 transition duration-300 animate-pulse"
          style={{ backgroundImage: 'url("/Logo.png")' }}
        ></div>
      </div> */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-1.5">
          <BlockHeader3 header="What's your gender?" />
          <select className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
            value={formData.gender}
            onChange={handleChangeForm}
            name="gender"
          >
            <option value="">

            </option>
            <option value="male">
              Male
            </option>
            <option value="female">
              Female
            </option>
            <option value="other">
              Other
            </option>
          </select>
        </div>
        <div>
          <BlockHeader3 header="What's your ethnicity?" />
          <input
            name="ethnicity"
            type="text"
            onChange={handleChangeForm}
            value={formData.ethnicity}
            className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <BlockHeader3 header="Are you Indigenous?" />
          <select className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
            value={formBoolData.indigenous}
            onChange={handleChange}
            name="indigenous"
          >
            <option value="">

            </option>
            <option value="No">
              No
            </option>
            <option value="Yes">
              Yes
            </option>
          </select>
        </div>
        <div className="flex flex-col space-y-1.5">
          <BlockHeader3 header="Do you have a disability?" />
          <select className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
            value={formBoolData.disability}
            onChange={handleChange}
            name="disability"
          >
            <option value="">

            </option>
            <option value="No">
              No
            </option>
            <option value="Yes">
              Yes
            </option>
          </select>
        </div>
        <div>
          <BlockHeader3 header="What's your highest level of education?" />
          <input
            name="level of education"
            type="text"
            onChange={handleChangeForm}
            value={formData["level of education"]}
            className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <BlockHeader3 header="What's your income level?" />
          <select className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
            value={formData["income level"]}
            onChange={handleChangeForm}
            name="income level"
          >
            <option value="">

            </option>
            <option value="low">
              Low
            </option>
            <option value="middle">
              Middle
            </option>
            <option value="high">
              High
            </option>
          </select>
        </div>
        <div>
          <BlockHeader3 header="What sports are you in?" />
          <input
            name="sports"
            type="text"
            onChange={handleChangeForm}
            value={formData.sports}
            className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
          />
        </div>
        <div>
          <BlockHeader3 header="What field of study are you in, or planning on being in?" />
          <input
            name="field of study"
            type="text"
            onChange={handleChangeForm}
            value={formData["field of study"]}
            className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
          />
        </div>
        <div>
          <BlockHeader3 header="What religion do you practice?" />
          <input
            name="religion"
            type="text"
            onChange={handleChangeForm}
            value={formData.religion}
            className="mt-1 block w-full py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0"
          />
        </div>
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
    </form>
    </div>
  );
}
