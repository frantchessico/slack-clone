import React, { useEffect, useState} from 'react';
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from '../sidebarOptions/SidebarOptions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import { firebaseApp } from '../../firebase';
import { firestore } from '../../firebase'



function Sidebar() {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
           firestore.collection('rooms')
           .onSnapshot(snapshot => {
               setChannels(
                   snapshot.docs.map(doc => ({
                       id: doc.id,
                       name: doc.data().name
                   }))
               )
           });
    }, []);
  
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
             <div className='sidebar_info'>
             <h2>JavaScript Dev</h2>
                <h3>
                       <FiberManualRecordIcon />
                       Francisco Inoque
                </h3>
             </div>
                <CreateIcon/>
                 
            </div>

            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />

            <SidebarOptions Icon={ InboxIcon }  title="Mentions & reactions" />

             <SidebarOptions Icon={DraftsIcon} title="Saved items" />

           


             <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />

            
            <hr/>

            <SidebarOptions Icon={  PeopleAltIcon }  title="People & user groups" />
            <SidebarOptions Icon={ AppsIcon }  title="Apps" />
            <SidebarOptions Icon={  FileCopyIcon }  title="File browser" />
            <SidebarOptions Icon={ ExpandLessIcon}  title="Show less" />
            <SidebarOptions Icon={ ExpandMoreIcon }  title="Channels" />
            <hr/>
            <SidebarOptions Icon={ AddIcon }  title="Channel" />
            {channels.map(channel => (
                <SidebarOptions title={channel.name} id={channel.id}></SidebarOptions>
            ))}
        </div>
    )
}

export default Sidebar
