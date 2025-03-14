import Summary from "@/components/hotel/details/Summary"
import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"
import { getHotelById } from "@/db";

const HotelDetailsPage = async ({params: {id}, searchParams:{checkin, checkout}}) => {
  const hotelInfo = await getHotelById(id, checkin, checkout);
  return (
    <>
        <Summary hotelInfo={hotelInfo }/>
        <Gallery gallery={hotelInfo?.gallery}/>
        <Overview overview={hotelInfo?.overview}/>
    </>
  )
}

export default HotelDetailsPage