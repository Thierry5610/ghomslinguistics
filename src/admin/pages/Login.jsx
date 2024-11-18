import { Alert, InputContainer, InputElement } from "../components/Atoms";
import logo from '../../../public/images/logo/cropped-GhomLinguisticsLogo_small.png'
import useValidation from "../utils/useValidation";
import { useState } from "react";
import { login } from "../../SupabaseServices";
import { useNavigate } from "react-router";

export default function Login() {
    const {errors,validateEmail,validateEmpty,clearError} = useValidation()
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })
    const [error,setError] = useState(null)
    const [showErrorModal,setShowErrorModal] = useState(false)
    const handleSubmit = async (e) => {
        //console.log(formData)
        e.preventDefault();
        // Run validations
        const isFormValid = [
            validateEmpty('password', formData.password),
            validateEmail('email', formData.email),
          ].every(Boolean);
    
        if (isFormValid) {
            const newUser = {...formData}
            console.log(newUser)
            const {data,error} = await login(newUser.email,newUser.password)
            if(error) {
                setError(error)
                setShowErrorModal(true)
                console.log(error)
            }else {
                console.log("user",data)
                navigate('/admin/dashboard')
            }

        }
    };    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
    
        // Clear error when user starts typing
        if (errors[name]) clearError(name);
      };
    return(
        <>
            {error&&showErrorModal&&<Alert type={"error"} heading={"Login Error"} text={error.message} setShow={setShowErrorModal}/>}
            <div className="bg-white inset-0 fixed overflow-y-auto z-40 flex items-center justify-center">
                <div className="flex flex-col gap-6 items-center max-w-screen-xl md:max-w-[70%] w-full p-8">
                    <img src={logo} alt="logo" className="h-32 w-auto"/>
                    <div className="space-y-4 self-stretch">
                        <InputContainer inputName="email" label={"Email"}>
                            <InputElement inputName="email" value={formData.email} type={"email"} onChange={handleChange} error={errors.email}/>
                        </InputContainer>  
                        <InputContainer inputName="password" label={"Password"}>
                            <InputElement inputName="password" value={formData.password} type={"password"} onChange={handleChange} error={errors.password}/>
                        </InputContainer>
                        <button onClick={handleSubmit} className="bg-sky-500 text-white hover:bg-sky-600 p-2 w-full rounded-md">
                            Login
                        </button>
                    </div>
                </div>
            </div>        
        </>
    )
}