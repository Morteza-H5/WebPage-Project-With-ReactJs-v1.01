import {useMediaQuery} from 'react-responsive';


 const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxDeviceWidth:767 })
    return isMobile ? children : null
  }

  export default Mobile;
