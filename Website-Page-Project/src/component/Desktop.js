import { useMediaQuery } from 'react-responsive';



const Desktop  = ({ children }) => {
    const isDesktop = useMediaQuery({ minDeviceWidth:1025})
    return isDesktop ? children : null
  }
  export default Desktop;