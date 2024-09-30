// import { toast } from 'react-toastify'

// import 'react-toastify/dist/ReactToastify.css'

// const ToasterStyle = { direction: 'rtl', fontFamily: 'Open Sans Hebrew Condensed' }
// const ToasterSettings = {
//   position: 'bottom-right',
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   style: ToasterStyle,
//   theme: 'dark'

// }

// export const TopBarStyle = {
//   position: 'fixed',
//   top: 0,
//   left: 0
// }

// export const succesToaster = (text) => toast.success(text, ToasterSettings)
// export const infoToaster = (text) => toast.info(text, ToasterSettings)
// export const errorToaster = (text) => toast.error(text, ToasterSettings)

import { toast } from 'react-toastify';

export const succesToaster = (name) =>{
  toast(` Hello ${name} :) `)
}
export const infoToaster = () =>{
  toast.info('Cannot find this user please try again', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: 'Bounce',
    });
}
export const errorToaster = () =>{
  toast('Server Error')
}
