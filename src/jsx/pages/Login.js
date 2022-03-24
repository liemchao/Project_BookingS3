import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth";
import { loadingToggleAction,loginAction}from '../../store/actions/AuthActions';
import { auth } from "../../store/actions/Firebase";

// image
//import logo from "../../images/logo-full.png";
import loginbg from "../../images/pic1.png";


function Login (props) {
	const [email, setLoginEmail] = useState("");
//   const [email, setEmail] = useState('demo@example.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    // const [password, setPassword] = useState('123456');
	const [password, setLoginPassword] = useState("");
	
	const login = async () => {
		try {
		  const user = await signInWithEmailAndPassword(
			auth,
			email,
			password
		  );
		  console.log(user);
		} catch (error) {
		  console.log(error.message);
		}
	  };

    const dispatch = useDispatch();

    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(email, password, props.history));
    }

  return (
		<div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
			<div className="login-aside text-center  d-flex flex-column flex-row-auto">
				<div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
					<div className="text-center mb-4 pt-5">
					<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
							width="120.000000pt" height="120.000000pt" viewBox="0 0 1200.000000 1200.000000"
							preserveAspectRatio="xMidYMid meet">

							<g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
								fill="#000000" stroke="none">
								<path d="M4596 9683 c71 -233 120 -492 164 -863 39 -325 54 -419 89 -555 108
-413 361 -686 871 -939 160 -80 427 -193 435 -184 5 5 -37 219 -64 324 -54
211 -167 479 -282 671 -29 49 -97 155 -151 236 -116 174 -106 177 58 13 210
-211 378 -454 560 -813 51 -100 95 -179 98 -176 13 13 6 441 -9 563 -43 342
-141 619 -309 865 -86 127 -246 284 -380 373 -164 110 -950 497 -1068 527
l-27 7 15 -49z"/>
								<path d="M8325 8723 c-251 -31 -697 -113 -815 -149 -258 -79 -483 -245 -649
-479 -67 -96 -181 -321 -225 -445 -25 -74 -88 -302 -83 -306 1 -1 45 45 97
103 162 179 397 377 577 485 85 51 193 102 192 90 0 -4 -33 -33 -73 -65 -164
-130 -345 -312 -447 -447 -62 -82 -159 -240 -208 -337 l-31 -63 38 0 c63 0
280 29 407 55 275 56 479 148 629 286 126 115 217 268 356 594 123 289 199
438 347 678 4 7 -55 7 -112 0z"/>
								<path d="M3745 8530 c42 -228 195 -604 355 -870 370 -617 946 -1098 1685
-1409 407 -172 693 -341 950 -562 401 -345 664 -780 747 -1238 28 -152 31
-467 5 -611 -68 -393 -260 -762 -557 -1074 -153 -160 -351 -320 -528 -429 -45
-27 -81 -52 -79 -54 8 -7 152 48 249 95 230 112 448 272 669 492 281 279 484
570 623 892 143 330 200 591 200 923 0 355 -71 650 -234 976 -250 497 -590
818 -1163 1094 -215 103 -386 172 -792 318 -176 63 -385 140 -465 170 -822
312 -1276 658 -1618 1232 -43 73 -52 83 -47 55z"/>
								<path d="M3675 7413 c-23 -126 -32 -451 -15 -595 26 -233 69 -372 212 -695 87
-193 93 -213 93 -273 0 -106 -72 -252 -269 -550 -133 -201 -138 -211 -139
-284 -1 -117 65 -193 212 -246 96 -35 192 -60 234 -60 15 0 27 -2 27 -4 0 -2
-16 -30 -35 -61 -40 -66 -50 -107 -42 -171 6 -56 44 -99 121 -138 l53 -27 -13
-37 c-41 -115 19 -213 161 -263 30 -10 61 -19 69 -19 10 0 17 -14 21 -37 16
-102 57 -259 82 -311 15 -31 53 -83 84 -114 45 -45 67 -60 115 -74 197 -57
565 59 984 311 252 152 401 203 625 212 108 4 147 1 234 -17 188 -38 356 -120
505 -245 65 -54 68 -56 40 -20 -54 69 -196 198 -269 246 -382 252 -795 235
-1240 -51 -243 -156 -593 -290 -761 -290 -71 0 -76 2 -113 35 -21 20 -49 56
-60 81 -27 57 -59 191 -71 296 -11 92 -25 115 -79 123 -136 22 -181 46 -181
96 0 47 17 69 73 94 l52 23 -105 32 c-111 34 -170 76 -170 119 0 12 18 56 40
97 63 118 52 181 -37 227 -16 9 -91 34 -168 57 -164 49 -207 69 -223 105 -16
36 -9 55 53 145 82 118 204 326 256 435 67 145 92 228 93 310 1 64 -4 81 -56
200 -131 302 -161 375 -199 483 -81 235 -137 521 -159 811 -5 74 -11 136 -13
138 -2 2 -12 -41 -22 -94z"/>
								<path d="M4796 6049 c-89 -75 -151 -99 -259 -99 -45 0 -98 4 -118 9 -34 8 -36
7 -48 -25 -16 -43 -94 -130 -140 -154 l-36 -19 31 -1 c43 0 125 44 152 82 16
24 22 28 22 15 0 -10 -22 -40 -50 -67 l-49 -50 33 0 c48 0 116 39 137 80 13
24 19 29 19 16 0 -11 -11 -34 -26 -53 -20 -27 -22 -33 -9 -33 34 0 88 34 112
72 14 21 27 38 29 38 6 0 -16 -53 -28 -67 -16 -20 -7 -23 28 -8 37 15 78 66
93 115 l11 35 -4 -40 c-2 -22 -7 -49 -12 -59 -11 -29 14 -10 37 28 15 24 19
27 19 12 0 -18 3 -17 29 8 16 15 40 49 54 74 24 45 54 139 46 146 -2 2 -35
-23 -73 -55z"/>
								<defs>
									<clipPath id="clip0">
										<rect className="rect-primary-rect" width="80" height="80" rx="16" fill="white" />
									</clipPath>
								</defs>
							</g>
						</svg>
						<svg className="brand-title" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="252.000000pt" height="80.000000pt" viewBox="0 0 252.000000 80.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M160 704 c0 -4 8 -13 18 -20 15 -11 17 -37 20 -238 l3 -226 70 0 c79
0 131 18 152 52 40 62 27 156 -25 188 -27 16 -29 20 -15 26 25 9 47 57 47 101
0 90 -50 123 -182 123 -49 0 -88 -3 -88 -6z m176 -48 c24 -20 28 -31 28 -74 0
-63 -22 -92 -71 -92 l-33 0 0 88 c0 49 3 92 7 95 13 14 42 6 69 -17z m23 -232
c26 -32 28 -100 5 -132 -19 -28 -59 -45 -85 -37 -17 6 -19 17 -19 101 l0 94
39 0 c31 0 44 -6 60 -26z"/>
<path d="M1000 704 c0 -4 8 -13 18 -20 15 -11 17 -37 20 -238 l3 -226 29 0
c29 0 29 0 32 67 l3 68 32 -62 c33 -63 55 -83 92 -83 24 0 27 12 8 29 -7 6
-32 50 -56 99 l-42 88 27 50 c15 27 38 59 53 71 24 22 25 23 5 23 -27 0 -47
-23 -89 -101 l-35 -64 -1 125 c-1 166 -4 174 -57 178 -23 2 -42 0 -42 -4z"/>
<path d="M1297 703 c-13 -12 -7 -71 8 -83 19 -16 45 3 45 32 0 41 -32 72 -53
51z"/>
<path d="M2192 698 c-7 -7 -12 -32 -11 -57 1 -43 1 -44 10 -16 5 16 16 36 26
42 17 13 105 18 116 7 3 -3 -24 -46 -59 -96 -36 -49 -63 -95 -61 -101 2 -7 20
-10 45 -9 37 3 42 0 56 -27 20 -38 21 -133 1 -171 -21 -40 -70 -41 -110 -4
-15 14 -30 23 -33 19 -12 -12 37 -61 77 -75 39 -14 45 -13 79 5 113 61 88 282
-33 289 -14 0 -25 4 -25 8 0 4 25 42 55 84 78 108 76 114 -33 114 -55 0 -92
-4 -100 -12z"/>
<path d="M535 537 c-42 -42 -60 -118 -45 -195 12 -64 22 -84 56 -111 94 -74
196 61 164 216 -15 72 -61 123 -110 123 -23 0 -41 -9 -65 -33z m91 -18 c15
-17 20 -39 22 -118 3 -110 -9 -146 -48 -146 -39 0 -51 36 -48 146 2 79 7 101
22 118 11 12 22 21 26 21 4 0 15 -9 26 -21z"/>
<path d="M811 545 c-36 -31 -54 -82 -54 -155 0 -104 37 -165 106 -177 32 -5
41 -1 71 29 75 75 70 244 -10 307 -36 28 -76 26 -113 -4z m85 -26 c15 -17 20
-39 22 -118 3 -105 -9 -144 -44 -149 -39 -6 -49 23 -49 138 0 92 3 111 19 129
24 26 28 26 52 0z"/>
<path d="M1268 553 c21 -15 22 -21 22 -174 l0 -159 30 0 30 0 0 163 c0 113 -4
167 -12 175 -7 7 -30 12 -52 11 -40 0 -41 0 -18 -16z"/>
<path d="M1390 561 c0 -5 7 -11 15 -15 12 -4 15 -35 17 -163 l3 -158 28 -3 27
-3 0 151 0 150 25 12 c22 10 29 9 48 -10 20 -21 22 -34 25 -162 l4 -140 29 0
29 0 0 118 c-1 136 -11 190 -41 215 -26 21 -77 22 -106 2 -18 -13 -22 -13 -33
0 -13 16 -70 21 -70 6z"/>
<path d="M1719 541 c-24 -24 -29 -38 -29 -76 0 -25 8 -60 17 -78 26 -49 23
-107 -7 -140 -34 -39 -34 -108 1 -143 33 -33 104 -42 151 -20 40 19 58 51 58
104 0 65 -39 102 -120 112 -50 6 -64 33 -20 38 56 5 97 23 108 44 22 46 23 82
2 123 -24 47 -24 45 -5 45 8 0 15 5 15 10 0 6 -30 10 -71 10 -65 0 -73 -2
-100 -29z m93 -18 c21 -19 26 -111 6 -131 -18 -18 -46 -14 -58 7 -15 29 -12
93 6 119 18 26 22 27 46 5z m-1 -263 c13 0 39 -55 39 -82 0 -58 -75 -95 -100
-49 -27 51 0 151 38 136 7 -3 18 -5 23 -5z"/>
<path d="M1978 551 c-61 -49 -44 -137 36 -187 69 -43 79 -106 18 -112 -40 -4
-59 10 -67 50 -4 18 -11 26 -16 21 -6 -6 -6 -26 -1 -49 21 -101 182 -73 182
32 0 49 -12 68 -75 114 -59 43 -70 74 -39 104 29 30 60 16 84 -38 l19 -41 0
41 c1 55 -16 75 -70 81 -35 4 -50 1 -71 -16z"/>
</g>
</svg>
					</div>
					<h3 className="mb-2">Welcome to my team website</h3>
					<p>SWD391 & Interface Design <br />This Solutions</p>
				</div>
				<div className="aside-image" style={{backgroundImage:"url(" + loginbg + ")"}}></div>
			</div>
			<div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
				<div className="d-flex justify-content-center h-100 align-items-center">
					<div className="authincation-content style-2">
						<div className="row no-gutters">
							<div className="col-xl-12 tab-content">
								<div id="sign-in" className="auth-form   form-validation">
									{props.errorMessage && (
										<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
											{props.errorMessage}
										</div>
									)}
									{props.successMessage && (
										<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
											{props.successMessage}
										</div>
									)}
									<form onSubmit={onLogin}  className="form-validate">
										<h3 className="text-center mb-4 text-black">Sign In Admin Account</h3>
										<div className="form-group mb-3">
											<label className="mb-1"  htmlFor="val-email"><strong>Email</strong></label>
											<div>
												<input type="email" className="form-control"
													value={email}
												   onChange={(e) => setLoginEmail(e.target.value)}
												   placeholder="Type Your Email Address"
												/>
											</div>
											{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
										</div>
										<div className="form-group mb-3">
											<label className="mb-1"><strong>Password</strong></label>
											<input
											  type="password"
											  className="form-control"
											  value={password}
											  placeholder="Type Your Password"
												onChange={(e) =>
													setLoginPassword(e.target.value)
												}
											/>
											{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
										</div>
										<div className="form-row d-flex justify-content-between mt-4 mb-2">
											<div className="form-group mb-3">
											   <div className="custom-control custom-checkbox ml-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
												</div>
											</div>
										</div>
										<div className="text-center form-group mb-3">
											<button onClick={login} className="btn btn-primary btn-block">
												Sign In
											</button>
										</div>
									</form>
									<div className="new-account mt-3">
										{/* <p>Don't have an account? <Link className="text-primary" to="./page-register">Sign up</Link></p> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
		
  );
};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);
