const { default: axios } = require("axios");

const Api_Key = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${Api_Key}`,
  },
});

export const getCategory = axiosClient.get("categories?populate=*");
export const getDoctor = axiosClient.get("/doctors?populate=*");
export const getDoctorByCategory = (category) =>
  axiosClient.get(
    "/doctors?filters[categories][Name][$in]="+category+"&populate=*"
  );

export const getDoctorById =(id)=> axiosClient.get(
  "/doctors/"+id+"?populate=*"
)

export const bookAppointment = (data)=> axiosClient.post("/appointments",data)


export const getUserBookingList=(userEmail)=>axiosClient.get("/appointments?[filters][Email][$eq]="+userEmail+"&populate[doctor][populate][image][populate][0]=url&populate=*")


export const deleteBooking=(id)=>axiosClient.delete('/appointments/'+id)

export const sendEmail=(data)=>axios.post('/api/sendEmail',data);


