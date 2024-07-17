import { useEffect } from 'react';

function ProfileCard(props) {

    return (
        <>
            <div>
                <div className="profile-container">
                    {
                        props.userdata.map((item, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <img src={item.img} alt="person" />
                                        <h5>{item.name}</h5>
                                        <h6>{item.place}</h6>
                                        <p>{item.role}</p>
                                        <button>Message</button>
                                        <button>Follow </button>
                                        <ul>
                                            <li>HTML</li>
                                            <li>Css</li>
                                            <li>UI/UX</li>
                                            <li>React js</li>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


function Profile() {
    const userdata = [
        {
            img: 'images/person1.jpg',
            name: 'mary',
            place: 'micaelpuram',
            role: 'backend developer',
        },
        {
            img: 'images/person2.jpg',
            name: 'mary1',
            place: 'micaelpuram',
            role: 'UI/Ux developer',
        },
        {
            img: 'images/person3.avif',
            name: 'mary2',
            place: 'chennai',
            role: 'frontend developer',
        },
    ]

    return (
        <>
            <ProfileCard userdata={userdata} />
        </>
    )
}

export default Profile;