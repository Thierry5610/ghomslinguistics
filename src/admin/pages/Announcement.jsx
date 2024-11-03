import React from 'react';
import { Twitter, Edit2, Trash2, ExternalLink, Plus } from 'lucide-react';
import { ActionButton, DisplaySocial, PageHeading } from '../components/Atoms';
import { announcementsDetailed } from '../db';

const AnnouncementCard = ({ announcement, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h2 className="text-basetext-gray-900">{announcement.headline}</h2>
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
      </div>
    </div>
    
    <div className="flex gap-6">
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-4">{announcement.text}</p>
        <a 
          href={announcement.socialLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-600 font-medium"
        >
          <DisplaySocial social={announcement.socialNetwork}/>
          <span>View on {announcement.socialNetwork}</span>
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
 const announcements = announcementsDetailed
  const handleEdit = (id) => {
    console.log('Edit announcement:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete announcement:', id);
  };

  return (
    <div className="p-6 space-y-6">
    <div className='flex justify-between w-full'>
        <PageHeading text={"Announcements"}/>
        <ActionButton icon={Plus} label={"Annoucement"}/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {announcements.map(announcement => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
    );
}
export default Announcements;