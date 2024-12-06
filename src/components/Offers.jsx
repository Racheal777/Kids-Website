import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import K from "../constants"

const Offers = () => {
  return (
    <div className="grid grid-cols-3 gap-12 w-3/5 mx-auto my-24">
      {
        K.OFFERS.map((offer, index)  => {
            console.log(`${index}: ${offer.title}`)

                return (
                <div key={index} className="flex flex-col gap-y-4" >
                    <span className="p-3 bg-slate-600 w-fit text-white text-2xl rounded-full">
                        <FontAwesomeIcon icon={offer.icon}></FontAwesomeIcon>
                    </span>
                    <h3 className="text-2xl font-semibold">{offer.title}</h3>
                    <p>{offer.desc}</p>
                </div>
            )
           
        })
      }
    </div>
  )
}

export default Offers
