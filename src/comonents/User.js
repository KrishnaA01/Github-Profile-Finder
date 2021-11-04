import React from 'react'

export default function User({userdata}) {
    console.log(userdata);
    return (
        <div className= "user">
            
            <div className="image">
                <img src= {userdata.avatar_url}  width="200" alt="" />
            </div>
            
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name: {userdata.bio} </td>
                            <td>Location:{userdata.location} </td>
                        </tr>
                        <tr>
                            <td>Email: {userdata.email} </td>
                            <td>Followers: {userdata.followers} </td>
                        </tr>
                        <tr>
                            <td>Repositories</td>
                            <td>Repo URL</td>
                        </tr>
                    </tbody>
            
                </table>
            </div>
        </div>
    )
}
