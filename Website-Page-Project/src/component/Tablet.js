import { useMediaQuery } from 'react-responsive';


const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({minDeviceWidth:768,maxDeviceWidth:1024})
    return isTablet ? children : null
  }
  export default Tablet;