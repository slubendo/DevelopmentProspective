"use client"

import ScrollScholarshipcardSimple from "./scrollscholarshipcardsimple";
import { Scholarship } from "./scrollscholarshipcardsimple";
import TabContainer from "../atoms/tab/tab-container";
import TabButton from "../atoms/tab/tab-button";

import { useState } from "react";

export default function TabsScholarshipCardSimple(props: { listSaved: Scholarship[], listApplied: Scholarship[] }) {

  const [index, setIndex] = useState(0);

  const listIndex = [(<ScrollScholarshipcardSimple key="saved" list={props.listSaved} />),
  (<ScrollScholarshipcardSimple key="applied" list={props.listApplied} />)]

  let list = listIndex[index];

  let focus1 = true;
  let focus2 = false;

  if (index == 0) {
    focus1 = true;
    focus2 = false;
  } else if (index == 1) {
    focus1 = false;
    focus2 = true;
  }

  return (
    <TabContainer>
      <div>

        <div className="flex justify-center items-center p-4">
          
          {/* Saved */}
          <div className="w-[35%] text-xs text-center md:w-[200px]" onClick={() => setIndex(0)}>
            <TabButton tab="Saved" focus={focus1} />
          </div>

          {/* Applied */}
          <div className="w-[35%] text-xs text-center md:w-[200px]" onClick={() => setIndex(1)}>
            <TabButton tab="Applied" focus={focus2} />
          </div>

        </div>

      </div>
        
        {/* Scholarship list; applied/saved */}
      <div>{list}</div>
    </TabContainer>
  )
}