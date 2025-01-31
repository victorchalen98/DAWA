import "../stylesheets/RightBar.css";


const RightBar = () => {


  return (
    <div className="right-bar"> 
    <div className="container-right-bar">
      <div className="item-rightbar-suggestion">
        <span className="span-right-bar-suggestion">Sugerencias Para Ti</span>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
            <img className="img-right-bar" src="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2335639.png&w=350&h=254" alt="" />
            <span className="span-right-bar-name">Jon Jones</span>
          </div>
          <div className="btn-right-bar">
            <button className="btn-right-bar-seguir">Seguir</button>
            <button className="btn-right-bar-seguir-deshacer">Deshacer</button>
          </div>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://pbs.twimg.com/profile_images/1016719078524739585/3O6IYCZQ_400x400.jpg" alt="" />
              <span className="span-right-bar-name">Daniel Cormier</span>
            </div>
            <div className="btn-right-bar">
              <button className="btn-right-bar-seguir">Seguir</button>
              <button className="btn-right-bar-seguir-deshacer">Deshacer</button>
          </div>
        </div>
        </div>
        <div className="item-rightbar-suggestion">
            <span className="span-right-bar-suggestion">Amigos Conectados</span>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3027545.png&w=350&h=254" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Brandon Moreno</span>
                  </div>
              </div>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2512089.png&w=350&h=254" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Demetrious Johnson</span>
                  </div>
              </div>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://kpopping.com/documents/54/1/750/SeoYeon-fullBodyPicture(4).webp?v=de937" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Yoon Seoyeon</span>
                  </div>
              </div>
              <div className="user-right-bar">
                <div className="user-info-right-bar">
                    <img className="img-right-bar" src="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2614933.png&w=350&h=254" alt="" />
                    <div className="online-right-bar"/>
                    <span className="span-right-bar-name">Max Holloway</span>
                  </div>
              </div>
              
          </div>
        <div className="item-rightbar-suggestion">

        <span className="span-right-bar-suggestion">Actividades Recientes</span>
          <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://tentulogo.com/wp-content/uploads/Mark-Zuckerberg.jpg" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Mark Zuckerberg</span> 
              </p>
            </div>
            <span className="span-hora">Hace 1 min</span>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://kpopping.com/documents/9c/2/750/SooMin-fullBodyPicture(2).webp?v=de937" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Kim Soomin</span> 
              </p>
            </div>
            <span className="span-hora">Hace 6 min</span>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://haor.org/wp-content/uploads/2024/03/Scott-Wu.webp" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Scott Wu</span> 
              </p>
            </div>
            <span className="span-hora">Hace 17 min</span>
        </div>
        <div className="user-right-bar">
          <div className="user-info-right-bar">
              <img className="img-right-bar" src="https://www.zdnet.com/a/img/resize/d3fc129843fca3d7bb92a04e3d6f808008a776e5/2021/10/04/18d804dd-6e7c-4d6a-964d-b3475151438e/linus-torvalds.jpg?auto=webp&width=1280" alt="" />
              <p className="p-right-bar"> 
              <span className="span-right-bar-name">Linus Torvalds</span> 
              </p>
            </div>
            <span className="span-hora">Hace 25 min</span>
        </div>
        </div>
          
    </div>
    </div>
      
  );
};

export default RightBar;