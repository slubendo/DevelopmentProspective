"use client"

import { useState } from "react"

import { sendJSON } from "./actions"
import SubmitButton from "./submit-button"

import BlockHeader2 from "@/app/components/atoms/block/block-header-2"
import BlockHeader3 from "@/app/components/atoms/block/block-header-3"

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
    //disability, ethnicity, field of study, religion, level of education, income level, sports, gender, LGBTQ+, indigenious
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

    if(value == "Yes") {
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
    const submission = { ...formData }

    console.log(submission);
    sendJSON(submission);
  }

  return (
    <div className="pb-24 md:pt-24">
        <BlockHeader2 header="Prospective Info" />
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="items-center mx-auto max-w-[85%]">
            <BlockHeader3 header="What's your gender?" />
          <select className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
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

        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="What's your ethnicity?" />
          <input
            name="ethnicity"
            type="text"
            onChange={handleChangeForm}
            value={formData.ethnicity}
            className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
          />
        </div>
        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="Are you Indigenous?" />
          <select className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
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
        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="Do you have a disability?" />
          <select className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
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
        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="What's your highest level of education?" />
          <input
            name="level of education"
            type="text"
            onChange={handleChangeForm}
            value={formData["level of education"]}
            className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
          />
        </div>
        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="What's your income level?" />
          <select className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
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
        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="What sports are you in?" />
          <input
            name="sports"
            type="text"
            onChange={handleChangeForm}
            value={formData.sports}
            className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
          />
        </div>
        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="What field of study are you in, or planning on being in?" />
          <input
            name="field of study"
            type="text"
            onChange={handleChangeForm}
            value={formData["field of study"]}
            className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
          />
        </div>
        <div className="items-center mx-auto max-w-[85%]">
        <BlockHeader3 header="What religion do you practice?" />
          <input
            name="religion"
            type="text"
            onChange={handleChangeForm}
            value={formData.religion}
            className="mt-1 block w-full py-2 px-3 border-2 border-blue-gray-500 bg-white dark:bg-soft-black h-11 rounded-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-hover dark:focus:bg-blue-hover focus:ring-0"
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
