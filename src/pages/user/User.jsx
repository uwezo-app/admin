import "./user.css";

import React from "react";
import {
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { Link, useParams } from "react-router-dom";

export default function User() {
	const [psychologist, setPsychologist] = React.useState(null);
	const { userId } = useParams();

	React.useEffect(() => {
		const func = async () => {
			let response = await fetch(
				`http://localhost:8000/psychologists/profile/${userId}`,
				{
					method: "GET",
					mode: "no-cors",
					headers: {
						Accept: "application/json",
					},
				}
			);

			if (response.ok && response.status === 200) {
				const res = await response.json();
				setPsychologist(res);
			} else {
				console.log(response.statusText);
			}
		};

		func();
	}, [userId]);

	const defaultImage =
		"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg";

	return (
		<div className="user">
			{!psychologist ? (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CircularProgress style={{ color: green[500] }} />
				</div>
			) : (
				<div>
					<div className="userTitleContainer">
						<h1 className="userTitle">Edit User</h1>
						<Link to="/newUser">
							<button className="userAddButton">Create</button>
						</Link>
					</div>
					<div className="userContainer">
						<div className="userShow">
							<div className="userShowTop">
								<img
									src={psychologist.Profile.Image || defaultImage}
									alt="Psychologist Profile"
									className="userShowImg"
								/>
								<div className="userShowTopTitle">
									<span className="userShowUserName">
										{psychologist.FirstName + psychologist.LastName}
									</span>
									<span className="userShowUserTitle">Psychologist</span>
								</div>
							</div>
							<div className="userShowBottom">
								<span className="userShowTitle"> Account Details</span>
								<div className="userShowInfo">
									<PermIdentity className="userShowIcon" />
									<span className="userShowInfoTitle">
										{psychologist.FirstName}
									</span>
								</div>
								<div className="userShowInfo">
									<PermIdentity className="userShowIcon" />
									<span className="userShowInfoTitle">
										{psychologist.LastName}
									</span>
								</div>
								<span className="userShowTitle">Contact Details</span>
								<div className="userShowInfo">
									<MailOutline className="userShowIcon" />
									<span className="userShowInfoTitle">
										{psychologist.Email}
									</span>
								</div>
								<div className="userShowInfo">
									<PhoneAndroid className="userShowIcon" />
									<span className="userShowInfoTitle">
										{psychologist.Phone}
									</span>
								</div>
							</div>
						</div>
						<div className="userUpdate">
							<span className="userUpdateTitle">Edit</span>
							<form action="" className="userUpdateForm">
								<div className="userUpdateLeft">
									<div className="userUpdateItem">
										<label>First Name</label>
										<input
											type="text"
											placeholder={psychologist.FirstName}
											className="userUpdateInput"
										/>
									</div>
									<div className="userUpdateItem">
										<label>Last Name</label>
										<input
											type="text"
											placeholder={psychologist.LasttName}
											className="userUpdateInput"
										/>
									</div>
									<div className="userUpdateItem">
										<label>Email</label>
										<input
											type="email"
											placeholder={psychologist.Email}
											className="userUpdateInput"
										/>
									</div>
									<div className="userUpdateItem">
										<label>Phone Number </label>
										<input
											type="text"
											placeholder={psychologist.Phone}
											className="userUpdateInput"
										/>
									</div>
								</div>
								<div className="userUpdateRight">
									<div className="userUpdateUpload">
										<img
											src={psychologist.Profile.Image || defaultImage}
											alt="Psychologist Profile"
											className="userUpdateImg"
										/>
										<label htmlFor="file">
											<Publish />
										</label>
										<input type="file" id="file" style={{ display: "none" }} />
									</div>
									<button className="userUpdateButton">Update</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
