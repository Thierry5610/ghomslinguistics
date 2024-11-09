import React, { useEffect, useState } from 'react';
import { Edit2, Trash2, ExternalLink, Plus, Pin } from 'lucide-react';
import { ActionButton, DisplaySocial, EmptyState, PageHeading } from '../components/Atoms';
import { announcementsDetailed } from '../db';
import AddAnnouncementModal from '../components/AddAnnouncementModal';
import { getAnnouncements, updateAnnouncement } from '../../SupabaseServices';

const AnnouncementCard = ({ announcement, onEdit, onDelete, onTogglePin }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow h-full">
    <div className="flex justify-between items-start mb-4">
      <h2 className="md:text-base font-medium text-sm text-gray-900">{announcement.headline}</h2>
      <div className="flex gap-2">
        <button 
          onClick={() => onEdit(announcement.id)}
          className="p-2 text-gray-500 hover:text-amber-500 rounded-full hover:bg-amber-50 transition-colors"
        >
          <Edit2 size={16} />
        </button>
        <button 
          onClick={() => onDelete(announcement.id)}
          className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
        >
          <Trash2 size={16} />
        </button>
        {announcement.pinned?        
        <button 
          onClick={() => onTogglePin(announcement.id)}
          className="p-2 text-green-500 rounded-full bg-green-50 transition-colors"
        >
          <Pin size={16} />
        </button>:
        <button 
          onClick={() => onTogglePin(announcement.id)}
          className="p-2 text-gray-500 hover:text-green-500 rounded-full hover:bg-green-50 transition-colors"
        >
          <Pin size={16} />
        </button>}
      </div>
    </div>
    
    <div className="flex gap-6">
      <div className="flex-1">
        <p className="md:text-sm text-xs text-gray-500 mb-4">{announcement.text}</p>
        <a 
          href={announcement.socialLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs md:text-sm text-amber-500 hover:text-amber-600 font-medium"
        >
          <DisplaySocial social={announcement.socialNetwork}/>
          <span>{announcement.socialNetwork}</span>
          <ExternalLink size={14} />
        </a>
      </div>
      
      <div className="relative rounded-lg overflow-hidden w-32 h-32 flex-shrink-0 before:absolute before:block before:inset-0 before:bg-black before:bg-opacity-50">
        <img 
          src={announcement.image} 
          alt="post image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Announcements = () => {
 const [announcements, setAnnouncements] = useState(announcementsDetailed);
 const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    setAnnouncements(data || []);
  };
  fetchAnnouncements();
}, []);

const handlePinToggle = async (announcement) => {
  const updatedAnnouncement = { ...announcement, pinned: !announcement.pinned };
  await updateAnnouncement(announcement.id, updatedAnnouncement);
  setAnnouncements(prev =>
    prev.map(a => (a.id === announcement.id ? updatedAnnouncement : a))
  );
};

const handleEdit = (announcement) => {
    setCurrentAnnouncement(announcement);
    setIsOpen(true);
    console.log('Edit announcement:', announcement);
  };

  const handleDelete = async (announcement) => {
    if (window.confirm('Delete this announcement?')) {
      await deleteAnnouncement(announcement.id)
      setAnnouncements(announcements.filter(a => a.id !== announcement.id));
    }
    console.log('Delete announcement:', announcement);
  };

  return (
      <>
        <div className="space-y-6">
          <div className='flex justify-between w-full'>
              <PageHeading text={"Announcements"}/>
              <ActionButton icon={Plus} label={"New"} onClick={() => setIsOpen(true)}/>
          </div>
          <div className="flex flex-wrap gap-4 justify-between items-stretch">
              {announcements.map(announcement => (
                <div className='basis-[49%] flex-1' key={announcement.id}>
                  <AnnouncementCard
                    announcement={announcement}
                    onEdit={() => handleEdit(announcement)}
                    onDelete={() => handleDelete(announcement)}
                    onTogglePin={()=>handlePinToggle(announcement)}
                  />
                </div>
              ))}
              {
                announcements.length === 0 && <EmptyState text={"No announcements found"}/>
              }
          </div>
        </div>
        {isOpen &&
        <AddAnnouncementModal 
          announcements={announcements}
          setAnnouncements={setAnnouncements}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentAnnouncement={currentAnnouncement}
          setCurrentAnnouncement={setCurrentAnnouncement}
        />}
      </>
    );
}
export default Announcements;
