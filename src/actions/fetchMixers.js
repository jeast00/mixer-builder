import axios from "axios"



export const fetchMixers = () => {
   axios.get("/mixers")
   .then(resp => {
       resp.data.data.map((mixer, mixer_index) => {
           return {
               id: `${mixer_index}`,
               drink_name: mixer.drink_name
           }
       })
       console.log(resp.data.data)
   })
}