import "./ProfileNav.css";
import { useUser } from "@/services/userDataFetch";
function ProfileNav() {


    const {userData} = useUser();

    return (
        <div className="profile-nav">
            <div className="profile-main">
                <sl-avatar src={userData.profile_pic_url} label="Profile picture"></sl-avatar>

                <div className="profile-info">
                    <p className="side-text">Email</p>
                    <p className="side-text">Name</p>
                    <p className="side-text">Rating</p>
                </div>
            </div>

                <div className="profile-stats">
                    <p>Total Bundles:</p>
                    <p>Total Showcases:</p>
                    <p>Favorite art type:</p>
                    <p>Last Active:</p>
                </div>

                <div className="profile-contacts">
                    <a href="#">Github</a>
                    <a href="#">Whatsapp</a>
                    <a href="#">Instagram</a>
                </div>

        </div>
    )

}

export default ProfileNav;