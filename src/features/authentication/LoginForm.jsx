import { useState } from "react";
import { useLogin } from "./useLogin";
import { HiOutlineEye, HiOutlineEyeSlash} from "react-icons/hi2"


import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from '../../ui/SpinnerMini'
import ButtonIcon from "../../ui/ButtonIcon";


function LoginForm() {
    const [email, setEmail] = useState("omoshola.codes@gmail.com");
    const [password, setPassword] = useState("adminpassword");
    const [showPassword, setShowPassword] = useState(false)

    const {login, isLoggingIn} = useLogin()

    function handleSubmit(e) {
        e.preventDefault()
        if (!email && !password) return;

        login({email, password}, {
            onSettled: () => {
                setEmail('')
                setPassword('')
            }
        })
    }
    

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address">
                <Input
                    type="email"
                    id="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoggingIn}
                    placeholder="Enter your email address"
                />
            </FormRowVertical>
            <FormRowVertical label="Password">
                    <Input
                        type={showPassword ? 'text' : "password"}
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoggingIn}
                        placeholder="password"
                    />
            </FormRowVertical>
            <ButtonIcon onClick={(e) => {
                    e.preventDefault()
                    setShowPassword(show => !show)
                }}
            >
                <span style={{display: "flex", alignItems: 'center', gap: '5px' }}>{showPassword ? <HiOutlineEye/> : <HiOutlineEyeSlash />} Show password </span>
            </ButtonIcon>
            <FormRowVertical>
                <Button size="large" disabled={isLoggingIn}>
                    {!isLoggingIn ? "Log in" : <SpinnerMini /> }</Button>
            </FormRowVertical>
        </Form>
    );
}

export default LoginForm;
