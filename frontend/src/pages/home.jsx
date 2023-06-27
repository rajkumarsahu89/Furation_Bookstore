import React from 'react'
import Products from '../components/products'
import { TopCarousel } from '../components/topCarousel'
import OrderItems from '../components/orderItems'
import { artItems, businessItems, godsdata, horoscopeItems, knowledgeItems} from '../assets/orderItems'
import { motion } from 'framer-motion'
import BgVideo from '../components/bgVideo'

const Home = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <TopCarousel/> */}
      <BgVideo/>
      <OrderItems orderItem={knowledgeItems} title={"General Knowledge"} />
      <OrderItems orderItem={businessItems} title={"Business Study"} />
      <OrderItems orderItem={artItems} title={"Medical Science"} />
      <OrderItems orderItem={godsdata} title={"Mythology"} />
      <OrderItems orderItem={horoscopeItems} title={"Horoscope"} />
      
      
    </motion.div>
  )
}

export default Home
