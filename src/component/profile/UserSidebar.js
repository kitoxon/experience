import { Link } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import RoundedButton from '../../component/buttons/general/RoundedButton'
import './css/UserSidebar.css'
import {useDropzone} from 'react-dropzone'
import awsExports from "../../aws-exports"
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { createFile } from '../../graphql/mutations'
import { updateUserDetail } from '../../graphql-custom/mutations/users';
import { generateFileUrl } from '../../Utility/Util';
import { useState, useEffect } from 'react'
import { getPostByUser, getUserDetail } from '../../graphql-custom/queries';

/**
 * User profile sidebar, expands to width of container.
 */

function UserSidebar(props) {
    const {user, setUser} = useUser();
    const [followers, setFollowers] = useState([])
    const [userPosts, setUserPosts] = useState([])
    const [profileloading, setProfileLoading] = useState(false)
    const {getRootProps, getInputProps, open} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        multiple: false,
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            for (let file of acceptedFiles) {
                handleUpload(file)
            }
        }
      });
    
    async function doFile(file){
        let ext = file.name.substring(file.name.lastIndexOf('.') + 1);
        let name = file.name.replace("." + ext, '');
        let input = {
            input: {
                bucket: awsExports.aws_user_files_s3_bucket,
                region: awsExports.aws_user_files_s3_bucket_region,
                level: 'public',
                name: name,
                ext: ext,
                key: file.name
                // url: bucket.s3.region.amazonaws.com/level/id.ext
            }
        }
        try {
            let resp = await API.graphql(graphqlOperation(createFile, input))
            let fileKey = resp.data.createFile.id +"."+ resp.data.createFile.ext
            await Storage.put(fileKey, file)
            return resp.data.createFile.id
        } catch (e) {
            throw e;
        }
    }
    async function handleUpload(file){
        try{
            setProfileLoading(true)
            let fileId = await doFile(file)
            const usr = await API.graphql(graphqlOperation(updateUserDetail, {input: {id: user.userdetail.id, pic_id: fileId}}))
            setUser({...user, userdetail: usr.data.updateUserDetail})
        }catch(ex){
            console.log('UserSideBar-handleUpload', ex)
        }finally{
            setProfileLoading(false)
        }
    }

    async function fetchUser() {
        try{
            let respPosts = await API.graphql(graphqlOperation(getUserDetail, {id: user.userdetail.id}))
            setFollowers(respPosts.data.getUserDetail.followers.items)
        }catch(ex){
            console.log('UserSideBar-ferchUserFollowers', ex)
        }
    }
    async function ferchUserPosts() {
        try{
            let respPosts = await API.graphql(graphqlOperation(getPostByUser, {user_id: user.userdetail.id, filter: {status: {eq: 'CONFIRMED'}, type: {eq: 'PARENT'}}}))
            setUserPosts(respPosts.data.getPostByUser.items)
        }catch(ex){
            console.log('UserProfile-ferchGroupPosts', ex)
        }
    }
    useEffect(() => {
        fetchUser()
        ferchUserPosts()
         // eslint-disable-next-line
    }, [])
    return (
        (user && user.userdetail) ? 
            <div className="UserSidebar-wrapper">
                <div className="UserSidebar-main-content">
                    <div className="UserSidebar-image-wrapper" >
                        <img src={generateFileUrl(user.userdetail.pic)} alt="profile img" style={profileloading ? {opacity: 0.5} : {}}></img>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            {profileloading ?
                                <div class="loader"></div>:
                                <i className="far fa-image" onClick={open}></i>
                            }     
                        </div>
                    </div>
                    <Link className="cog-wrapper" to="/profile/userconfig"><i className="fas fa-cog"></i></Link>
                    <h3 className="fullname">{user.userdetail.firstname.toUpperCase()}</h3>
                    {/* <p className="handle">{"@" + handle}</p> */}
                    <p className="bio">
                        {user.userdetail.about}
                    </p>
                    <div className="User-statistics-wrapper">
                        <div className="User-statistic">
                            <h3>{user.userdetail.aura === null ? 0 : user.userdetail.aura}</h3>
                            <p>Аура</p>
                        </div>
                        <div className="User-statistic">
                            <h3>{followers.length}</h3>
                            <p>Дагагчид</p>
                        </div>
                        <div className="User-statistic">
                            <h3>{userPosts.length}</h3>
                            <p>Пост</p>
                        </div>
                    </div>
                    <div className="User-social-wrapper">
                        <div>
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </div>
                        <div>
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div>
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </div>
                    </div>
                    <Link className="link-button" to="/profile/statistic">
                        <RoundedButton content="Статистик"/>
                    </Link>
                    <Link className="link-button" to="/profile/userconfig">
                        <RoundedButton content="Тохиргоо"/>
                    </Link>
                    <RoundedButton content="Хэрэглэгч урих"/>
                </div>
            </div> : null
    );
}

export default UserSidebar;