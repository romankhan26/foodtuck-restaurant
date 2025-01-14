import HeaderSection from '@/components/GeneralComponents/HeaderSection'
import HeaderTwo from '@/components/Header/HeaderGeneral'
import SignUpLayout from '@/components/Auth/SignUp'
const SignUp = () => {

  return (<>
      <HeaderTwo/>
            <HeaderSection text='sign up' textHeading='Sign Up Page'/>
    <div className='px-[12vw] py-20'>
<SignUpLayout/>
    </div></>
  )
}

export default SignUp