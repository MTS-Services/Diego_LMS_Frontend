import SignUpPassword from '../../../../../components/common/SignUpPassword'

const Password = () => {
  const handlePasswordSubmit = (data) => {
    console.log('Password form data:', data)
  }

  return (
    <div className="">
      <SignUpPassword onSubmitPassword={handlePasswordSubmit} />
    </div>
  )
}

export default Password
