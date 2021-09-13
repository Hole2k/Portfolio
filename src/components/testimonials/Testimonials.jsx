import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            icon: "assets/twitter.png",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut laborum culpa optio accusantium alias impedit similique, quod sed minus perspiciatis"
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPyMgFFR2vDZX-0q69XVu26b4_5wtYsG7y_KwcKuGzApgayKA-O554KvABEvu3QJJuRc&usqp=CAU",
            icon: "assets/youtube.png",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut laborum culpa optio accusantium alias impedit similique, quod sed minus perspiciatis"
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            icon: "assets/linkedin.png",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut laborum culpa optio accusantium alias impedit similique, quod sed minus perspiciatis"
        }
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}}</h4>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}
