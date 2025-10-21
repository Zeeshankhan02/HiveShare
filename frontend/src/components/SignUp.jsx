import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

function SignUp() {
  const [inputValues, setInputValues] = useState({
    fullName: '', email: '', password: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setInputValues(prev => ({ ...prev, [name]: value }))
  }

  async function handleSignUp() {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
        data: inputValues
      })


    } catch (error) {

    }

  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputValues);



  }

  const inputs = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text"
    }, {
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
  return <>
    <div className="h-screen w-screen flex justify-center bg-gray-50 items-center absolute -z-10 inset-0
      bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
      bg-[size:10px_10px]">
      <div className="flex justify-center rounded-xl overflow-hidden shadow-xl/20  h-120 w-220 ">
        <div className="w-[70%] bg-[url(https://img.freepik.com/free-vector/organic-flat-join-us-concept_23-2148948675.jpg?semt=ais_hybrid&w=740&q=80)]  bg-cover bg-center bg-no-repeat">
        </div>
        <div className="w-[50%] flex items-center justify-center inset-shadow-sm/18 bg-gray-100/40 ">
          <div className="backdrop-blur-none">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
              {inputs.map((input, idx) => (
                <label key={idx} className="text-2xs font-medium">
                  {input.label} <br />
                  <input
                    type={input.type}
                    name={input.name}
                    value={inputValues[input.name]}
                    onChange={handleChange}
                    className="border rounded-md px-2 py-1.5 w-80 focus:outline-none focus:ring-1 focus:ring-sky-400 hover:outline-1"
                    autoComplete="off"
                  />
                </label>
              ))}
              <div className="text-sky-600">
                <Link to="/login">Already have an acc?</Link>
              </div>
              <button
                type="submit"
                className="bg-sky-600  py-2 rounded-lg w-60 text-lg font-semibold text-white cursor-pointer hover:bg-sky-500 transition-all"
              >
                Sign Up
              </button>
            </div>
          </form>
          </div>
        </div>

      </div>
    </div>

  </>
}

export default SignUp