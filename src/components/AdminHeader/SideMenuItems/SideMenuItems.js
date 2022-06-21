
import SidebarToggleButton from './SidebarToggleButton/SidebarToggleButton'
import Admininfo from './AdminInfo/AdminInfo'
import MenuJson from '../../../JsonData/MenuJson'
import { Link} from 'react-router-dom';
const SideMenuItems = () =>{
    return(
        <>
        <Admininfo/>
        {
        MenuJson.map((item,key) =>{
            return(
                <>
                  <hr className="sidebar-divider" key={key}/>
                            <div className="sidebar-heading">
                            {item.elementheading}
                            </div>
                    {item.items.map((element,key) =>{
                           return(
                                <li className="nav-item" key={key}>
                                    {
                                    element.datatarget ?  (<a className="nav-link collapsed" href="/" data-toggle="collapse" data-target={element.datatarget}
                                        aria-expanded="true" aria-controls={element.ariacontrols}>
                                        <i className={`fas fa-fw ${element.icon}`}></i>
                                        <span>{element.items_perent}</span>
                                        </a> ) : (<Link className='nav-link' to={element.path} >
                                        <i className={`fas fa-fw ${element.icon}`}></i>
                                        <span>{element.items_perent}</span>
                                            </Link> )
                                        }
                                      {/* <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target={element.datatarget}
                                        aria-expanded="true" aria-controls={element.ariacontrols}>
                                        <i className={`fas fa-fw ${element.icon}`}></i>
                                        <span>{element.items_perent}</span>
                                    </a>                        */}
          
                                     {element.items_child && <div id={element.id} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            <h6 className="collapse-header">Custom Components:</h6>
                                            {element.items_child.map((Childitems,key) =>{
                                                return(
                                                    <>
                                                    <Link  className="collapse-item" key={key} to={Childitems.path}> {Childitems.name}</Link>
                                                    </>
                                                )

                                            })}

                                        </div>
                                    </div>
                      }
                                </li>
                                  )
                                    })}

                
                </>
            )
        })}
        <SidebarToggleButton/>
        </>

    )
}
 export default SideMenuItems;