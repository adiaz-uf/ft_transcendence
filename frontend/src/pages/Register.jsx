import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import api from "../api";
import '../styles/login.css'
import { useNavigate } from "react-router-dom";

/* handleSubmit, ...props} */
export default function Register({route}) {

	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

	 const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

		try {
			const res = await api.post(route, { username, password })
			navigate("/login")
		}
		catch (error) {
			alert(error)
		} 
		finally {
			setLoading(false)
		}
	 }
    return (
		<div className='login-container'>
			<h1 className='header'>Register Page</h1>
		<div className='login-wrapper'>
			<div className='register-form-container'>
			<Form onSubmit={handleSubmit}>
                
                <Form.Group id='email' className='mb-3'>
                <Form.Label className="text-label">Email address</Form.Label>
					<Form.Control
						type='text'
						//value={props.email}
						name='email'
						placeholder='email@email.com'
						//onChange={propTypes.handleemailChange}
					/>
                    <Form.Label className="text-muted-email">
                        We'll never share your email with anyone else.
                    </Form.Label>
				</Form.Group>
                <div className='register-register-container'>
				<Form.Group id='username' className='mb-3 w-100'>
                <Form.Label className="text-label">Enter Username</Form.Label>
					<Form.Control
						type='text'
						value={username}
						name='Username'
						placeholder='Username'
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>
                
                <Form.Group id='name' className='mb-3 w-100'>
                <Form.Label className="text-label">Enter Your Name</Form.Label>
					<Form.Control
						type='text'
						//value={props.name}
						name='name'
						placeholder='Name'
						//onChange={propTypes.handlenameChange}
					/>
				</Form.Group>
                </div>
                <div className='register-register-container'>
				<Form.Group id='newpassword' className='mb-3 w-100'>
                <Form.Label className="text-label">New Password</Form.Label>
					<Form.Control
						type='text'
						value={password}
						name='NewPassword'
						placeholder='New Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

                <Form.Group id='repeatpassword' className='mb-3 w-100'>
                <Form.Label className="text-label">Repeat Password</Form.Label>
					<Form.Control
						type='text'
						//value={props.password}
						name='RepeatPassword'
						placeholder='Repeat Password'
						//onChange={propTypes.handlePasswordChange}
					/>
				</Form.Group>
                </div>
				<Button id='form-login-button' className='mt-2 w-100' type='submit'>
					Register
				</Button>
			</Form>
			</div>
		</div>
		</div>
    );
}