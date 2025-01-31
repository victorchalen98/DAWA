import "../stylesheets/Posts.css";
import  Post_Interno from "./Post_Interno";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const Posts = () => {
    const posts = [
        {
          id: 1,
          name: "Dayanna Perez",
          userId: 1,
          profilePic:
          "https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          desc: "Disfrutando de momentos inolvidables con los mejores amigos. 🌟 #AmistadVerdadera #MomentosFelices",
          img: "https://images.unsplash.com/photo-1560439450-57df7ac6dbef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          likes: "17 Me Gusta", comen: "8 Cometarios", share: "4 Compartir"
        },
        {
          id: 2,
          name: "Brayan Doe",
          userId: 2,
          profilePic:
            "https://images.unsplash.com/photo-1664843917218-71f7b6bb3afc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Concentrados y trabajando juntos para alcanzar nuestras metas académicas. 📚✏️ #EstudioEnEquipo #Superación",
          img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          likes: "21 Me Gusta" , comen: "3 Cometarios", share: "2 Compartir"
        } 
      ];

    return (
        <div className="posts">
            {posts.map(posts=>(
                <Post_Interno posts ={posts} key={posts.id} />
            ))}
        </div>

    );
};

export default Posts;