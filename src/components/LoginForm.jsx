import { useState } from 'react'
import '../styles/LoginForm.css' //lidhim stilizimin e formes
import { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

function LoginForm() {


const { data, isPending, error } = useFetch("https://64ea744cbf99bdcc8e679258.mockapi.io/sda/loginn");


    /*useState eshte nje funksion/state/bariabel qe perdoret per ruajtjen e te
    dhenave. Elementi i pare eshte emri i variablit. Elementi i dyte eshte Seteri dhe vetem ai si
    funksion ka te drejte te ndyshoj vleren e variablit. Ky eshte nje rregull strikt*/
    // const [email, setEmail] = useState('Initial Email')
    // const [password, setPassword] = useState('Initial Password')

    const [formData, setFormData] = useState({
        email: 'email1',
        password: 'password1'
    })


    /*useEffect pret nje funksion anonim dhe nje array qe eshte opsional.Array bosh i tregon useEffect se kur duhet te ekzekutohet, pra i jep disa kushte. Array bosh, i cili njihet dhe si
    dependency array, i thot useEffect qe te ekzekutohet vetem nje here, ne momentin kur React e fut ne DOM. useState eshte nje funksion
    me kthim vlere kurse useEffect eshte funksion procedurial. useEffect verifikon fetched data. Ky React hook nuk mund te perdoret
     si nested function*/

     useEffect(()=>{

        console.log('data is: ', data);
        console.log('isPending is: ', isPending);
        console.log('error is: ', error);

    }, [data, isPending, error])

    //useEffect(() => {
     //   console.log('State ndryshoi')
    //}, [formData.email, formData.password])

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        let value = event.target.value //merret vlera
        let inputName = event.target.name //merret input

        if (inputName === 'email') setFormData({ ...formData, email: value }) /*ne kete pike states fshijnenjera tjetren dhe duhet bere kopje e te dhenave duke perdorur ...formData*/
        else if (inputName === 'password') setFormData({ ...formData, password: value })
    }

    //sa here ndyshohet vlera ndodh eventi onChange
    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <h3>Login to HR Platform</h3>

                Email: {formData.email}
                <br />
                Password: {formData.password}
                <fieldset className="form-control">
                    <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email..." />
                </fieldset>

                <fieldset className="form-control">
                    <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password" />
                </fieldset>
                <div className='error'>Incorrect login credentials</div>
                <input type="submit" value="Login to Platform" />

            </form>
        </div>)
}
export default LoginForm