import "./user.css";
import {MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons";
import {Link} from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Jon Snow</span>
                            <span className="userShowUserTitle">Psychologist</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle"> Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Jon</span>
                        </div>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Snow</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">Jon@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+254 712 345 678</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>First Name</label>
                                <input type="text" placeholder="Jon" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Last Name</label>
                                <input type="text" placeholder="Snow" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder="jon@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number </label>
                                <input type="text" placeholder="+254 712 345 678" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
