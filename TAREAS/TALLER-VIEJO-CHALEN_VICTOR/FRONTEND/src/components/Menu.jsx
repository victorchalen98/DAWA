import React, { useState } from 'react';
import '../stylesheets/Menu.css';

const Menu = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const menuItems = [
        { name: 'Inicio',  },
        { 
            name: 'Tipo de Estudiante', 
            
            submenu: [
                { name: 'Docente',},
                { name: 'Estudiante',  }
            ]
        },

        { 
            name: 'Configuración', 
            link: '/configuracion', 
            submenu: [
                { name: 'General', link: '/configuracion/general' },
                { name: 'Seguridad', link: '/configuracion/seguridad' }
            ]
        },
        { name: 'Universidad', link: '/' }
        ,
        { name: 'Facultad', link: '/' }
        ,
        { name: 'Carrera', link: '/' }
        ,
        { name: 'Facultad', link: '/' }
        ,
        { name: 'Salir', link: '/' }
    ];

    const handleItemClick = (index) => {
        if (menuItems[index].submenu) {
            setOpenSubmenu(openSubmenu === index ? null : index);
        } else {
            setActiveItem(index);
            setOpenSubmenu(null);
        }
    };

    return (
        <div className="menu">
            {menuItems.map((item, index) => (
                <div key={index}>
                    <div
                        className={`menu-item ${activeItem === index ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        {item.name}
                    </div>
                    {item.submenu && openSubmenu === index && (
                        <div className="submenu">
                            {item.submenu.map((subitem, subindex) => (
                                <div 
                                    key={subindex} 
                                    className="submenu-item"
                                    onClick={() => setActiveItem(index)}
                                >
                                    {subitem.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Menu;
