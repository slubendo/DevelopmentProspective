import { createOrUpdateFormResultForUser } from "../action";

//this only exists to test out the createOrUpdateFormResultForUserFunction

export default async function TestPage() {

    const test = `[
        {
          "title": "FakeGates",
          "content": "The Gates Millennium Scholars Program, established in 1999, supports outstanding minority students to complete an undergraduate college education in any discipline of interest.",
          "provider": "Bill & Melinda Gates Foundation",
          "award": "Full",
          "deadline": "2022/09/15",
          "href": "https://www.gmsp.org/",
          "src": "https://upload.wikimedia.org/wikipedia/commons/0/0c/BillMelindaGatesFoundation.svg",
          "alt": "GMS Logo",
          "details": "/scholarship/1"
        },
        {
          "title": "Coke Pro",
          "content": "The Coca-Cola Scholars Program is an achievement-based scholarship awarded to graduating high school seniors each year. Students are recognized for their capacity to lead and serve.",
          "provider": "Coca-Cola Scholars Foundation",
          "award": "20,000",
          "deadline": "2022/10/31",
          "href": "https://www.coca-colascholarsfoundation.org/",
          "src": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Coca_Cola_ad_ca._1943_IMG_3744.JPG",
          "alt": "Coca-Cola Scholars Logo",
          "details": "/scholarship/2"
        }]
    `

    await createOrUpdateFormResultForUser(test);

    return (
        <div>
            See?
        </div>
    )
}