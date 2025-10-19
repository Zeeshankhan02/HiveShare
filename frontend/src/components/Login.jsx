import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"


function Login() {
  const [inputValues, setInputValues] = useState({
     email: '', password: ''
  })
  const navigate = useNavigate()

  const inputs = [
   {
      name: "email",
      label: "Email",
      type: "email"
    },
    {
      name: "password",
      label: "Password",
      type: "password"
    }
  ]

  function handleChange(e) {
    const { name, value } = e.target
    setInputValues(prev => ({ ...prev, [name]: value }))
  }

  async function handleLogIn(e) {
    e.preventDefault()
    // try {
    //   const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    //     data: inputValues
    //   })


    // } catch (error) {

    // }
    navigate('/dashboard')

  }

  return <>
      <div className="h-screen w-screen flex justify-center bg-gray-50 items-center  absolute -z-10 inset-0
bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
bg-[size:10px_10px]">
      <div className="h-120 w-220  flex justify-center rounded-lg overflow-hidden shadow-xl/20">
        
        <div className="w-[50%] flex items-center justify-center inset-shadow-sm/18 bg-gray-100/40">
        <form  onSubmit={handleLogIn}>
          <div className="flex flex-col gap-y-4">
            {inputs.map((input, idx) => <label key={idx} className="text-2xs font-medium">
              {input.label} <br />
              <input type={input.type} name={input.name} value={inputValues[input.name]} onChange={handleChange} className="border rounded px-2 py-1 w-80 focus:outline-none focus:ring-2 focus:ring-sky-400" autoComplete="off" />
            </label>)}
            <div className="text-sky-600 text-sm">
              <Link to={'/sign-up'}>Create New Account</Link>
            </div>
            <button type="submit" className="bg-sky-600  py-2 rounded-xl w-60 text-lg font-semibold text-white cursor-pointer hover:bg-sky-400 transition-all ">Login</button>
          </div>
        </form>
        
        </div>
        <div className="w-[50%] bg-[url(https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyOG91d29sNjJmNWVpbHlleWpmam01M2sydmRvNXE0Zjh2MHpoOXpuNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EbRPam1A4jEWkUokL8/200w.gif)] bg-center bg-cover  bg-no-repeat">
        </div>
      </div>
    </div>

  </>
}

export default Login