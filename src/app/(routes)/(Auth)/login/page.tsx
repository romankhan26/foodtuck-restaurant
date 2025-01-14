import HeaderSection from '@/components/GeneralComponents/HeaderSection'
import HeaderTwo from '@/components/Header/HeaderGeneral'
import LoginLayout from '@/components/Auth/Login'
const Login = () => {

  return (<>
      <HeaderTwo/>
            <HeaderSection text='Log In ' textHeading='Log In Page'/>
    <div className='px-[12vw] py-20'>
<LoginLayout/>
    </div></>
  )
}

export default Login