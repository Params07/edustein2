import ProgramsList from "./ProgramsList";
import ExplorerData from "./ExplorerData";
import { useState,React } from "react";
function ProgramContents({ activeProgram, setActiveProgram }) {
    function handleProgram(){
        setActiveProgram(!activeProgram); 
        console.log(id)
    }
    const [id,setId]=useState(0);
    const programs = [
        {
            title: "CoreCraft",
            src: "images/image5.png",
            content: "Lorem ipsum dolor sit amet consectetur. Ut cursus ullamcorper fermentum vestibulum tellus tristique senectus. Leo mauris morbi maecenas morbi at quis morbi. Pretium ultricies tortor vulputate "
        },
        {
            title: "PathCraft",
            src: "images/image2.png",
            content: "Lorem ipsum dolor sit amet consectetur. Ut cursus ullamcorper fermentum vestibulum tellus tristique senectus. Leo mauris morbi maecenas morbi at quis morbi. Pretium ultricies tortor vulputate  "
        },
        {
            title: "MasteryCraft",
            src: "images/iamge7.png",
            content: "Lorem ipsum dolor sit amet consectetur. Ut cursus ullamcorper fermentum vestibulum tellus tristique senectus. Leo mauris morbi maecenas morbi at quis morbi. Pretium ultricies tortor vulputate "
        },
        {
            title: "ExpertTalk",
            src: "images/image4.png",
            content: "Lorem ipsum dolor sit amet consectetur. Ut cursus ullamcorper fermentum vestibulum tellus tristique senectus. Leo mauris morbi maecenas morbi at quis morbi. Pretium ultricies tortor vulputate "
        },
    ];
    const explorerData = [
        {
            title: "CoreCraft",
            define: "Are you feeling uncertain about which career path to choose? We understand that selecting the right domain can be a challenging decision. PathCraft is designed to guide you through this exciting and transformative journey of self-discovery and career decision-making.",
            questions:[{question: "What PathCraft Offers",
            sections: [
                {
                    title: "Comprehensive Self-Assessment",
                    content: [
                        "Begin with a series of introspective exercises and assessments to help you identify your core interests, strengths, and values.",
                        "Gain insights into your personality traits and how they align with various professional domains."
                    ]
                },
                {
                    title: "In-Depth Exploration of Fields",
                    content: [
                        "Dive deep into multiple career paths with expert-led sessions and workshops.",
                        "Learn about the day-to-day realities, required skills, and future prospects of various industries."
                    ]
                },
                {
                    title: "Skill Development Workshops",
                    content: [
                        "Participate in hands-on workshops to develop critical skills that are valuable across all professions.",
                        "Enhance your problem-solving, communication, and leadership abilities."
                    ]
                },
                {
                    title: "Mentorship and Networking Opportunities",
                    content: [
                        "Connect with experienced mentors from diverse fields who can provide guidance and support.",
                        "Build a network of like-minded peers and professionals to share experiences and opportunities."
                    ]
                },
                {
                    title: "Action Plan for Success",
                    content: [
                        "By the end of the bootcamp, create a personalized action plan outlining your steps to pursue your chosen career path.",
                        "Receive resources and recommendations for further learning and development."
                    ]
                }
            ]},
             { question:" Why Choose PathCraft?",
                sections: [
                    {
                        title: "Personalized Guidance",
                        content: ["Receive tailored advice and feedback based on your unique profile and aspirations.",
                        " Benefit from one-on-one mentoring sessions to address your specific questions and concerns."]
                    },
                    {
                        title: "Real-World Insights",
                        content: ["Gain exposure to real-world scenarios and challenges through case studies, guest speakers, and industry visits.",
                        " Understand the evolving trends and demands of different career fields."]
                    },
                    {
                        title: "Community and Support",
                        content: ["Join a supportive community of fellow participants who are also navigating their career choices.",
                        " Access ongoing support and resources even after the bootcamp ends."]
                    },
                    {
                       title: "programHighlights" ,
                           content:[ "duration: Intensive 4-week bootcamp",
                           "format :Hybrid (Online and In-Person)",
                           "activities:Workshops, Seminars, Mentorship, Networking Events",
                           "outcome:Clarity on career direction, actionable plan for future steps"]
                        }
                    
                ]
            }],
            conclusion:"PathCraft is more than just a bootcamp, it's a journey of self-discovery and empowerment. Take the first step towards a fulfilling career and a future aligned with your true passions and strengths. Join us at PathCraft and unlock your potential!",
            slogan:"\"Embrace the freedom to chart your own course.\""
        }  ,
        {
            title: "PathCraft",
            define: "Are you feeling uncertain about which career path to choose? We understand that selecting the right domain can be a challenging decision. PathCraft is designed to guide you through this exciting and transformative journey of self-discovery and career decision-making.",
            questions:[{question: "What PathCraft Offers",
            sections: [
                {
                    title: "Comprehensive Self-Assessment",
                    content: [
                        "Begin with a series of introspective exercises and assessments to help you identify your core interests, strengths, and values.",
                        "Gain insights into your personality traits and how they align with various professional domains."
                    ]
                },
                {
                    title: "In-Depth Exploration of Fields",
                    content: [
                        "Dive deep into multiple career paths with expert-led sessions and workshops.",
                        "Learn about the day-to-day realities, required skills, and future prospects of various industries."
                    ]
                },
                {
                    title: "Skill Development Workshops",
                    content: [
                        "Participate in hands-on workshops to develop critical skills that are valuable across all professions.",
                        "Enhance your problem-solving, communication, and leadership abilities."
                    ]
                },
                {
                    title: "Mentorship and Networking Opportunities",
                    content: [
                        "Connect with experienced mentors from diverse fields who can provide guidance and support.",
                        "Build a network of like-minded peers and professionals to share experiences and opportunities."
                    ]
                },
                {
                    title: "Action Plan for Success",
                    content: [
                        "By the end of the bootcamp, create a personalized action plan outlining your steps to pursue your chosen career path.",
                        "Receive resources and recommendations for further learning and development."
                    ]
                }
            ]},
             { question:" Why Choose PathCraft?",
                sections: [
                    {
                        title: "Personalized Guidance",
                        content: ["Receive tailored advice and feedback based on your unique profile and aspirations.",
                        " Benefit from one-on-one mentoring sessions to address your specific questions and concerns."]
                    },
                    {
                        title: "Real-World Insights",
                        content: ["Gain exposure to real-world scenarios and challenges through case studies, guest speakers, and industry visits.",
                        " Understand the evolving trends and demands of different career fields."]
                    },
                    {
                        title: "Community and Support",
                        content: ["Join a supportive community of fellow participants who are also navigating their career choices.",
                        " Access ongoing support and resources even after the bootcamp ends."]
                    },
                    {
                       title: "programHighlights" ,
                           content:[ "duration: Intensive 4-week bootcamp",
                           "format :Hybrid (Online and In-Person)",
                           "activities:Workshops, Seminars, Mentorship, Networking Events",
                           "outcome:Clarity on career direction, actionable plan for future steps"]
                        }
                    
                ]
            }],
            conclusion:"PathCraft is more than just a bootcamp, it's a journey of self-discovery and empowerment. Take the first step towards a fulfilling career and a future aligned with your true passions and strengths. Join us at PathCraft and unlock your potential!",
            slogan:"\"Embrace the freedom to chart your own course.\""
        } ,
        {
            title: "MasteryCraft",
            define: "Are you feeling uncertain about which career path to choose? We understand that selecting the right domain can be a challenging decision. PathCraft is designed to guide you through this exciting and transformative journey of self-discovery and career decision-making.",
            questions:[{question: "What PathCraft Offers",
            sections: [
                {
                    title: "Comprehensive Self-Assessment",
                    content: [
                        "Begin with a series of introspective exercises and assessments to help you identify your core interests, strengths, and values.",
                        "Gain insights into your personality traits and how they align with various professional domains."
                    ]
                },
                {
                    title: "In-Depth Exploration of Fields",
                    content: [
                        "Dive deep into multiple career paths with expert-led sessions and workshops.",
                        "Learn about the day-to-day realities, required skills, and future prospects of various industries."
                    ]
                },
                {
                    title: "Skill Development Workshops",
                    content: [
                        "Participate in hands-on workshops to develop critical skills that are valuable across all professions.",
                        "Enhance your problem-solving, communication, and leadership abilities."
                    ]
                },
                {
                    title: "Mentorship and Networking Opportunities",
                    content: [
                        "Connect with experienced mentors from diverse fields who can provide guidance and support.",
                        "Build a network of like-minded peers and professionals to share experiences and opportunities."
                    ]
                },
                {
                    title: "Action Plan for Success",
                    content: [
                        "By the end of the bootcamp, create a personalized action plan outlining your steps to pursue your chosen career path.",
                        "Receive resources and recommendations for further learning and development."
                    ]
                }
            ]},
             { question:" Why Choose PathCraft?",
                sections: [
                    {
                        title: "Personalized Guidance",
                        content: ["Receive tailored advice and feedback based on your unique profile and aspirations.",
                        " Benefit from one-on-one mentoring sessions to address your specific questions and concerns."]
                    },
                    {
                        title: "Real-World Insights",
                        content: ["Gain exposure to real-world scenarios and challenges through case studies, guest speakers, and industry visits.",
                        " Understand the evolving trends and demands of different career fields."]
                    },
                    {
                        title: "Community and Support",
                        content: ["Join a supportive community of fellow participants who are also navigating their career choices.",
                        " Access ongoing support and resources even after the bootcamp ends."]
                    },
                    {
                       title: "programHighlights" ,
                           content:[ "duration: Intensive 4-week bootcamp",
                           "format :Hybrid (Online and In-Person)",
                           "activities:Workshops, Seminars, Mentorship, Networking Events",
                           "outcome:Clarity on career direction, actionable plan for future steps"]
                        }
                    
                ]
            }],
            conclusion:"PathCraft is more than just a bootcamp, it's a journey of self-discovery and empowerment. Take the first step towards a fulfilling career and a future aligned with your true passions and strengths. Join us at PathCraft and unlock your potential!",
            slogan:"\"Embrace the freedom to chart your own course.\""
        }  ,
        {
            title: "ExpertTalk",
            define: "Are you feeling uncertain about which career path to choose? We understand that selecting the right domain can be a challenging decision. PathCraft is designed to guide you through this exciting and transformative journey of self-discovery and career decision-making.",
            questions:[{question: "What PathCraft Offers",
            sections: [
                {
                    title: "Comprehensive Self-Assessment",
                    content: [
                        "Begin with a series of introspective exercises and assessments to help you identify your core interests, strengths, and values.",
                        "Gain insights into your personality traits and how they align with various professional domains."
                    ]
                },
                {
                    title: "In-Depth Exploration of Fields",
                    content: [
                        "Dive deep into multiple career paths with expert-led sessions and workshops.",
                        "Learn about the day-to-day realities, required skills, and future prospects of various industries."
                    ]
                },
                {
                    title: "Skill Development Workshops",
                    content: [
                        "Participate in hands-on workshops to develop critical skills that are valuable across all professions.",
                        "Enhance your problem-solving, communication, and leadership abilities."
                    ]
                },
                {
                    title: "Mentorship and Networking Opportunities",
                    content: [
                        "Connect with experienced mentors from diverse fields who can provide guidance and support.",
                        "Build a network of like-minded peers and professionals to share experiences and opportunities."
                    ]
                },
                {
                    title: "Action Plan for Success",
                    content: [
                        "By the end of the bootcamp, create a personalized action plan outlining your steps to pursue your chosen career path.",
                        "Receive resources and recommendations for further learning and development."
                    ]
                }
            ]},
             { question:" Why Choose PathCraft?",
                sections: [
                    {
                        title: "Personalized Guidance",
                        content: ["Receive tailored advice and feedback based on your unique profile and aspirations.",
                        " Benefit from one-on-one mentoring sessions to address your specific questions and concerns."]
                    },
                    {
                        title: "Real-World Insights",
                        content: ["Gain exposure to real-world scenarios and challenges through case studies, guest speakers, and industry visits.",
                        " Understand the evolving trends and demands of different career fields."]
                    },
                    {
                        title: "Community and Support",
                        content: ["Join a supportive community of fellow participants who are also navigating their career choices.",
                        " Access ongoing support and resources even after the bootcamp ends."]
                    },
                    {
                       title: "programHighlights" ,
                           content:[ "duration: Intensive 4-week bootcamp",
                           "format :Hybrid (Online and In-Person)",
                           "activities:Workshops, Seminars, Mentorship, Networking Events",
                           "outcome:Clarity on career direction, actionable plan for future steps"]
                        }
                    
                ]
            }],
            conclusion:"PathCraft is more than just a bootcamp, it's a journey of self-discovery and empowerment. Take the first step towards a fulfilling career and a future aligned with your true passions and strengths. Join us at PathCraft and unlock your potential!",
            slogan:"\"Embrace the freedom to chart your own course.\""
        }   
    ];
   
    return (
        <>
           {
            activeProgram? <ProgramsList programs={programs} handleProgram={handleProgram} setId={setId}/>:
            <ExplorerData explorerData={explorerData[id]} handleProgram={handleProgram}/>
           }
        </>
    );
    
}

export default ProgramContents;
