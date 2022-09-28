import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import userToken from '../utils/userService'

const LoginTest = ({handleSignupOrLogin}) => {
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await userToken.login(formData)
            handleSignupOrLogin()
            navigate('/')
        }
        catch (err) {
            alert('Invalid Credentials')
        }
    }

    return (
        <div onSubmit={handleSubmit} className="min-h-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <title>Sign In!</title>
        <div className="max-w-md w-full space-y-8">
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="name" className="sr-only">
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block
                        w-full px-3 py-2 border border-gray-300
                        placeholder-gray-500 text-gray-900 rounded-t-md
                        focus:outline-none focus:ring-green-700
                        focus:border-green-700 focus:z-10 sm:text-sm"
                        placeholder="Username"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="appearance-none rounded-none relative block
                            w-full px-3 py-2 border border-gray-300
                            placeholder-gray-500 text-gray-900 rounded-b-md
                            focus:outline-none focus:ring-green-700
                            focus:border-green-700 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                        Sign
                    </button>    
                </div>
            </form>
        </div>
    </div>
    )
}

export default LoginTest