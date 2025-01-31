import "../stylesheets/Stories.css";


const Stories = () => {

    const stories = [
        {
          id: 1,
          name: "Kevin Durant",
          img: "https://images.unsplash.com/photo-1662065932213-db58efe35b74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          name: "Yoon Seoyeon",
          img: "https://pbs.twimg.com/media/GTFAoCxa0AAyQFY?format=jpg&name=large" ,
        },
        {
          id: 3,
          name: "Wood Harrelson",
          img: "https://images.unsplash.com/photo-1614642481956-192cc7cbfc6c?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 4,
          name: "Kim Soomin",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];

    return (
      <div className="stories"> 
      <div className="story">
                <img className="img-stories" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span className="span-stories">Tus Stories</span>
                <button className="btn-stories">+</button>
            </div>
        {stories.map(story =>(
            <div className="story" key={story.id} >
                <img className="img-stories" src={story.img} alt="" />
                <span className="span-stories">{story.name}</span>
            </div>
        ))}
      </div>
        
    );
  };
  
export default Stories;